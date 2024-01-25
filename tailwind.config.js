const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      spacing: {
        '15': '3.75rem',
        '28': '7rem',
      }
    },
  },
  plugins: [],
});