import React from 'react'
import ReactApexChart from 'react-apexcharts'

class StackedChartCom extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'EMERGENCY',
          data: [15, 30, 41, 37, 22, 43, 21]
        }, {
          name: 'EXAMINATION',
          data: [10, 22, 33, 52, 13, 43, 32]
        }, {
          name: 'CONSULTATION',
          data: [9, 13, 11, 9, 15, 11, 20]
        }, {
          name: 'ROUTINE CHECKUP',
          data: [12, 20, 5, 8, 6, 9, 14]
        }, ],
        options: {
          dataLabels: {
            enabled: false
          },
          chart: {
            type: 'bar',
            height: 350,
            
            stacked: true,
            toolbar : {
              show : false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 10,
              columnWidth: "50%",
              dataLabels: {
                total: {
                  enabled: false,
                  offsetX: 0,
                  style: {
                    fontSize: '13px',
                    fontWeight: 900,
                   
                  }
                }
              }
            },
          },
          colors: [ // this array contains different color code for each data
        "#343434",
        "#F80D38",
        "#05B1F3",
        "#2798F7",
      
    ],
          stroke: {
            
            width: 1,
            colors: ['transparent']
          },
          title: {
                text: "OVERALL APPOINTMENTS",
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
          xaxis: {
            // reversed: true,
            categories: ['April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct'],
            labels: {
             
            }
          },

          yaxis: {
            
            // opposite: true,
            show : false,
            title: {
              text: undefined
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + "K"
              }
            }
          },
          fill: {
            opacity: 3
          },
          legend: {
            borderRadius : '30px',
            position: 'bottom',
            horizontalAlign: 'left',
            offsetX: -10,
            fontSize : '10px',
            markers: {
              width: 8,
              height: 8,
              radius : '40%',
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>


      );
    }
  }
  export default StackedChartCom;