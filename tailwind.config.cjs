/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
      'white' : '#ffffff',
      // text colors
      'text-1': '#343434',
      'text-primary': '#23B9F4',
      'blue-1' :  '#00CFE8',
       'blue-2' : 'rgba(0, 207, 232, 0.12)',
       'blue-3' : '#2F80ED',
       'dark-blue' : 'rgba(115, 103, 240, 0.12)',
      'text-red-1': '#F80D38',
      'black-1' : '#343434' ,
      'black-2' : '#5E5873',
      
      'text-primary-black-1': '#343434',
      
    },
    extend: {},
  },
  plugins: [],
}