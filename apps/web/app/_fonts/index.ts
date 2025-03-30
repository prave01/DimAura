import localfont from "next/font/local";
import { Poppins, EB_Garamond, Dancing_Script } from "next/font/google";

const BodyFont = Poppins({
  variable: "--font-body",
  weight: "600",
  style: ["italic", "normal"],
  display: "swap",
  subsets: ["latin"],
});

const Garamond = EB_Garamond({
  variable: "--font-eb-garamond",
  weight: "400",
  subsets: ["latin"],
});

const TitleFont = localfont({
  src: "./JejuHallasan.woff2",
  variable: "--font-title",
});

const DancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  weight: "400",
  subsets: ["latin"],
});

export { TitleFont, BodyFont, Garamond, DancingScript };
