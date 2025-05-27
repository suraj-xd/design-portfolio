"use client";

import React from "react";
import HeroBanner from "~/components/hero-banner";
import ExperienceList from "~/components/experience-list";
import Metatags from "~/components/comman/metatags";

export default function ExperiencePage() {
  return (
    <React.Fragment>
      <Metatags
        title="Experience"
        description="My professional experience"
        image="/experience-og-image.png"
      />
      <HeroBanner
        title="Experience"
        subtitle="recent freelance, internships"
        openToWork={true}
      />
      <ExperienceList />
    </React.Fragment>
  );
}
