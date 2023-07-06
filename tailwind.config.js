/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     width:{
      logoClamp: 'clamp(1.5rem,2vw,1.92rem)'
     },
     fontFamily:{
      switzer: "Switzer"
     },
     fontSize:{
      h1: 'clamp(24px,4vw,48px)',
      h2: 'clamp(20px,2vw,30.7px)',
      p: 'clamp(10px,2vw,20px)',
     },
        backgroundImage: {
        'auth-bg': "url('/authBg.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
     screens: {
      sm: '700px',
      // => @media (min-width: 640px) { ... }

      md: '900px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    },
  },
  plugins: [],
}
