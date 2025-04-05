import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "random-path": "random-path 6s ease-in-out infinite",
      },
      keyframes: {
        "random-path": {
          "0%": { transform: "translate(0, 0)" },
          "3%": { transform: "translate(1.8rem, 1.9rem)" },
          "8%": { transform: "translate(-2rem, 0.5rem)" },
          "15%": { transform: "translate(1.3rem, -1.7rem)" },
          "21%": { transform: "translate(-0.4rem, 2rem)" },
          "27%": { transform: "translate(1.1rem, 1.2rem)" },
          "33%": { transform: "translate(-1.9rem, -0.8rem)" },
          "39%": { transform: "translate(0.7rem, -1.5rem)" },
          "45%": { transform: "translate(2rem, 1.1rem)" },
          "50%": { transform: "translate(-1.2rem, -2rem)" },
          "56%": { transform: "translate(0.3rem, 1.4rem)" },
          "62%": { transform: "translate(-1.7rem, 0.9rem)" },
          "68%": { transform: "translate(1.5rem, -1.3rem)" },
          "73%": { transform: "translate(-0.8rem, 1.8rem)" },
          "79%": { transform: "translate(1.9rem, -0.2rem)" },
          "84%": { transform: "translate(-2rem, -1.6rem)" },
          "89%": { transform: "translate(0.6rem, 1.7rem)" },
          "94%": { transform: "translate(-1.4rem, 0.3rem)" },
          "97%": { transform: "translate(0.9rem, -1.9rem)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
