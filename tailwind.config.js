/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'display-01': ['4.5rem', {
        lineHeight: '5.4rem',
        fontWeight: '500',
      }],
      '3xl': ['1.875rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#00B207",
        "Soft Primary": "#84D187",
        "Hard Primary": "#2C742F",
        Warning: "#FF8A00",
        Danger: "#EA4B48",
        White: "#FFFFFF",
        Gray: {
          9: "#1A1A1A",
          8: "#333333",
          7: "#4D4D4D",
          6: "#666666",
          5: "#808080",
          4: "#999999",
          3: "#B3B3B3",
          2: "#CCCCCC",
          1: "#E6E6E6",
          0.5: "#F2F2F2",
          
        },
        "Green Gray": {
          9: "#002603",
          8: "",
          7: "",
          6: "",
          5: "",
          4: "",
          3: "",
          2: "",
        },
      },
    },
  },
  plugins: [],
};
