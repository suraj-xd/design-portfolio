import { StarFourIcon } from "@phosphor-icons/react";

export default function OpenToWork({
  openToWork,
}: {
  openToWork: boolean;
}) {
  if (!openToWork) return null;

  return (
    <div className="flex w-fit -rotate-6 items-center justify-start gap-1 rounded-full border border-gray-200 bg-gray-100 px-2 py-1 font-serif text-xs leading-tight text-black">
      <StarFourIcon weight="fill" className="animate-pulse" color="#00997e" size={10} />
      open to work
    </div>
  );
}
