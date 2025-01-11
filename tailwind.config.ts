import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        intro: ["var(--font-intro-friday)", "sans-serif"],
        greco: ["var(--font-greco-roman)", "sans-serif"],
      },
      colors: {
        blue: {
          "10": "#B5B8F8",
          "20": "#B4BEFE",
          "30": "#89B4FA",
          "40": "#7F849C",
          "50": "#74A7EB",
          "70": "#00ACD7",
          "80": "#35333B",
        },
        red: {
          "10": "#D9D9D9",
          "30": "#F2CDCD",
          "40": "#F5C2E7",
          "50": "#F4A3BE",
          "60": "#F38BA8",
          "80": "#FF3068",
          "90": "#D72067",
        },
        green: {
          "30": "#A6E3A1",
          "60": "#6B9C1F",
        },
        orange: {
          "30": "#FFAB19",
          "40": "#FF8400",
          "60": "#E44F26",
        },
        yellow: {
          "20": "#35333B",
          "40": "#7F849C",
        },
        purple: {
          "80": "#6C348B",
        },
        cyan: {
          "20": "#89DCEB",
          "60": "#01C8FE",
        },
        teal: {
          "20": "#94E2D5",
          "70": "#52ABA8",
        },
        emerald: {
          "60": "#0ACF83",
        },
        grey: {
          "40": "#7F849C",
          "60": "#34333D",
          "65": "#37333A",
          "70": "#35333B",
          "75": "#34333B",
          "80": "#303236",
          "85": "#181824",
          "90": "#181825",
        },
        white: "#FFFFFF",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "22px",
      "3xl": "24px",
      "4xl": "28px",
      "5xl": "32px",
      "6xl": "48px",
      "7xl": "60px",
      "8xl": "72px",
      "9xl": "88px",
    },
  },
  plugins: [],
} satisfies Config;
