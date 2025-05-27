import { XLogoIcon } from "@phosphor-icons/react";

import Link from "next/link";
import { socialLinkEnum } from "~/constants";

export default function FeedbackBadge() {
  return (
    <div className="mt-16 rounded-4xl bg-gray-100 px-4 py-2 text-xs">
      <p className="flex items-center gap-1 text-gray-600">
        Feel free to drop a feedback my{" "}
        <Link
          href={socialLinkEnum.x}
          rel="noopener noreferrer"
          target="_blank"
          className="font-medium text-black hover:underline"
        >
          <XLogoIcon size={14} />
        </Link>{" "}
      </p>
    </div>
  );
}
