import AiToolsList from "~/components/ai-tools-list";
import Social from "~/components/homepage/social";
import ToolsList from "~/components/homepage/tools-list";
import React from "react";
import HeroBanner from "../hero-banner";
import Bio from "./bio";
import Projects from "./projects/projects";
import Metatags from "../comman/metatags";

export default async function Homepage() {
  return (
    <React.Fragment>
      <Metatags
        title="Home"
        description="Portfolio | Ritu Gaur - UI/UX Designer"
        image="/og-image.png"
      />
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
