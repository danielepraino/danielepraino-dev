/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#3b82f6",
          "secondary": "#F000B8",  
          "accent": "#37CDBE",      
          "neutral": "#3D4451",   
          "base-100": "#FFFFFF",    
          "info": "#3ABFF8", 
          "success": "#36D399",  
          "warning": "#FBBD23",
          "error": "#F87272",
        },
        // dark: {
        //   "primary": "#3b82f6",
        //   "secondary": "#D926A9",     
        //   "accent": "#1FB2A6",   
        //   "neutral": "#191D24",    
        //   "base-100": "#2A303C",   
        //   "info": "#3ABFF8",  
        //   "success": "#36D399",    
        //   "warning": "#FBBD23",   
        //   "error": "#F87272",
        // },
      },
    ],
  },
  plugins: [require('daisyui')],
}
