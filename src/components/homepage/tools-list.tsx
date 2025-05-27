import StarFourBadge from "../star-four-badge";
import { tools } from "~/constants/tools";

export default function ToolsList() {
  return (
    <div className="mt-5 flex w-full flex-col items-start justify-start gap-3">
      <StarFourBadge title="tools" />

      <div className="flex flex-wrap items-center justify-start gap-1">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center justify-start gap-1 rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-black"
          >
            {tool.icon}
            {tool.name}
          </div>
        ))}
      </div>
    </div>
  );
}
