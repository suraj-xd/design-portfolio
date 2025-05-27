import { StarFourIcon } from "@phosphor-icons/react";

export default function StarFourBadge({
  title,
  icon = <StarFourIcon size={12} />,
}: {
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-start gap-1 rounded-full bg-gray-100 px-4 py-2 font-serif text-sm leading-tight text-black">
      <StarFourIcon size={12} />
      {title}
    </div>
  );
}   