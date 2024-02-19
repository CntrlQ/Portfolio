/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        tera: {
          500: "#156064",
        },
      },
      screens: {
        xs: "360px",
      },
      dropShadow: {
        teralight: "0 0 1em rgb(236, 72, 153)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
