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
      <div className="flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="relative flex w-full -translate-y-[2vw] flex-col">
          <Link
            className={cn(
              TitleFont.className,
              "flex items-center justify-center text-[24vw] text-[#FFD586] md:text-[14vw]",
            )}
            href="/"
          >
            DimAura
          </Link>
          <span
            className={cn(
              TitleFont.className,
              "flex w-full -translate-y-[5vw] items-center justify-center pl-5 text-[6vw] text-white md:text-[3vw]",
            )}
          >
            Break New Ground
          </span>
          <span
            className={cn(
              TitleFont.className,
              "flex w-full -translate-y-[5vw] items-center justify-center pl-5 text-[6vw] text-[#FFD586] md:text-[3vw]",
            )}
          >
            AI + Content Creation = 🚀💪🏻{" "}
          </span>
        </div>
        <div className="flex w-full translate-y-10 items-start justify-end pr-4"></div>
      </div>
    </div>
  );
}
