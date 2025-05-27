import { SealCheckIcon } from "@phosphor-icons/react";

export default function SuccessBanner({
  message,
}: {
  message: string;
}) {
  return (
    <div className="col-span-2 flex w-fit items-center justify-start gap-1 rounded-lg bg-green-50 px-3 py-2 text-xs text-green-700">
      <SealCheckIcon size={12} />
      {message}
    </div>
  );
}