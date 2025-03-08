const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        meteor: {
            "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
            "70%": { opacity: "1" },
            "100%": {
              transform: "rotate(215deg) translateX(-500px)",
              opacity: "0",
            },
          },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// Updated version of the `addVariablesForColors` plugin
function addVariablesForColors({ addBase, theme }) {
  const allColors = theme("colors");
  const newVars = {};

  // Flatten the colors manually
  function flattenColors(obj, prefix = "") {
    for (const key in obj) {
      if (typeof obj[key] === "string") {
        newVars[`--${prefix}${key}`] = obj[key];
      } else {
        flattenColors(obj[key], `${prefix}${key}-`);
      }
    }
  }

  flattenColors(allColors);

  addBase({
    ":root": newVars,
  });
}