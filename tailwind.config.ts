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
        'w95-grey': "#D9D9D9"
      },
      fontFamily: {
        monda: ['var(--font-monda)'],
        ps2p: ['var(--font-ps2p)'],
        monoton: ['var(--font-monoton)']
      }
    },
  },
  plugins: [],
}
export default config
