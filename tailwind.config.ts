import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'w95-dark-grey': "#9E9E9E",
        'w95-darker-grey': "#C0C0C0",
        'w95-grey': "#D9D9D9",
        'w95-light-grey': "#ECE9E9",
        'w95-purple': "#593CFA",
        'w95-blue': "#0066FF"
      },
      fontFamily: {
        monda: ['var(--font-monda)'],
        ps2p: ['var(--font-ps2p)'],
        monoton: ['var(--font-monoton)']
      }
    },
  },
  plugins: [],
  darkMode: 'media'
}
export default config
