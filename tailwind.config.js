
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}' /* src folder, for example */],
  daisyui: {
    themes: ["dracula", "dim", "light"],
  },
  theme: {
    extend: {
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
  ],
};