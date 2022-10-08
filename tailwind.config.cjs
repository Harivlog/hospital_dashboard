/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        // background colors
  
        'gray-1': '#F7F7F7',
        'gray-2' : '#D3D3D3',
        "gray-3" :"#E7E7E7",
        
        'gray-hover' : '#DFE0E2',
        'gray-dark' : '#646464',
        'gray-border' : '#E1E1E1',
        'gray-4': '#B9B9C3',
        'gray-5' : '#6E6B7B',
        'gray-6' : '#EBE9F1',
        "gray-7" :"#F3F2F7",
        "gray-8" :"#C5C5C5",
        "gray-9" : "#ECECEC",
        
        'white' : '#ffffff',
        'indigo-1' : '#7367F0',
        // text colors
        'text-1': '#343434',
        'text-primary': '#23B9F4',
        'blue-1' :  '#00CFE8',
         'blue-2' : 'rgba(0, 207, 232, 0.12)',
         'blue-3' : '#2F80ED',
         'blue-4' : '#2D9CDB',

         'dark-blue' : 'rgba(115, 103, 240, 0.12)',
        'text-red-1': '#F80D38',
        'black-1' : '#343434' ,
        'black-2' : '#5E5873',
        'black-3' : 'rgba(0,0,0,0.2)',
        'black-4' : '#82868B',
        'black-5' : '#606060',

        'linear-gradient' : 'rgba(255, 159, 67, 0.16)  0%rgba(255, 255, 255, 0)  71.66%',
        'text-primary-black-1': '#343434',
        'yellow-1' : '#ff9f431f',
        'yellow-2' : '#FF9F43',
        'yellow-3' : '#e97b1429',
        
      },
    },
  },
  plugins: [],
}