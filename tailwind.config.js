module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      colors: {
        "very-light-gray": "#F5F6FA",
        "light-gray": "#E9EBF0",
        "dark-blue": "#334253",
        "grayish-Blue": "#67727E",
        "white": "#FFFFFF",
        "moderate-blue": "#5357B6",
        "light-grayish-blue": "#C5C6EF",
        "soft-red": "#ED6368",
        "pale-red": "#FFB8BB",
      },
      extend: {
        fontFamily: {
          'sans': ['Rubik', 'cursive']
        }
      },
    },
    plugins: [],
  }