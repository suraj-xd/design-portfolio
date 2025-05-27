import Image from "next/image";
import { aiTools } from "~/constants/ai-tools";
import StarFourBadge from "./star-four-badge";
import { SparkleIcon } from "./phosphorous-icons";

export default function AiToolsList() {
  return (
    <div className="mt-5 flex w-full flex-col items-start justify-start gap-3">
      <StarFourBadge title="ai tools" icon={<SparkleIcon />} />
      {/* AI Tools */}
      <div className="flex flex-wrap items-center justify-start gap-1">
        {aiTools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center justify-start gap-1 rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-black"
          >
            {tool.icon}
            {tool.name}
          </div>
        ))}
        {/* Stitch by Google */}
        <div className="flex items-center justify-center gap-1 rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-black">
          Stitch by
          <Image src="/google.webp" alt="spline" width={14} height={14} />
        </div>
      </div>
    </div>
  );
}
