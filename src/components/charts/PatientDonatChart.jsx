import React from "react";

import {Chart as ChartJs , Tooltip , Title , ArcElement , Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(
  Tooltip ,Title, ArcElement ,Legend
) 

const labels = [
  'MEN',
  'WOMEN',
  'CHILDREN',
 

];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: ['#23B9F4','#F80D38','#343434' ,],
    borderColor: 'transparent',
    data: [22, 33, 8, 15],
  }]

};
const options = {
  aspectRatio: 1,
  cutout: '80%',
  plugins : {
    title : {
      display : true,
      align : 'start',
      text : 'PATIENTS',
      color : '#343434',
    },
    tooltip : {
      backgroundColor : '#23B9F4' ,
      displayColors : true,
      multiKeyBackground : ['#23B9F4','#F80D38','#343434' ,],
      
      titleColor : 'green'
    },
    legend : {
      align : 'center',
      position : 'bottom',
      borderRadius : '30px',
      display : true,
      labels : {
        fontSize : 20,
        usePointStyle: true,
        boxWidth: 7,
        boxHeight : 7,
        font : {
          weight : 300,
          size : 11
        }

      }
    }
  }
}
const config = {
  type: 'doughnut',
  data: data,
  options: {
     boxWidth : 100
  }
};

function PatientDonatChart(){
  return (
    <>
       <div className="w-[100%] p-4 rounded-3xl h-[100%] border-2 border-gray-3 ">
       <Doughnut  data={data} options={options} />
       </div>
    </>
  )
}
export default PatientDonatChart
