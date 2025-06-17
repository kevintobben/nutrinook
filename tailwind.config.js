/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'nutrinook-red': '#D92B2B',
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
}
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