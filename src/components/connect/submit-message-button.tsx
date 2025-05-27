import { CheckIcon, SpinnerIcon, CloseIcon } from "../phosphorous-icons";
import type { FormState, FormData } from "./types";

const buttonConfig = {
  loading: {
    content: (
      <>
        <SpinnerIcon />
        Sending...
      </>
    ),
    style: "bg-gray-400 cursor-not-allowed",
  },
  success: {
    content: (
      <>
        <CheckIcon />
        Sent!
      </>
    ),
    style: "bg-green-600",
  },
  error: {
    content: (
      <>
        <CloseIcon />
        Try Again
      </>
    ),
    style: "bg-red-600",
  },
  idle: { content: "Send", style: "bg-black hover:bg-gray-800" },
};
export default function SubmitMessageButton({
  formState,
  formData,
}: {
  formState: FormState;
  formData: FormData;
}) {
  return (
    <button
      type="submit"
      disabled={formState === "loading" || !formData.message.trim()}
      className={`flex w-fit items-center gap-1 rounded-full px-4 py-2 whitespace-nowrap text-white transition-colors ${buttonConfig[formState].style} disabled:cursor-not-allowed`}
    >
      {buttonConfig[formState].content}
    </button>
  );
}
