/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#102a5c",
        cyan: "#facc15",
        brandred: "#c1121f",
        brandblue: "#1e3a8a",
        brandyellow: "#facc15",
      },
    },
  },
  plugins: [],
};
