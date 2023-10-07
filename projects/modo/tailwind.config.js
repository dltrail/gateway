/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    // setting the scree breakpoints
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    // colours can be added here to set any customs required
    extend: {
     colors: {
      // highlight: '#f64c72',
      highlight: '#f3603c',
      blue: '#2F2FA2',
      darkBlue: '#242582',
      veryDarkBlue: '#1D1E25',
      mauve: '#99738E',
      darkMauve: '#553D67',
     }
    },
  },
  plugins: [],
}
