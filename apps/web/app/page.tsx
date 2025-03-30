import Image from "next/image";
import Link from "next/link";
import {
  TitleFont,
  BodyFont,
  Garamond,
  DancingScript,
} from "@/app/_fonts/index";
import { cn } from "@repo/ui/lib/utils";

const navigationItems: NavigationItem[] = [
  { label: "About creators", href: "/about" },
  { label: "Contribute", href: "/contribute" },
  { label: "Terms", href: "/terms" },
];

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <Image
        src="/Background.png"
        alt="Background"
        className="-z-[1] bg-black brightness-50"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="md flex h-full w-full flex-col overflow-hidden">
        <div className="relative flex h-full w-full flex-col items-center">
          <div className="w-full">
            <div className="flex flex-row justify-between py-4">
              <Link
                className={cn(
                  TitleFont.className,
                  "w-full pl-2 text-5xl text-[#FFD586]",
                )}
                href="/"
              >
                DimAura
              </Link>
              <div
                className={cn(
                  BodyFont.className,
                  "hidden w-full items-center justify-end text-white lg:flex",
                )}
              >
                <ul className="flex flex-row gap-8 px-10 tracking-widest">
                  {navigationItems.map((item) => (
                    <li key={item.href} className="group relative">
                      <Link
                        href={item.href}
                        className="transition-colors duration-300 hover:text-amber-400 lg:p-0 lg:text-[2vh]"
                      >
                        {item.label}
                      </Link>
                      <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex h-full w-full -translate-y-16 flex-col items-start justify-center px-6 md:-translate-y-6">
            <h1
              className={cn(
                Garamond.className,
                "text-[8vw] text-amber-100 lg:text-[5vw]",
              )}
            >
              Take your content creation
            </h1>
            <span
              className={cn(
                Garamond.className,
                "-translate-y-[2vw] text-[4vw] text-amber-100",
              )}
            >
              <span
                className={cn(
                  DancingScript.className,
                  "w-full bg-gradient-to-bl from-amber-500 to-amber-800 bg-clip-text px-4 text-[8vw] text-transparent lg:text-[6vw]",
                )}
              >
                next level{" "}
              </span>
              with AI
            </span>
            <div className="mt-10 -translate-y-[2vw] pl-2 lg:mt-6">
              <Link
                href={"/pricing"}
                className={cn(
                  BodyFont.className,
                  "400 hover:text-shadow-[0_0_10px_#f59e0b,0_0_20px_#f59e0b,0_0_30px_#f59e0b] transform rounded-3xl border-3 border-amber-800 bg-gradient-to-r from-amber-200 to-amber-300 px-10 py-2 text-3xl text-black italic shadow-[10px_10px_0_0_#f59e0b] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-amber-950 hover:shadow-[15px_15px_0_0_#f59e0b]",
                )}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
