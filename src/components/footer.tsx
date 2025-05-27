import { LightningIcon, XLogoIcon } from "@phosphor-icons/react";

import { socialLinkEnum } from "~/constants";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
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
      <div className="relative flex items-center justify-center gap-2 rounded-[40px] rounded-b-none border-2 border-[#e2e3db] bg-[#f1f2ec] px-20 pt-3 pb-2 text-sm font-medium text-black shadow-inner">
        <LightningIcon size={16} />
        Currently High on Creativity
      </div>
    </div>
  );
}
