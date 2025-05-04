/**  @type { import('tailwindcss').Config } */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx"],
  theme: {
    extend: {
      screens: {
        xxs: "344px",
        se: "374px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
