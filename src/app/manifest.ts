import { type MetadataRoute } from "next";
import { appInfo } from "~/constants/app-info";

export default function Manifest(): MetadataRoute.Manifest {
  return {
    name: appInfo.title || "Ritu Gaur - UI/UX Designer",
    short_name: appInfo.title || "Ritu Gaur - UI/UX Designer",
    description: appInfo.description || "Portfolio | Ritu Gaur - UI/UX & Branding",
    start_url: "/",
    display: "standalone",
    background_color: "#fdfff4",
    theme_color: "#fdfff4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
