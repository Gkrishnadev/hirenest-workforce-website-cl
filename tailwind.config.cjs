/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },

      colors: {
        navy: {
          DEFAULT: "oklch(var(--navy) / <alpha-value>)",
          mid: "oklch(var(--navy-mid) / <alpha-value>)",
          light: "oklch(var(--navy-light) / <alpha-value>)",
        },

        electric: {
          DEFAULT: "oklch(var(--electric) / <alpha-value>)",
          light: "oklch(var(--electric-light) / <alpha-value>)",
        },

        surface: "oklch(var(--surface) / <alpha-value>)",
        border: "oklch(var(--border) / <alpha-value>)",
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [],
};
