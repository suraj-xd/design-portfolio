import React from "react";
import HeroBanner from "~/components/hero-banner";
import Connect from "~/components/connect/connect";

export const metadata = {
  title: "Connect | Ritu Gaur - UI/UX & Branding Designer",
  description: "Connect with me! drop me a message",
};

export default function ExperiencePage() {
  return (
    <React.Fragment>
      <HeroBanner title="Connect" subtitle="let's connect!" openToWork={true} />
      <Connect />
    </React.Fragment>
  );
}
