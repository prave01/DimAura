import Image from "next/image";
import Link from "next/link";
import TitleFont from "@/app/_fonts/index";
import { cn } from "@repo/ui/lib/utils";

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
      <div className="flex h-full w-full flex-col overflow-hidden md:justify-center">
        <div className="relative flex w-full flex-col">
          <Link
            className={cn(
              TitleFont.className,
              "text-[24vw] text-[#FFD586] md:text-[14vw]",
            )}
            href="/"
          >
            DimAura
          </Link>

          <span
            className={cn(
              TitleFont.className,
              "flex w-full -translate-y-[5vw] items-center pl-5 text-[6vw] text-[#FFD586] md:text-[3vw]",
            )}
          >
            AI + Content Creation = 🚀💪🏻{" "}
          </span>
          <div className="mt-3 flex -translate-y-[6vw] flex-row gap-x-6 px-4">
            <Link
              className={cn(
                TitleFont.className,
                "glow-effect mt-4 flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-purple-950 to-indigo-950 p-2 pl-5 text-[6vw] text-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-600/50 md:w-fit md:px-8 md:text-[3vw]",
              )}
              href="/about"
            >
              <span className="relative">Dive InTo New World</span>
            </Link>
            <Link
              className={cn(
                TitleFont.className,
                "mt-4 flex w-full items-center justify-center rounded-3xl p-2 pl-5 text-[6vw] text-[#FFD586] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FFD586]/50 md:w-fit md:px-8 md:text-[2vw]",
              )}
              href="/dive-in"
            >
              <span className="relative">About Creators 🧑🏻‍💻</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
