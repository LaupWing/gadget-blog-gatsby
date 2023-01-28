/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./src/layouts/**/*.{js,jsx,ts,tsx}",
      "./src/templates/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            sans: ["Open Sans", "sans-serif"],
         },
         boxShadow:{
            "hard-lg": "10px 10px 0px 1px rgba(0,0,0,1)"
         }
      },
   },
   plugins: [
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/forms")
   ],
}
