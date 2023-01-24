/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./src/layouts/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            sans: ["Open Sans", "sans-serif"],
         },
      },
   },
   plugins: [
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/forms")
   ],
}
