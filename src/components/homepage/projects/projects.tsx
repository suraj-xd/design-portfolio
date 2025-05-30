"use client";

import { useState } from "react";
import { projectsData } from "~/constants/projects";
import ProjectTooltip from "./project-tooltip";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  CardsThreeIcon,
} from "~/components/phosphorous-icons";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="flex w-full flex-col items-start justify-start">
      <div className="flex items-center justify-start gap-1 rounded-2xl rounded-b-none bg-gray-100 px-4 py-2 font-serif text-sm leading-tight text-black">
        <CardsThreeIcon />
        latest projects
      </div>

      <div className="flex flex-wrap items-center justify-start gap-1 rounded-full rounded-t-none">
        {projectsData.map((project, index) => (
          <ProjectTooltip key={project.id} project={project}>
            <Link href={project.href} target="_blank">
              <div
                className={`flex cursor-pointer items-center justify-start gap-1 border border-gray-200 px-4 py-2 text-xs font-medium text-black transition-all duration-300 hover:bg-gray-200 ${index === 0 ? "rounded-2xl rounded-tl-none" : "rounded-full"} ${hoveredProject === project.id ? "bg-gray-100 shadow-sm" : ""} `}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {project.name}
                <ArrowUpRightIcon />
              </div>
            </Link>
          </ProjectTooltip>
        ))}
      </div>
    </div>
  );
}
