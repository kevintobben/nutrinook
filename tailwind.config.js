/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
  extend: {
    colors: {
        'nutrinook-red': '#D92B2B',
      }
  },
};
export const plugins = [];


// /** @type {import('tailwindcss').Config} */
// import daisyui from 'daisyui';
// import daisyuiThemes from 'daisyui/src/theming/themes.js';

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'nutrinook-red': {
//           DEFAULT: '#D92B2B',
//           50: '#FCE8E8',
//           100: '#F8D1D1',
//           200: '#F1A3A3',
//           300: '#EA7575',
//           400: '#E34747',
//           500: '#D92B2B',
//           600: '#C12525',
//           700: '#A91F1F',
//           800: '#901A1A',
//           900: '#781414',
//         }
//       }
//     },
//   },
//   plugins: [
//     daisyui
//   ],
//   daisyui: {
//     themes: [
//       {
//         nutrinook: {
//           ...daisyuiThemes["light"],
//           "primary": "#D92B2B",
//           "primary-focus": "#C12525",
//           "primary-content": "#FFFFFF",
//         }
//       },
//       "light"
//     ],
//   }
// };