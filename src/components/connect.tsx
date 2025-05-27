"use client";

import {
  CheckIcon,
  XIcon,
  SpinnerIcon,
  SealCheckIcon,
} from "@phosphor-icons/react";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Connect() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message.trim(),
          email: email.trim() || undefined,
          name: name.trim() || undefined,
        }),
      });

      const data = (await response.json()) as {
        success: boolean;
        error?: string;
      };

      if (data.success) {
        setFormState("success");
        setMessage("");
        setEmail("");
        setName("");
        // Reset to idle after 3 seconds
        setTimeout(() => setFormState("idle"), 3000);
      } else {
        setFormState("error");
        setErrorMessage(data.error ?? "Failed to send message");
      }
    } catch (error) {
      setFormState("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  const getButtonContent = () => {
    switch (formState) {
      case "loading":
        return (
          <>
            <SpinnerIcon size={12} className="animate-spin" />
            Sending...
          </>
        );
      case "success":
        return (
          <>
            <CheckIcon size={12} />
            Sent!
          </>
        );
      case "error":
        return (
          <>
            <XIcon size={12} />
            Try Again
          </>
        );
      default:
        return "Send";
    }
  };

  const getButtonStyles = () => {
    switch (formState) {
      case "loading":
        return "bg-gray-400 cursor-not-allowed";
      case "success":
        return "bg-green-600";
      case "error":
        return "bg-red-600";
      default:
        return "bg-black hover:bg-gray-800";
    }
  };

  return (
    <div className="mt-5 flex flex-col items-start justify-start gap-3">
      <form
        onSubmit={handleSubmit}
        className="grid w-full grid-cols-1 gap-2 md:grid-cols-2"
      >
        {/* Optional name field */}
        <div className="flex items-center justify-start gap-1 rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-black">
          <input
            type="text"
            placeholder="☃︎ your good name"
            value={name}
            autoFocus
            required
            onChange={(e) => setName(e.target.value)}
            disabled={formState === "loading"}
            className="w-full border-none px-2 py-2 outline-none focus-within:outline-none disabled:bg-transparent disabled:text-gray-500"
          />
        </div>

        {/* Optional email field */}
        <div className="flex items-center justify-start gap-1 rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-black">
          <input
            type="email"
            placeholder="⎄ your important email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            disabled={formState === "loading"}
            className="w-full border-none px-2 py-2 outline-none focus-within:outline-none disabled:bg-transparent disabled:text-gray-500"
          />
        </div>
        <div className="col-span-2 flex items-center justify-start gap-1 rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-black">
          <input
            type="text"
            placeholder="⚘ your message for hritu"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            disabled={formState === "loading"}
            className="w-full border-none px-2 py-2 outline-none focus-within:outline-none disabled:bg-transparent disabled:text-gray-500"
            maxLength={1000}
          />
          <button
            type="submit"
            disabled={formState === "loading" || !message.trim()}
            className={`flex w-fit items-center gap-1 rounded-full px-4 py-2 whitespace-nowrap text-white transition-colors ${getButtonStyles()} disabled:cursor-not-allowed`}
          >
            {getButtonContent()}
          </button>
        </div>

        {/* Status messages */}
        {formState === "error" && errorMessage && (
          <div className="col-span-2 flex w-fit items-center justify-start gap-1 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
            {errorMessage}
            <XIcon onClick={() => setFormState("idle")} size={12} />
          </div>
        )}

        {formState === "success" && (
          <div className="col-span-2 flex w-fit items-center justify-start gap-1 rounded-lg bg-green-50 px-3 py-2 text-xs text-green-700">
            <SealCheckIcon size={12} />
            Message sent successfully! I&apos;ll get back to you soon.
          </div>
        )}
      </form>
    </div>
  );
}
