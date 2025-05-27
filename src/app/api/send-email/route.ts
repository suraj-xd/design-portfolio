import { type NextRequest, NextResponse } from "next/server";
import nodemailer, { type Transporter } from "nodemailer";
import { z } from "zod";
import { render } from "@react-email/render";
import { env } from "~/env";
import { ContactNotificationEmail } from "~/emails/contact-notification";
import { ThankYouEmail } from "~/emails/thank-you";

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

    // Generate HTML for notification email using React Email
    const notificationEmailHtml = await render(
      ContactNotificationEmail({ name, email, message })
    );

    // Email to you (the portfolio owner)
    const myMailOptions = {
      from: email ?? "noreply.portfolio@gmail.com",
      to: validEnv.EMAIL_TO,
      subject: "New Contact Form Message from Portfolio",
      html: notificationEmailHtml,
    };

    // Send email to you
    const myResponse = await transporter.sendMail(myMailOptions) as EmailResponse;

    let viewerResponse: EmailResponse | null = null;

    // Send confirmation email to the sender (if email provided)
    if (email) {
      // Generate HTML for thank you email using React Email
      const thankYouEmailHtml = await render(
        ThankYouEmail({ name, message })
      );

      const viewerMailOptions = {
        from: validEnv.GMAIL_APP_ID,
        to: email,
        subject: "Thank you for your message!",
        html: thankYouEmailHtml,
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