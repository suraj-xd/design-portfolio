"use client";

import { useState } from "react";

export default function EmailPreviewPage() {
  const [activeTemplate, setActiveTemplate] = useState<
    "notification" | "thankyou"
  >("notification");

  // Sample data for preview
  const sampleData = {
    name: "John Doe",
    email: "john.doe@example.com",
    message:
      "Hi Suraj,\n\nI came across your portfolio and I'm really impressed with your work! I'd love to discuss a potential collaboration on a project I'm working on.\n\nLooking forward to hearing from you.\n\nBest regards,\nJohn",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Email Template Preview
              </h1>
              <p className="text-gray-600">
                Preview your beautiful email templates
              </p>
            </div>

            {/* Template Selector */}
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTemplate("notification")}
                className={`rounded-lg px-4 py-2 font-medium transition-colors ${
                  activeTemplate === "notification"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Notification Email
              </button>
              <button
                onClick={() => setActiveTemplate("thankyou")}
                className={`rounded-lg px-4 py-2 font-medium transition-colors ${
                  activeTemplate === "thankyou"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Thank You Email
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Content */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          {/* Email Info */}
          <div className="border-b bg-gray-50 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {activeTemplate === "notification"
                    ? "Contact Notification Email"
                    : "Thank You Email"}
                </h3>
                <p className="text-sm text-gray-600">
                  {activeTemplate === "notification"
                    ? "Email sent to you when someone contacts through your portfolio"
                    : "Confirmation email sent to the person who contacted you"}
                </p>
              </div>
              <div className="text-sm text-gray-500">
                <div>
                  <strong>To:</strong>{" "}
                  {activeTemplate === "notification"
                    ? "you@example.com"
                    : sampleData.email}
                </div>
                <div>
                  <strong>From:</strong>{" "}
                  {activeTemplate === "notification"
                    ? sampleData.email
                    : "you@example.com"}
                </div>
              </div>
            </div>
          </div>

          {/* Email Preview */}
          <div className="p-6">
            <div className="overflow-hidden rounded-lg border">
              <iframe
                srcDoc={`
                  <!DOCTYPE html>
                  <html>
                    <head>
                      <meta charset="utf-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Email Preview</title>
                    </head>
                    <body style="margin: 0; padding: 20px; background-color: #f8fafc;">
                      <div id="email-content"></div>
                      <script type="module">
                        import React from 'https://esm.sh/react@18';
                        import { createRoot } from 'https://esm.sh/react-dom@18/client';
                        
                        // This is a simplified preview - in a real implementation,
                        // you'd render the actual React Email component
                        const emailContent = \`
                          ${
                            activeTemplate === "notification"
                              ? `<div style="font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif; background-color: #f8fafc; padding: 20px;">
                                <div style="max-width: 580px; margin: 0 auto;">
                                  <div style="text-align: center; padding: 32px 0;">
                                    <div style="margin: 0 auto 24px; width: 64px; height: 64px;">
                                      <div style="background-color: #1f2937; color: #ffffff; font-size: 24px; font-weight: bold; width: 64px; height: 64px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">SG</div>
                                    </div>
                                    <h1 style="color: #1f2937; font-size: 28px; font-weight: bold; margin: 16px 0 8px; padding: 0; line-height: 1.3;">New Contact Message</h1>
                                    <p style="color: #6b7280; font-size: 16px; line-height: 1.4; margin: 0;">Someone reached out through your portfolio contact form</p>
                                  </div>
                                  <hr style="border-color: #e5e7eb; margin: 32px 0;">
                                  <div style="background-color: #ffffff; border-radius: 12px; padding: 32px; border: 1px solid #e5e7eb; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);">
                                    <div style="margin-bottom: 24px;">
                                      <p style="color: #374151; font-size: 14px; font-weight: 600; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.05em;">From</p>
                                      <p style="color: #1f2937; font-size: 16px; line-height: 1.5; margin: 0;">${sampleData.name}</p>
                                    </div>
                                    <div style="margin-bottom: 24px;">
                                      <p style="color: #374151; font-size: 14px; font-weight: 600; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.05em;">Email</p>
                                      <a href="mailto:${sampleData.email}" style="color: #3b82f6; font-size: 16px; line-height: 1.5; text-decoration: none; font-weight: 500;">${sampleData.email}</a>
                                    </div>
                                    <div style="margin-bottom: 24px;">
                                      <p style="color: #374151; font-size: 14px; font-weight: 600; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
                                      <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
                                        <p style="color: #1f2937; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${sampleData.message}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <hr style="border-color: #e5e7eb; margin: 32px 0;">
                                  <div style="text-align: center; padding: 24px 0;">
                                    <p style="color: #6b7280; font-size: 14px; margin: 0 0 8px 0;">Sent from your portfolio contact form</p>
                                    <p style="color: #9ca3af; font-size: 12px; margin: 0;">${new Date().toLocaleDateString()}</p>
                                  </div>
                                </div>
                              </div>`
                              : `<div style="font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif; background-color: #f8fafc; padding: 20px;">
                                <div style="max-width: 580px; margin: 0 auto;">
                                  <div style="text-align: center; padding: 32px 0;">
                                    <div style="margin: 0 auto 24px; width: 64px; height: 64px;">
                                      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; font-size: 24px; font-weight: bold; width: 64px; height: 64px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);">SG</div>
                                    </div>
                                    <h1 style="color: #1f2937; font-size: 28px; font-weight: bold; margin: 16px 0 8px; padding: 0; line-height: 1.3;">Thank you for reaching out!</h1>
                                    <p style="color: #6b7280; font-size: 16px; line-height: 1.4; margin: 0;">I appreciate you taking the time to connect with me</p>
                                  </div>
                                  <hr style="border-color: #e5e7eb; margin: 32px 0;">
                                  <div style="background-color: #ffffff; border-radius: 12px; padding: 32px; border: 1px solid #e5e7eb; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);">
                                    <p style="color: #1f2937; font-size: 18px; font-weight: 600; margin: 0 0 24px 0; line-height: 1.4;">Hi ${sampleData.name} 👋</p>
                                    <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">Thank you for taking the time to reach out through my portfolio. I truly appreciate your message and the opportunity to connect!</p>
                                    <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">I've received your message and will get back to you as soon as possible. In the meantime, feel free to explore more of my work or connect with me on social media.</p>
                                    <div style="margin: 32px 0;">
                                      <p style="color: #6b7280; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your message:</p>
                                      <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-left: 4px solid #667eea; border-radius: 8px; padding: 20px;">
                                        <p style="color: #1f2937; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap; font-style: italic;">${sampleData.message}</p>
                                      </div>
                                    </div>
                                    <div style="text-align: center; margin: 32px 0; padding: 24px; background-color: #f9fafb; border-radius: 8px;">
                                      <p style="color: #374151; font-size: 16px; margin: 0 0 20px 0; font-weight: 500;">While you wait, check out my latest work:</p>
                                      <a href="https://surajgaud.com" style="background-color: #667eea; border-radius: 8px; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; text-align: center; display: inline-block; padding: 12px 24px; box-shadow: 0 2px 4px rgba(102, 126, 234, 0.2);">View Portfolio</a>
                                    </div>
                                  </div>
                                  <hr style="border-color: #e5e7eb; margin: 32px 0;">
                                  <div style="text-align: center; padding: 24px 0 0 0;">
                                    <p style="color: #1f2937; font-size: 16px; margin: 0 0 8px 0; line-height: 1.5;">Best regards,<br><strong>Suraj Gaud</strong></p>
                                    <p style="color: #6b7280; font-size: 14px; margin: 0 0 16px 0;">Designer & Developer</p>
                                    <p style="color: #9ca3af; font-size: 12px; margin: 0; line-height: 1.4;">This is an automated response. I'll personally reply to your message soon!</p>
                                  </div>
                                </div>
                              </div>`
                          }
                        \`;
                        
                        document.getElementById('email-content').innerHTML = emailContent;
                      </script>
                    </body>
                  </html>
                `}
                className="h-[800px] w-full border-0"
                title="Email Preview"
              />
            </div>
          </div>

          {/* Template Info */}
          <div className="border-t bg-gray-50 px-6 py-4">
            <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">
                  Template Features:
                </h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Modern, minimal design</li>
                  <li>• Fully responsive layout</li>
                  <li>• Cross-client compatibility</li>
                  <li>• Beautiful typography</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">
                  Built with:
                </h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• React Email components</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Tailwind-inspired styling</li>
                  <li>• Professional branding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-blue-900">
            How to use these templates:
          </h3>
          <div className="space-y-2 text-blue-800">
            <p>
              1. These templates are automatically used in your contact form API
            </p>
            <p>
              2. Customize the social links and portfolio URL in the templates
            </p>
            <p>3. Update the logo/branding to match your design</p>
            <p>4. Test the contact form to see them in action!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
