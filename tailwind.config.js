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
       
      }],
      'Heading-01':['3.5rem',{
        lineHeight: '4.2rem',
       

      }],
      'Heading-02':['2.625rem',{
        lineHeight: '5.64rem',
      

      }],

      'Heading-03':['2.5rem',{
        lineHeight: '3rem',
      
      }],
      'Heading-04':['2.25rem',{
        lineHeight: '2.7rem',
 
      }],
      'Heading-05':['2rem',{
        lineHeight: '2.4rem',
      }],
      'Body-XXL':['1.5rem',{
        lineHeight:'2.25rem'
      }],
      'Body-XL':['1.25rem',{
        lineHeight:'1.875rem'
      }],
      'Body-Large':['1.125rem',{
        lineHeight:'1.6875rem'
      }],
      'Body-Medium':['1rem',{
        lineHeight:'1.5rem'
      }],
      'Body-Small':['0.875rem', {
        lineHeight:'1.3125rem'
      }],
      'Body-Tiny':['0.75rem',{
        lineHeight:'0.975rem'
      }]

    },
// font weight
      fontWeight: {
        "400": '400',
        "500": '500',
        "600": '600',

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
        "Green-Gray": {
          9: "#002603",
          8: "#173B1A",
          7: "#2B572E",
          6: "#406B42",
          5: "#618062",
          4: "#7A997C",
          3: "#96B297",
          2: "#B4CCB4",
          1: "#DAE5DA",
          .5: "#EDF2EE"
          
        },
      },
    },
  },
  plugins: [],
};
