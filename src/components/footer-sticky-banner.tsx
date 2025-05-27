import { LightningIcon } from "./phosphorous-icons";

export default function FooterStickyBanner() {
  return (
    <div className="relative right-0 bottom-0 left-0 z-50">
      <div className="flex items-center justify-center gap-2 rounded-[40px] rounded-b-none border-2 border-[#e2e3db] bg-[#f1f2ec] px-20 pt-3 pb-2 text-sm font-medium text-black shadow-inner">
        <LightningIcon />
        Currently High on Creativity
      </div>
    </div>
  );
}
