module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          50: "#FEF7F7", // very-light-pink
          100: "#FDE8E8", // lighter-pink
          200: "#FBD5D5", // light-pink-200
          300: "#F8B4B4", // pink-300
          400: "#F687B3", // pink-400
          500: "#FFB6C1", // light-pink-base
          600: "#E879A6", // medium-pink
          700: "#D53F8C", // darker-pink
          800: "#B83280", // deep-pink
          900: "#97266D", // darkest-pink
          DEFAULT: "#FFB6C1" // light-pink
        },
        
        // Secondary Colors
        secondary: {
          50: "#FEF8F8", // very-light-soft-pink
          100: "#FDEAEA", // lighter-soft-pink
          200: "#FBD6D6", // light-soft-pink
          300: "#F8BFBF", // soft-pink-300
          400: "#F5A3A3", // soft-pink-400
          500: "#FFC0CB", // soft-pink-base
          600: "#E8A4B0", // medium-soft-pink
          700: "#D18895", // darker-soft-pink
          800: "#BA6C7A", // deep-soft-pink
          900: "#A3505F", // darkest-soft-pink
          DEFAULT: "#FFC0CB" // soft-pink
        },
        
        // Accent Colors
        accent: {
          50: "#FFF0F8", // very-light-hot-pink
          100: "#FFE1F1", // lighter-hot-pink
          200: "#FFC3E3", // light-hot-pink
          300: "#FF94D0", // hot-pink-300
          400: "#FF69B4", // hot-pink-base
          500: "#FF1493", // deep-hot-pink
          600: "#E6007A", // darker-hot-pink
          700: "#CC0066", // darkest-hot-pink
          800: "#B30052", // very-dark-hot-pink
          900: "#99003D", // ultra-dark-hot-pink
          DEFAULT: "#FF69B4" // hot-pink
        },
        
        // Background Colors
        background: "#FAFAFA", // warm-gray-50
        surface: {
          DEFAULT: "#FFFFFF", // white
          secondary: "#F7FAFC" // gray-50
        },
        
        // Text Colors
        text: {
          primary: "#2D3748", // gray-800
          secondary: "#718096", // gray-500
          muted: "#A0AEC0", // gray-400
          inverse: "#FFFFFF" // white
        },
        
        // Status Colors
        success: {
          50: "#F0FFF4", // green-50
          100: "#C6F6D5", // green-100
          500: "#48BB78", // green-400
          600: "#38A169", // green-500
          700: "#2F855A", // green-600
          DEFAULT: "#48BB78" // green-400
        },
        
        warning: {
          50: "#FFFAF0", // orange-50
          100: "#FEEBC8", // orange-100
          500: "#ED8936", // orange-400
          600: "#DD6B20", // orange-500
          700: "#C05621", // orange-600
          DEFAULT: "#ED8936" // orange-400
        },
        
        error: {
          50: "#FED7D7", // red-100
          100: "#FEB2B2", // red-200
          500: "#E53E3E", // red-500
          600: "#C53030", // red-600
          700: "#9B2C2C", // red-700
          DEFAULT: "#E53E3E" // red-500
        },
        
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // gray-200
          light: "#F7FAFC", // gray-50
          focus: "#FFB6C1" // light-pink
        }
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace']
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }]
      },
      
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
      },
      
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevated': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'floating': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'deep': '0 20px 25px rgba(0, 0, 0, 0.1)'
      },
      
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem'
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
        '500': '500ms'
      },
      
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'scale-in': 'scaleIn 150ms ease-out',
        'pulse-soft': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-smooth': {
          transition: 'all 150ms cubic-bezier(0, 0, 0.2, 1)'
        },
        '.transition-layout': {
          transition: 'all 300ms cubic-bezier(0, 0, 0.2, 1)'
        },
        '.text-balance': {
          'text-wrap': 'balance'
        }
      }
      addUtilities(newUtilities)
    }
  ]
}