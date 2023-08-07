/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-slate-grey': 'hsl(234, 29%, 20%)',
        'charcoal-grey': 'hsl(235, 18%, 26%)',
        'grey': 'hsl(231, 7%, 60%)',
        'white': 'hsl(0, 0%, 100%)',
        'tomato': 'hsl(4, 100%, 67%)'


      },
      listStyleImage: {
        checkmark: 'url("/images/icon-list.svg")',
      },

    },
  },
  plugins: [],
}

