import "~/styles/globals.css";

import { type Metadata } from "next";
import LayoutWrapper from "~/components/layout-wrapper";
import { appInfo } from "~/constants/app-info";
import { instrumentSerif, satoshi } from "~/utils/fonts";

export const metadata: Metadata = appInfo;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-[#FDFFF4]">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
