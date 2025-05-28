"use client";

import { useState } from "react";
import ThankYouEmail from "~/emails/thank-you";
import ContactNotificationEmail from "~/emails/contact-notification";

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
              <div className="h-[800px] w-full overflow-auto p-4">
                {activeTemplate === "notification" ? (
                  <ContactNotificationEmail
                    name={sampleData.name}
                    email={sampleData.email}
                    message={sampleData.message}
                  />
                ) : (
                  <ThankYouEmail
                    name={sampleData.name}
                    message={sampleData.message}
                  />
                )}
              </div>
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
