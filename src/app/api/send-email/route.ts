import { type NextRequest, NextResponse } from "next/server";
import nodemailer, { type Transporter } from "nodemailer";
import { z } from "zod";
import { env } from "~/env";

// Define the type for the request body
interface EmailRequestBody {
  message: string;
  email?: string;
  name?: string;
}

// Define type for email response
interface EmailResponse {
  messageId: string;
}

// Environment validation schema
const envSchema = z.object({
  GMAIL_APP_ID: z.string().min(1),
  GMAIL_APP_PASSWORD: z.string().min(1),
  EMAIL_TO: z.string().email(),
});

type EnvSchema = z.infer<typeof envSchema>;

// Validate environment variables
function validateEnv(): EnvSchema {
  const parsed = envSchema.safeParse({
    GMAIL_APP_ID: env.GMAIL_APP_ID,
    GMAIL_APP_PASSWORD: env.GMAIL_APP_PASSWORD,
    EMAIL_TO: env.EMAIL_TO,
  });

  if (!parsed.success) {
    throw new z.ZodError(parsed.error.errors);
  }

  return parsed.data;
}

const emailSchema = z.object({
  message: z.string().min(1, "Message is required").max(1000, "Message too long"),
  email: z.string().email("Invalid email address").optional(),
  name: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables first
    const validEnv = validateEnv();
    
    const body = await request.json() as EmailRequestBody;
    const { message, email, name } = emailSchema.parse(body);

    // Create a transporter object using Gmail SMTP settings
    const transporter: Transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: validEnv.GMAIL_APP_ID,
        pass: validEnv.GMAIL_APP_PASSWORD,
      },
    });

    // Verify transporter
    await new Promise((resolve, reject) => {
      transporter.verify((error: Error | null) => {
        if (error) {
          console.log("Transporter verification error:", error);
          reject(error);
        } else {
          console.log("Ready to Send");
          resolve(true);
        }
      });
    });

    // Email to you (the portfolio owner)
    const myMailOptions = {
      from: email ?? "noreply.portfolio@gmail.com",
      to: validEnv.EMAIL_TO,
      subject: "New Contact Form Message from Portfolio",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            New Contact Form Message
          </h2>
          ${name ? `<div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong></p>
            <p style="color: #666;">${name}</p>
          </div>` : ''}
          ${email ? `<div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Email:</strong></p>
            <p style="color: #666;">${email}</p>
          </div>` : ''}
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>Sent from your portfolio contact form</p>
          </div>
        </div>
      `,
    };

    // Send email to you
    const myResponse = await transporter.sendMail(myMailOptions) as EmailResponse;

    let viewerResponse: EmailResponse | null = null;

    // Send confirmation email to the sender (if email provided)
    if (email) {
      const viewerMailOptions = {
        from: validEnv.GMAIL_APP_ID,
        to: email,
        subject: "Thank you for your message!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
              Thank you for reaching out!
            </h2>
            <p>Hi ${name ?? "there"},</p>
            <p>Thank you${name ? ` ${name}` : ""} for taking the time to reach out through my portfolio. I truly appreciate your message! 😊</p>
            <p>I&apos;ve received your message and will get back to you as soon as possible.</p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold;">Your message:</p>
              <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p>If you have any additional thoughts or questions, please don&apos;t hesitate to reach out again.</p>
            <p>Thanks again for your interest in my work!</p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p>Best regards,<br />Suraj Gaud</p>
            </div>
          </div>
        `,
      };

      viewerResponse = await transporter.sendMail(viewerMailOptions) as EmailResponse;
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
      myResponse: myResponse.messageId,
      viewerResponse: viewerResponse?.messageId ?? null,
    });

  } catch (error) {
    console.error("Email sending error:", error);
    
    if (error instanceof z.ZodError) {
      // Determine if it's an environment validation error or form validation error
      const isEnvError = error.errors.some(err => 
        ['GMAIL_APP_ID', 'GMAIL_APP_PASSWORD', 'EMAIL_TO'].includes(err.path[0] as string)
      );

      if (isEnvError) {
        return NextResponse.json(
          {
            success: false,
            error: "Email service not configured. Please contact the administrator."
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { 
          success: false, 
          error: "Invalid input data",
          details: error.errors 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to send email. Please try again later." 
      },
      { status: 500 }
    );
  }
} 