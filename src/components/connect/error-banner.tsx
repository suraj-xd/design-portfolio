import { XIcon } from "@phosphor-icons/react";

export default function ErrorBanner({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  return (
    <div className="col-span-2 flex w-fit items-center justify-start gap-1 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
      {message}
      <XIcon size={12} onClick={onClose} />
    </div>
  );
}
