import React from 'react'
import ReactApexChart from 'react-apexcharts'

class  RedarChart  extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20],
        }, {
          name: 'Series 2',
          data: [20, 30, 40, 80, 20, 80],
        }, ],
       
        options: {
          
            plotOptions: {
                radar: {
                  size: 90,
                  offsetX: 0,
                  offsetY: 0,
                  polygons: {
                    strokeColors: '#343434',
                    strokeWidth: 1,
                    connectorColors: false,
                    fill: {
                      colors: undefined
                    }
                  }
                }
              },
          chart: {
            height: 200,
            type: 'radar',
            dropShadow: {
              enabled: true,
              blur: 1,
              left: 1,
              top: 1
            },
            toolbar : {
                show : false
               },
          },
          title: {
            text: 'CAUSES RANGE',
            style: {
                fontSize:  '11px',
                fontWeight:  'bold',
                fontFamily:  '',
                color:  '#343434'
              },
          },
          
          stroke: {
            width: 3
          },
          fill: {
            opacity: 0.1
          },
          markers: {
            size: 1
          },
          xaxis: {
            categories: ['', '', '', '', '', '']
          },
          yaxis: {
            show : false
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart" className='rounded-3xl border-2 border-gray-3 p-3'>
<ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={250} width={190} />
</div>
      )
    }
}
export default RedarChart