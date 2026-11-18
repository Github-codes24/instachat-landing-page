/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          wa: '#25D366',
        },
        dark: {
          900: '#0a0f1e',
          800: '#0d1526',
          700: '#111827',
          600: '#1a2235',
          500: '#1e2d42',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0a0f1e 0%, #0d1526 50%, #111827 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(37,211,102,0.1) 0%, rgba(37,211,102,0.02) 100%)',
        'green-gradient': 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
      },
      boxShadow: {
        'green-glow': '0 0 40px rgba(37, 211, 102, 0.3)',
        'green-glow-sm': '0 0 20px rgba(37, 211, 102, 0.2)',
        'card': '0 4px 24px rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [],
}
