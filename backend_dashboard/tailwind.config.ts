import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-dark-cream': '#fff6e9',
        'custom-cream': '#fffaf2',
        'custom-blue': '#70a2eb',
        'custom-sky-blue': '#b7ceee',
        'custom-green': '#027c2a',
        'custom-softgreen': '#f2f4e9',
        'custom-mint-green': '#b8f5cc',
        'custom-mint-green-50': '#dcfae6', // Adjusted name to fit convention
        'custom-dark-gray': '#1b1b1b',
        'custom-light-gray': '#ebebeb',
        'custom-gray': '#535353',
        'custom-terracotta': '#cc7456',
        'custom-faded-peach': '#eab6a4',
        // Add other colors as needed
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
