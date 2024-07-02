const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
<<<<<<< HEAD
  plugins: [flowbite.plugin(),
     require("tailwind-scrollbar"),
   ]
=======
  plugins: [flowbite.plugin(), require("tailwind-scrollbar"),],
>>>>>>> 741367dfc230e27f63868e94abd5cab298460d97
};
