import type { Config } from 'tailwindcss';

const themeExtends = require('./tailwindThemeExtend');

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {},
      container: {
        center: true,
        padding: {
          DEFAULT: '12px',
        },
        screens: {
          xs: '484px',
          sm: '704px',
          md: '984px',
          lg: '1100px',
          xl: '1300px',
        },
      },
      fontFamily: {
        Open_Sans: 'var(--font-open-sans)',
        Josefin_Sans: 'var(--font-josefin-sans)',
        EB_Garamond: 'var(--font-eb-garamond)',
        The_Gwathmey: 'var(--font-the-gwathmey)',
      },
      transitionTimingFunction: {
        'btn-line': 'cubic-bezier(0.51,0.49,0.45,0.9)',
      },
      colors: {
        ...themeExtends.colors,
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
export default config;
