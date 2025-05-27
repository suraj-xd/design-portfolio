"use client";

import Footer from "~/components/footer";
import Header from "~/components/header";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-between gap-20 font-sans">
      {/* Header */}
      <div className="flex w-full flex-col">
        <Header />
        {/* Main Content */}
        <div className="mx-auto mt-5 w-full px-8">{children}</div>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
