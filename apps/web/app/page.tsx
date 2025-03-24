import Image from "next/image";
import Link from "next/link";
import TitleFont from "@/app/_fonts/index";
import { cn } from "@repo/ui/lib/utils";
import { Tienne } from "next/font/google";

export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <Image
        src="/Background.png"
        alt="Background"
        className="brightness-50 -z-[1] bg-black"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="flex">
        <div className="flex flex-col relative w-full -translate-y-[2vw]">
          <Link
            className={cn(TitleFont.className, "text-[14vw] text-[#FFD586]")}
            href="/"
          >
            DimAura
          </Link>
          <span
            className={cn(
              TitleFont.className,
              "text-white -translate-y-[5vw] pl-5 text-[3vw]"
            )}
          >
            Break New Ground
          </span>
          <span
            className={cn(
              TitleFont.className,
              "-translate-y-[5vw] pl-5 text-[3vw] text-[#FFD586]"
            )}
          >
            AI + Content Creation = 🚀💪🏻{" "}
          </span>
        </div>
        <div className="w-full flex items-start justify-end translate-y-10 pr-4"></div>
      </div>
    </div>
  );
}
