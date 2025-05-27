"use client";

import AiToolsList from "~/components/ai-tools-list";
import Projects from "~/components/projects";
import Social from "~/components/social";
import ToolsList from "~/components/tools-list";
import React from "react";
import HeroBanner from "./hero-banner";
import Bio from "./bio";

export default function Homepage() {
  return (
    <React.Fragment>
      <HeroBanner
        title="Ritu Gaur"
        subtitle="design • ui/ux • branding • no code"
        openToWork={true}
      />
      <Bio />
      <Social />
      <Projects />
      <ToolsList />
      <AiToolsList />
    </React.Fragment>
  );
}
