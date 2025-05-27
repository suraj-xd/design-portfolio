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
};

export const prodUrl =
  process.env.NEXT_PUBLIC_PROD_WEBSITE_URL ??
  "https://design-portfolio-eight-gules.vercel.app/";
