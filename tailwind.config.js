/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.{html,css,js}"],
  theme: {
    extend: {
      screens: {
        smscreen: { max: '539px' },
        mdscreen: { max: '767px' },
        lgscreen: { max: '1024px' },
        midscreen: { min: '1200px' },
        bigscreen: { min: '1500px'},
      },

      fontFamily: {
        'open': 'Open Sans, sans-serif',
      },

      borderWidth: {
        3: '3px',
      },

      fontSize: {
        10: '10px',
        13: '13px',
        15: '15px',
        17: '17px',
        28: '28px',
        30: '30px',
        50: '50px',
        62: '62px',
        64: '64px',
      },

      lineHeight: {
        25: '25px',
        60: '60px',
        74: '74px',
      },

      width: {
        10: '10px',
        44: '44px',
      },

      height: {
        10: '10px',
        44: '44px',
      },

      minHeight: {
        80: '80px',
        110: '110px',
      },

      colors: {
        purple: '#dc8cdb',
        darkblack: '#111111',
        gray: '#7a7a7a',
        darkgray: '#4a4a4a',
      },

      boxShadow: {
        custom: '0px 0px 15px rgb(0 0 0 / 6%)',
      },

      margin: {
        '5px': '5px',
        15: '15px',
        25: '25px',
        30: '30px',
        42: '42px',
        50: '50px',
        60: '60px',
        100: '100px',
        140: '140px',
      },

      padding: {
        '10px': '10px',
        15: '15px',
        30: '30px',
        50: '50px',
        30: '30px',
        70: '70px',
        140: '140px',
        222: '222px',
        444: '444px'
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({

        '.container-xl': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
            margin: 'auto',
          },
          '@screen md': {
            maxWidth: '768px',
            margin: 'auto',
          },
          '@screen lg': {
            maxWidth: '940px',
            margin: 'auto',
          },
          '@screen xl': {
            maxWidth: '1248px',
            margin: 'auto',
          },
          '@screen 2xl': {
            maxWidth: '1340px',
            margin: 'auto',
          },
        },

        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '940px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1240px',
          },
        }
      })
    }

  ],
}
