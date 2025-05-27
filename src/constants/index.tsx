import { DribbbleLogoIcon, BehanceLogoIcon, EnvelopeSimpleIcon, LinkedinLogoIcon, XLogoIcon } from "@phosphor-icons/react";

export const socialLinkEnum = {
  x: "https://x.com/ritss32",
  dribbble: "https://dribbble.com/thisisritu",
  behance: "https://www.behance.net/thisisritu",
  linkedin: "https://www.linkedin.com/in/ritu-gaur-b717a0315/",
  email: "ritu.gaur@gmail.com",
};

export const socialLinks = [
  {
    name: "twitter",
    href: "https://x.com/ritss32",
    icon: <XLogoIcon />,
  },
  {
    name: "dribbble",
    href: "https://dribbble.com/thisisritu",
    icon: <DribbbleLogoIcon />,
  },
  {
    name: "behance",
    href: "https://www.behance.net/thisisritu",
    icon: <BehanceLogoIcon />,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/ritu-gaur-b717a0315/",
    icon: <LinkedinLogoIcon />,
  },
  {
    name: "email",
    href: "ritu.gaur@gmail.com",
    icon: <EnvelopeSimpleIcon />,
  },
];

export const socialIcons = {
  x: <XLogoIcon />,
  dribbble: <DribbbleLogoIcon />,
  behance: <BehanceLogoIcon />,
  linkedin: <LinkedinLogoIcon />,
  email: <EnvelopeSimpleIcon />,
};

export const figmaProtoLink =
  "https://www.figma.com/proto/V0gqcvrLqb8H05Mo90mOCL/Portfolio?node-id=1-3601&t=3QozI3ydj9zgIlkI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3601";


// Project data with tooltip information
export const projectsData = [
  {
    id: 1,
    name: "Instant Commerce",
    description:
      "A modern e-commerce platform with ai agent with autonomous workflows",
    image: "/work/instant-commerce.png", // You can replace with actual project images
    tags: ["AI", "E-commerce", "Graphics"],
    status: "Completed",
    date: "May",
    href: "https://www.figma.com/proto/V0gqcvrLqb8H05Mo90mOCL/Portfolio?node-id=60-34&t=3QozI3ydj9zgIlkI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3601",
  },
  {
    id: 2,
    name: "VISA x KMB",
    description:
      "Financial technology solution bridging traditional banking with modern digital payments",
    image: "/work/visa.png", // You can replace with actual project images
    tags: ["FinTech", "Banking", "UX/UI"],
    status: "Completed",
    date: "April",
    href: "https://www.figma.com/proto/V0gqcvrLqb8H05Mo90mOCL/Portfolio?node-id=1-298&t=3QozI3ydj9zgIlkI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3601",
  },
  {
    id: 3,
    name: "Sync Node",
    description:
      "Real-time block conversion with power of llms",
    image: "/work/sync-node.png", // You can replace with actual project images
    tags: ["Marketing", "Twitter", "Blockchain"],
    status: "Completed",
    date: "Dec 2024",
    href: "https://www.figma.com/proto/V0gqcvrLqb8H05Mo90mOCL/Portfolio?node-id=1-2912&t=3QozI3ydj9zgIlkI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3601",
  },
];