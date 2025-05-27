"use client";

import React from "react";
import HeroBanner from "~/components/hero-banner";
import Connect from "~/components/connect/connect";
import Metatags from "~/components/comman/metatags";

export default function ExperiencePage() {
  return (
    <React.Fragment>
      <Metatags
        title="Connect"
        description="Connect with me! drop me a message"
        image="/connect-og-image.png"
      />
      <HeroBanner title="Connect" subtitle="let's connect!" openToWork={true} />
      <Connect />
    </React.Fragment>
  );
}
