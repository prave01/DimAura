"use client";

import Image from "next/image";
import Link from "next/link";
import {
  TitleFont,
  BodyFont,
  Garamond,
  DancingScript,
} from "@/app/_fonts/index";
import { cn } from "@repo/ui/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { label: "About creators", href: "/about" },
  { label: "Contribute", href: "/contribute" },
  { label: "Terms", href: "/terms" },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/Background.png"
        alt="Background"
        className="fixed inset-0 -z-10 bg-zinc-900 object-cover brightness-50"
        fill
        priority
        quality={100}
      />

      <div className="relative flex min-h-screen flex-col">
        {/* Navigation */}
        <nav className="relative z-50 w-full">
          <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <Link
                className={cn(
                  TitleFont.className,
                  "text-3xl text-[#FFD586] sm:text-4xl md:text-5xl",
                )}
                href="/"
              >
                DimAura
              </Link>

              {/* Desktop Navigation */}
              <div className={cn(BodyFont.className, "hidden lg:block")}>
                <ul className="flex space-x-8">
                  {navigationItems.map((item) => (
                    <li key={item.href} className="group relative">
                      <Link
                        href={item.href}
                        className="text-lg text-white transition-colors duration-300 hover:text-amber-400"
                      >
                        {item.label}
                      </Link>
                      <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="rounded-md p-2 text-white transition-colors duration-200 hover:bg-white/10 lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 rotate-90 transition-transform duration-200" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-200" />
                )}
              </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
              className={cn(
                "fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
                isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
              )}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Navigation Menu */}
            <div
              className={cn(
                "fixed top-0 right-0 bottom-0 w-64 transform bg-zinc-900/50 backdrop-blur-sm transition-transform duration-300 ease-in-out lg:hidden",
                isMenuOpen ? "translate-x-0" : "translate-x-full",
              )}
            >
              <div className="flex h-full flex-col pt-20">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      BodyFont.className,
                      "transform transition-all delay-[calc(100ms*var(--index))] duration-300",
                      "px-6 py-4 text-lg text-white hover:bg-white/10 hover:text-amber-400",

                      isMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0",
                    )}
                    style={{ "--index": index } as React.CSSProperties}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex flex-1 flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-full">
            <div className="flex flex-col space-y-4">
              <h1
                className={cn(
                  Garamond.className,
                  "text-4xl text-amber-100 sm:text-5xl md:text-6xl lg:text-7xl",
                )}
              >
                Take your content creation
              </h1>
              <div className="flex flex-wrap items-center gap-x-4">
                <h1
                  className={cn(
                    DancingScript.className,
                    "bg-gradient-to-bl from-amber-500 to-amber-800 bg-clip-text px-3 text-4xl text-transparent sm:text-5xl md:text-6xl lg:text-8xl",
                  )}
                >
                  next level
                </h1>
                <span
                  className={cn(
                    Garamond.className,
                    "text-4xl text-amber-100 sm:text-5xl md:text-6xl lg:text-7xl",
                  )}
                >
                  with AI
                </span>
              </div>

              <div className="mt-8 sm:mt-10">
                <Link
                  href="/pricing"
                  className={cn(
                    BodyFont.className,
                    "inline-block transform rounded-3xl border-3 border-amber-800 bg-gradient-to-r from-amber-200 to-amber-300 px-8 py-3 text-xl text-black italic shadow-[10px_10px_0_0_#f59e0b] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-amber-950 hover:shadow-[15px_15px_0_0_#f59e0b] active:translate-y-1 active:scale-95 sm:text-2xl md:text-3xl",
                  )}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
