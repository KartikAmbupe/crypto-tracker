/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode based on a class on the <html> or <body> tag
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3A80E9',
          dark: '#2463D3',
          light: '#5A9AF0',
        },
        success: {
          DEFAULT: '#16C784',
          dark: '#0FA86D',
          light: '#3DD59A',
        },
        danger: {
          DEFAULT: '#EA3943',
          dark: '#C62530',
          light: '#F05E66',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        background: {
          light: '#FFFFFF',
          dark: '#0A1024',
          card: '#172042',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
