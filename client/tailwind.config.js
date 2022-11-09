const { storeKeyNameFromField } = require('@apollo/client/utilities');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // FUTURE BUILD WITH DARKMODE
  // darkMode: 'class',
  // colors: {
  //   blue: 'sky',
  //   lb: '#BBDFEA',
  //   black: '#14171A',
  //   tb: '#000000',
  //   white: '#FFFFFF',
  //   elg: '#E1E8ED',
  //   eelg: '#F5F8FA',
  //   dg: '#657786'
  // },
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme('bgGradientDeg', {}), // name of config key. Must be unique
            {
              10: '10deg', // bg-gradient-10
              15: '15deg',
              20: '20deg',
              25: '25deg',
              30: '30deg',
              45: '45deg',
              60: '60deg',
              90: '90deg',
              120: '120deg',
              135: '135deg',
            }
          )
        }
      )
    })
  ],
}