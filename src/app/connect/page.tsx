"use client";

import {
  ArrowLeftIcon,
  StarFourIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import Connect from "~/components/connect";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-20 font-sans">
      {/* Header */}
      <div className="flex flex-col items-center justify-center">
        <header className="mt-10 flex w-full items-center justify-between px-8 py-6">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center justify-start gap-1 text-gray-600 transition-colors hover:text-gray-900"
            >
              <ArrowLeftIcon />
              home
            </Link>
          </div>
          <nav className="flex items-center space-x-8">
            <Link
              target="_blank"
              href="https://www.figma.com/proto/V0gqcvrLqb8H05Mo90mOCL/Portfolio?node-id=1-3601&t=3QozI3ydj9zgIlkI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3601"
              className="text-gray-600 hover:text-[#00997e] hover:underline transition-colors"
            >
              work
            </Link>
            <Link
              href="/experience"
              className="text-gray-600 hover:text-[#00997e] hover:underline transition-colors"
            >
              experience
            </Link>
            <Link
              href="/connect"
              className="text-gray-600 hover:text-[#00997e] hover:underline transition-colors"
            >
              connect
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <div className="mx-auto mt-5 w-full max-w-4xl px-8">
          {/* Name and Title */}
          <div className="mb-8">
            <div className="flex items-center justify-start gap-2">
              <h1 className="mb-2 font-serif text-4xl leading-tight text-[#00997e]">
                Connect
              </h1>
            </div>
            <div className="flex items-center justify-start gap-2">
              <p className="text-md text-gray-600">
                let&apos;s connect!
              </p>
              <div className="flex w-fit -rotate-6 items-center justify-start gap-1 rounded-full border border-gray-200 bg-gray-100 px-2 py-1 font-serif text-xs leading-tight text-black">
                <StarFourIcon
                  weight="fill"
                  className="animate-pulse"
                  color="#00997e"
                  size={10}
                />
                open to work
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Connect />
          </div>
          {/* Bio */}
        </div>
      </div>
    </main>
  );
}
