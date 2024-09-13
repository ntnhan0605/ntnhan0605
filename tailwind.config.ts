import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './component-pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {},
      container: {
        center: true,
        padding: { DEFAULT: '12px' },
        screens: {
          xs: '484px',
          sm: '704px',
          md: '984px',
          lg: '1124px',
          xl: '1324px',
        },
      },
      fontFamily: {
        OpenSans: 'var(--font-open-sans)',
        JosefinSans: 'var(--font-josefin-sans)',
      },
      colors: {
        PhilipineGray: '#8b8b8b',
        AntiFlashWhite: '#f4f2f2',
        Gainsboro: '#dddddd',
        SilverFoil: '#aeaeae ',
        EerieBlack: '#1d1d1d',
      },
    },
  },
  plugins: [],
};
export default config;
