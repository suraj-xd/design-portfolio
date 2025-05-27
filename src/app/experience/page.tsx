"use client";

import { ArrowLeftIcon, StarFourIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "~/components/header";

export default function HomePage() {
  const router = useRouter();
  return (
    <main className="mx-auto flex min-h-screen w-2xl flex-col gap-20 font-sans">
      {/* Header */}
      <div className="flex flex-col items-center justify-center">
        <Header />

        {/* Main Content */}
        <div className="mx-auto mt-5 w-full max-w-4xl px-8">
          {/* Name and Title */}
          <div className="mb-8">
            <div className="flex items-center justify-start gap-2">
              <h1 className="mb-2 font-serif text-4xl leading-tight text-[#00997e]">
                Experience
              </h1>
            </div>
            <div className="flex items-center justify-start gap-2">
              <p className="text-md text-gray-600">
                recent freelance, internships
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
            <div className="flex w-full items-center justify-start gap-2 rounded-2xl border border-gray-200 px-4 py-3">
              <Image
                src={"/nucast.jpg"}
                width={40}
                height={40}
                className="rounded-full"
                alt="company logo"
              />

              <div className="w-full items-start justify-between">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex w-full items-center justify-between">
                    <p className="text-sm font-medium">Nucast</p>
                    <p className="text-sm opacity-50">December 2024</p>
                  </div>
                  <p className="text-xs text-gray-600">
                    Designer Intern | Freelance
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-2 rounded-2xl border border-gray-200 px-4 py-3">
              <Image
                src={"/coding75.jpeg"}
                width={40}
                height={40}
                className="rounded-full"
                alt="company logo"
              />

              <div className="w-full items-start justify-between">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex w-full items-center justify-between">
                    <p className="text-sm font-medium">Coding 75</p>
                    <p className="text-sm opacity-50">Fall 2024</p>
                  </div>
                  <p className="text-xs text-gray-600">Projects</p>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-2 rounded-2xl border border-gray-200 px-4 py-3">
              <Image
                src={"/mlb.png"}
                width={40}
                height={40}
                className="rounded-full"
                alt="company logo"
              />

              <div className="w-full items-start justify-between">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex w-full items-center justify-between">
                    <p className="text-sm font-medium">MLB Fellowship</p>
                    <p className="text-sm opacity-50">Spring 2024</p>
                  </div>
                  <p className="text-xs text-gray-600">Projects</p>
                </div>
              </div>
            </div>
          </div>
          {/* Bio */}
        </div>
      </div>
    </main>
  );
}
