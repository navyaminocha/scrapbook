/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: {
          DEFAULT: "#E8DCC4",
          light: "#F1E8D6",
          dark: "#D8C7A1",
        },
        ivory: "#FBF6EC",
        brown: {
          muted: "#A97C50",
          deep: "#6B4A32",
        },
        choco: "#3E2B1F",
        rose: "#C98F7B",
        sage: "#8A9A7B",
      },
      fontFamily: {
        heading: ["'Cormorant Garamond'", "serif"],
        body: ["'Poppins'", "sans-serif"],
        hand: ["'Caveat'", "cursive"],
      },
      boxShadow: {
        paper: "0 2px 6px rgba(62, 43, 31, 0.18), 0 8px 20px rgba(62, 43, 31, 0.10)",
        tape: "0 1px 2px rgba(62, 43, 31, 0.25)",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(3deg)" },
        },
        sparkle: {
          "0%, 100%": { opacity: 0.2, transform: "scale(0.8)" },
          "50%": { opacity: 1, transform: "scale(1.1)" },
        },
        bounceArrow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        floatY: "floatY 6s ease-in-out infinite",
        sparkle: "sparkle 3s ease-in-out infinite",
        bounceArrow: "bounceArrow 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
