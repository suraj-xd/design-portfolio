import AiToolsList from "~/components/ai-tools-list";
import Social from "~/components/homepage/social";
import ToolsList from "~/components/homepage/tools-list";
import React from "react";
import HeroBanner from "../hero-banner";
import Bio from "./bio";
import Projects from "./projects/projects";

export const metadata = {
  title: "Home | Ritu Gaur - UI/UX & Branding Designer",
  description: "Portfolio | Ritu Gaur - UI/UX & Branding Designer",
};

export default async function Homepage() {
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
