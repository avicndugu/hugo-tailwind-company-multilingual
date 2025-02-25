/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['content/**/*.md', 'layouts/**/*.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
        backgroundImage: {
            'hero-gradient': "url('/images/hero-gradient.svg')",
            'cta-gradient': "url('/images/cta-gradient.svg')",
            'cta-1-gradient': "url('/images/cta-1-gradient.svg')",
            'product-hero-gradient': "url('/images/product-hero-gradient.svg')",
            'product-gradient-1':"url('/images/product-gradient-1.svg')",
            'product-gradient-2-3': `
                url('/images/product-gradient-2.svg'),
                url('/images/product-gradient-3.svg')
            `,
            'pricing-gradient-1-2': `
                url('/images/pricing-gradient-1.svg'),
                url('/images/pricing-gradient-2.svg')
            `,
            'pricing-gradient-1-2-md': `
                url('/images/pricing-gradient-1.svg'),
                url('/images/pricing-gradient-2.svg')
            `,
            'pricing-gradient-3':"url('/images/pricing-gradient-3.svg')",
            'pricing-custom-gradient': "linear-gradient('176deg, #D7E7F9 13.12%, #D5F4EC 96.48%'))",
            'contact-us-gradient': "url('/images/contact-us-gradient.svg')",
            'blogpost-gradient-1-2': `
                url('/images/blog-post-gradient-1.svg'),
                url('/images/blog-post-gradient-2.svg')
            `,
        },
        backgroundPosition: {
            'product-gradient-2-3': `left top, right bottom`,
            'pricing-gradient-1-2-md': `left, right top`,
            'pricing-gradient-1-2': `left top, right bottom`,
            'blogpost-gradient-1-2': `left top, right top`,
        },
        backgroundColor: {
            'product-features': 'rgba(255, 255, 255, 0.69)',
        },
        borderRadius: {
            '12xl': '6rem',
        },
        gradientColorStopPositions: {
        15: '15.02%',
        83: '82.83%',
      },
      colors: {
        'custom-blue-dark': '#373FFF',
        'custom-blue-light': '#3ACAF8',
        'custom-dark': '#1D2130',
        'custom-gray': '#2B2E3C',
      },
      spacing: {
        '15': '3.75rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

