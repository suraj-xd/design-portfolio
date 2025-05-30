"use client";

import { useState } from "react";
import ErrorBanner from "./error-banner";
import SuccessBanner from "./success-banner";
import type { FormState, FormData } from "./types";
import SubmitMessageButton from "./submit-message-button";
import { cn } from "~/utils";

const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  disabled,
  className,
}: {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  className?: string;
}) => (
  <div className="flex items-center justify-start gap-1 rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-black">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      disabled={disabled}
      className={cn(
        "w-full border-none px-2 py-2 outline-none focus-within:outline-none disabled:bg-transparent disabled:text-gray-500",
        className,
      )}
      maxLength={name === "message" ? 1000 : undefined}
      autoComplete="off"
    />
  </div>
);

export default function Connect() {
  const [formData, setFormData] = useState<FormData>({
    message: "",
    email: "",
    name: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { message, email, name } = formData;
    if (!message.trim() || !email.trim() || !name.trim()) {
      setErrorMessage("Please fill in all fields");
      setFormState("error");
      return;
    }

    setFormState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: message.trim(),
          email: email.trim(),
          name: name.trim(),
        }),
      });

      const data = (await response.json()) as {
        success: boolean;
        error?: string;
      };

      if (data.success) {
        setFormState("success");
        setFormData({ message: "", email: "", name: "" });
        setTimeout(() => setFormState("idle"), 3000);
      } else {
        setFormState("error");
        setErrorMessage(data.error ?? "Failed to send message");
      }
    } catch {
      setFormState("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="mt-5 flex flex-col items-start justify-start gap-3">
      <form
        onSubmit={handleSubmit}
        className="grid w-full grid-cols-1 gap-2 md:grid-cols-2"
      >
        {/* Name */}
        <InputField
          type="text"
          name="name"
          placeholder="☃︎ your good name"
          value={formData.name}
          onChange={handleChange}
          disabled={formState === "loading"}
          className="capitalize"
        />

        {/* Email */}
        <InputField
          type="email"
          name="email"
          placeholder="⎄ your important email"
          value={formData.email}
          onChange={handleChange}
          disabled={formState === "loading"}
        />

        <div className="col-span-2 flex items-center justify-start gap-1 rounded-full border border-gray-200 py-2 pr-2 pl-4 text-xs font-medium text-black">
          {/* Message */}
          <input
            type="text"
            name="message"
            placeholder="⚘ your message for hritu"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={formState === "loading"}
            className="w-full border-none px-2 py-2 outline-none focus-within:outline-none disabled:bg-transparent disabled:text-gray-500"
            maxLength={1000}
            autoComplete="off"
          />

          {/* Submit Button */}
          <SubmitMessageButton formState={formState} formData={formData} />
        </div>

        {/* Error Message */}
        {formState === "error" && errorMessage && (
          <ErrorBanner
            message={errorMessage}
            onClose={() => setFormState("idle")}
          />
        )}

        {/* Success Message */}
        {formState === "success" && (
          <SuccessBanner message="Message sent successfully! I'll get back to you soon." />
        )}
      </form>
    </div>
  );
}
