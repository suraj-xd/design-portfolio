export const appInfo = {
  title: "Ritu Gaur - UI/UX Designer",
  description: "Portfolio | Ritu Gaur - UI/UX Designer",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
};

export const prodUrl =
  process.env.PROD_WEBSITE_URL ??
  "https://design-portfolio-eight-gules.vercel.app/";
