module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ["'Share Tech Mono'"],
    },
    extend: {
      colors: {
        background: '#303030',
        sidebar: '#505050',
        sidebarText: '#B5B5B5',
        hover: '#E1E1E1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
