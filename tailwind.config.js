/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgPrimary': "linear-gradient(90.05deg, #8AE3FF -1.43%, #A6D4FF 33.04%, #AEEDFF 73.92%, #5CD8FF 103.48%)",
        'bgBtnPrimary': "linear-gradient(90deg, #004680 0%, #4484BA 100%)",
        'bgBtnHover': "none",
      },
      colors: {
        primary: "#004680",
        secondary: "#16A5E1"
      },
    },
  },
  plugins: [],
};
