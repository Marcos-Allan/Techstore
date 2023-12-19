import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'h-white-100': '#ebf0f2',
        'h-white-200': '#d9d9d9',
        'h-gray-300': '#5C6F73',
        'h-gray-400': '#8FA1A6',
        'h-black-500': '#313E40',
      },
    },
  },
  plugins: [],
}
export default config
