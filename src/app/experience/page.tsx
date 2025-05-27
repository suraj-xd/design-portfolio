"use client";

import React from "react";
import HeroBanner from "~/components/hero-banner";
import ExperienceList from "~/components/experience-list";

export default function ExperiencePage() {
  return (
    <React.Fragment>
      <HeroBanner
        title="Experience"
        subtitle="recent freelance, internships"
        openToWork={true}
      />
      <ExperienceList />
    </React.Fragment>
  );
}
