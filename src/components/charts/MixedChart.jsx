import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts'
import { DonutChart } from './Charts';

class MixedChart extends Component {

    
        constructor(props) {
          super(props);

          this.state = {
            
            series: [{
              name: 'TEAM A',
              type: 'column',
              data: [23, 11, 22, 27, 13, 22,33]
            }, {
              name: 'TEAM B',
              type: 'area',
              data: [30, 18, 30, 34, 20, 29,40]
            }, ],
            options: {
              title: {
                text: "HEALTH INDEX",
                align: 'left',
                margin: 10,
                offsetX: 0,
                offsetY: 20,
                floating: false,
                style: {
                  fontSize:  '11px',
                  fontWeight:  'bold',
                  fontFamily:  '',
                  color:  '#343434'
                },
            },
              colors : ['#2798F7' , ' #05B1F3'],
              chart: {
                height: 400,
                type: 'line',
                stacked: false,
                toolbar : {
                  show : false,
                },
             

              },
              stroke: {
                width: [0, 2, 5],
                curve: 'smooth'
              },
              plotOptions: {
                bar: {
                  columnWidth: '40%'
                },
                dataLabels: {
                  style: {
                    colors: ['#343434', '#E91E63', '#9C27B0']
                  }
                }
              },
              
              fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                  inverseColors: false,
                  shade: 'light',
                  type: "vertical",
                  opacityFrom: 0.85,
                  opacityTo: 0.55,
                  stops: [0, 100, 100, 100]
                }
              },
              labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003',
                
              ],
              markers: {
                size: 0
              },
              xaxis: {
                type: 'datetime'
              },
              yaxis: {
                show : false,
                title: {
                  text: 'Points',
                },
                min: 0
              },
              legend : {
                show : false,
              },
              tooltip: {
                shared: true,
                intersect: false,
                y: {
                  formatter: function (y) {
                    if (typeof y !== "undefined") {
                      return y.toFixed(0) + " points";
                    }
                    return y;
              
                  }
                }
              }
            },
          
          
          };
        }

      

        render() {
          return (
            

      <div id="chart" className=' w-[100%] h-[100%] rounded-3xl border-2 border-gray-3'>
  <ReactApexChart options={this.state.options} height={250} series={this.state.series} type="line" className="h-[100%]" />
</div>
    

          );
        }
      
}

export default MixedChart;