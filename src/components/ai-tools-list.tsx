import Image from "next/image";
import StarFourBadge from "./star-four-badge";

const aiTools = [
  {
    name: "Synthesia",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="galileoIconID"
        className="text-primary h-4 w-4"
      >
        <title id="galileoIconID">Galileo Icon</title>
        <path
          d="M14.2914 1.49023L13.3031 2.47852L14.7172 3.89453L15.7054 2.9043L14.2914 1.49023ZM19.2953 2.04492L18.2953 3.04492L19.7093 4.45898L20.7093 3.45898L19.2953 2.04492ZM12.2816 3.50195L4.87926 10.9043C2.34526 13.4383 2.34526 17.5617 4.87926 20.0957C6.10626 21.3247 7.73992 22 9.47692 22C11.2139 22 12.8446 21.3227 14.0726 20.0957L19.7113 14.459L18.2972 13.0449L12.6566 18.6816C11.8076 19.5316 10.6789 20 9.47692 20C8.27492 20 7.14432 19.5316 6.29332 18.6816C5.44332 17.8316 4.97692 16.703 4.97692 15.5C4.97692 14.297 5.44432 13.1684 6.29332 12.3184L13.6957 4.91406L12.2816 3.50195ZM17.3031 4.03711L12.2953 9.04492L13.7093 10.459L18.7172 5.45117L17.3031 4.03711ZM20.2953 6.04492L19.2953 7.04492L20.7093 8.45898L21.7093 7.45898L20.2953 6.04492ZM18.2953 8.04492L13.2953 13.0449L14.7093 14.459L19.7093 9.45898L18.2953 8.04492ZM20.2953 11.0449L19.2953 12.0449L20.7093 13.459L21.7093 12.459L20.2953 11.0449ZM9.50035 13C8.83731 13 8.20143 13.2634 7.73259 13.7322C7.26375 14.2011 7.00035 14.837 7.00035 15.5C7.00035 16.163 7.26375 16.7989 7.73259 17.2678C8.20143 17.7366 8.83731 18 9.50035 18C9.82866 18 10.1537 17.9353 10.4571 17.8097C10.7604 17.6841 11.036 17.4999 11.2681 17.2678C11.5003 17.0356 11.6844 16.76 11.8101 16.4567C11.9357 16.1534 12.0004 15.8283 12.0004 15.5C12.0004 15.1717 11.9357 14.8466 11.8101 14.5433C11.6844 14.24 11.5003 13.9644 11.2681 13.7322C11.036 13.5001 10.7604 13.3159 10.4571 13.1903C10.1537 13.0647 9.82866 13 9.50035 13Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
  {
    name: "Galileo",
    icon: "",
  },
  {
    name: "Relume",
    icon: <Image src="/relume.png" alt="spline" width={40} height={15} />,
  },
  {
    name: "Midjourney",
    icon: <Image src="/mid.webp" alt="spline" width={20} height={20} />,
  },
];

export default function AiToolsList() {
  return (
    <div className="mt-5 flex w-full flex-col items-start justify-start gap-3">
      <StarFourBadge title="ai tools" />
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
