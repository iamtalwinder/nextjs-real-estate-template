import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'pink': '#cc2491',
        'pink-darker': '#d62096',
        'sky': '#81d3f9',
        'prussian-blue': '#0b2c3c',
        'orange-soda': '#ff5a3d',
        'dark-jungle-green': '#071a1d',
        'misty-rose': '	#f5dedb',
        'cadet': '#5d737e',
        'seashell': '#fff2f0',
        'opal': '	#8bb1b1',
        'primary': '#ff5a3d'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
export default config
