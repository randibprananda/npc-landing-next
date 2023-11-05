/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        merah: {
          50: '#FFEEEA',
          100: '#FFCBC1',
          200: '#FFA89C',
          300: '#FF867A',
          400: '#FF645D',
          500: '#F54445',
          600: '#DC2532',
          700: '#BF0523',
          800: '#9D0019',
          900: '#790112'
        },
        biru: {
          50: '#EEF4FE',
          100: '#CBDEFB',
          200: '#A8C9F5',
          300: '#84B4ED',
          400: '#609FE0',
          500: '#3B8BD0',
          600: '#0E77BA',
          700: '#0063A1',
          800: '#004F85',
          900: '#003C65'
        },
        hijau: {
          50: '#E9F7EB',
          100: '#BCE7C6',
          200: '#91D6A2',
          300: '#66C481',
          400: '#39B065',
          500: '#009B4C',
          600: '#008638',
          700: '#007028',
          800: '#005B1C',
          900: '#004515'
        },
        hitam: {
          50: '#f7f8f8',
          100: '#edeef1',
          200: '#d8dbdf',
          300: '#b6bac3',
          400: '#8e95a2',
          500: '#6b7280',
          600: '#5b616e',
          700: '#4a4e5a',
          800: '#40444c',
          900: '#383a42',
          950: '#25272c'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      fontFamily: {
        helveticaNeue: ['Helvetica Neue'],
        poppins: ['Poppins']
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-debug-screens'),
    require('tailwind-scrollbar-hide')
  ]
};
