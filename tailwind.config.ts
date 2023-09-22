import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  //Add the important option, using the id of your app wrapper. For example, #__next for Next.js and "#root" for CRA
  important: '#__next',
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      backgroundImage: {
        'hero-bg': "url('/assets/images/01.jpg')",
        'hero-overlay': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/images/01.jpg")',
        'f-serices-bg': "url('/assets/images/02.jpg')",
        'f-serices-gradient-bg':
          'linear-gradient(to bottom, rgba(4, 32, 51, 0.5), transparent, transparent), ' +
          'url("/assets/images/02.jpg")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  //Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead
  corePlugins: {
    preflight: false,
  },
}
export default config
