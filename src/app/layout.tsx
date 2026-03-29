import "~/styles/globals.css";

import { Analytics } from "@vercel/analytics/next";
import { type Metadata } from "next";
import LayoutWrapper from "~/components/layout-wrapper";
import { metadata as appMetadata } from "~/constants/app-info";
import { instrumentSerif, satoshi } from "~/utils/fonts";
import type { Viewport } from "next"
export const metadata: Metadata = appMetadata;


export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${satoshi.variable} ${instrumentSerif.variable} overscroll-contain scroll-smooth`}
    >
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
        <Analytics />
      </body>
    </html>
  );
}
