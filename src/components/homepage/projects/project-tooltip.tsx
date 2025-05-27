import { ArrowUpRightIcon } from "@phosphor-icons/react";
import * as Tooltip from "@radix-ui/react-tooltip";
import Image from "next/image";
import Link from "next/link";
import type { LatestProjectType } from "./types";
import { useMediaQuery } from "~/hooks/use-media-query";
import { MediaQueries } from "~/constants/media-queries";

export default function ProjectTooltip({
    project,
    children,
  }: {
    project: LatestProjectType;
    children: React.ReactNode;
  }) {
    const lgUp = useMediaQuery(MediaQueries.SmUp, { ssr: true, fallback: true });
  
    if (!lgUp) {
      return <>{children}</>;
    }

    return (
      <Tooltip.Provider delayDuration={100}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 z-50 overflow-hidden rounded-[20px] border border-gray-200 bg-white p-0 shadow-xl"
              sideOffset={8}
            >
              <div className="w-80">
                {/* Image/Video Section */}
                <div className="relative h-40 w-full overflow-hidden rounded-t-xl bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="rounded-t-xl object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-900 backdrop-blur-sm">
                      {project.status}
                    </span>
                  </div>
                </div>
  
                {/* Content Section */}
                <div className="p-4">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="font-serif text-lg leading-tight font-semibold text-gray-900">
                      {project.name}
                    </h3>
                    <Link
                      href={project.href ?? ""}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRightIcon
                        size={16}
                        className="mt-1 flex-shrink-0 text-gray-400 transition-colors hover:text-gray-600"
                      />
                    </Link>
                  </div>
  
                  <p className="mb-3 text-sm leading-relaxed text-gray-600">
                    {project.description}
                  </p>
  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project?.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Tooltip.Arrow className="fill-white" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
  }