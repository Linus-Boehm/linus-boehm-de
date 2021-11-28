module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: '#E6EFE9'
        },
        primary: {
          DEFAULT: '#182B3F',
          dark: '#0B192E',
        },
        secondary: {
          DEFAULT: '#E5B55E',
          light: '#E7B71E',
        },
        flame: {
          DEFAULT: '#EC4E20'
        },
        'grey-accent': {
          DEFAULT: '#829191'
        },
        'pink-accent': {
          DEFAULT: '#E60067'
        }
      },
    },
    fontFamily: {
      sans: [
        '"Josefin Sans"',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Noto Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ],
      serif: [
        'Quattrocento Sans',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
    },
  },
  plugins: [],
};
