"use client";

import { ArrowUpRightIcon, CardsThreeIcon } from "@phosphor-icons/react";
import * as Tooltip from "@radix-ui/react-tooltip";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projectsData } from "~/constants";

function ProjectTooltip({
  project,
  children,
}: {
  project: (typeof projectsData)[0];
  children: React.ReactNode;
}) {
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
                  {project.tags.map((tag, index) => (
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

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="flex w-full flex-col items-start justify-start">
      <div className="flex items-center justify-start gap-1 rounded-2xl rounded-b-none bg-gray-100 px-4 py-2 font-serif text-sm leading-tight text-black">
        <CardsThreeIcon size={12} />
        latest projects
      </div>
      <div className="flex items-center justify-start gap-1 rounded-full rounded-t-none">
        {projectsData.map((project, index) => (
          <ProjectTooltip key={project.id} project={project}>
            <div
              className={`flex cursor-pointer items-center justify-start gap-1 border border-gray-200 px-4 py-2 text-xs font-medium text-black transition-all duration-300 hover:bg-gray-200 ${index === 0 ? "rounded-2xl rounded-tl-none" : "rounded-full"} ${hoveredProject === project.id ? "bg-gray-100 shadow-sm" : ""} `}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.name}
            </div>
          </ProjectTooltip>
        ))}
      </div>
    </div>
  );
}
