import type { Config } from "tailwindcss";
import config from "@repo/ui/tailwind.config";

const webConfig = {
  ...config,
  presets: [config],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-title)", "sans-serif"],
      },
    },
  },
} satisfies Config;
export default webConfig;
