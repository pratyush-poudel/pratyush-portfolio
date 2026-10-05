/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#000000', // Pure black
          900: '#050505', // Surface 1
          850: '#0a0a0a', // Surface 2
          800: '#101014', // Panel elevated
          750: '#16161c', // Card boundary
          700: '#22222a', // Subtle line
          600: '#32323e',
        },
        crimson: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
          accent: '#e50914',
          glow: '#ff1e2d',
          bright: '#ff3344',
          dark: '#7f050b'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'crimson-sm': '0 0 12px rgba(229, 9, 20, 0.35)',
        'crimson-md': '0 0 24px rgba(229, 9, 20, 0.45)',
        'crimson-lg': '0 0 45px rgba(229, 9, 20, 0.55)',
        'crimson-laser': '0 0 8px #e50914, 0 0 20px rgba(229, 9, 20, 0.6)',
        'white-subtle': '0 0 15px rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
        'tech-grid': 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'tech-grid-red': 'linear-gradient(to right, rgba(229,9,20,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(229,9,20,0.06) 1px, transparent 1px)',
        'grid-dots': 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 6s linear infinite',
        'laser-sweep': 'laserSweep 4s ease-in-out infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1200%)' },
        },
        laserSweep: {
          '0%, 100%': { opacity: '0.2', transform: 'translateX(-100%)' },
          '50%': { opacity: '0.8', transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
