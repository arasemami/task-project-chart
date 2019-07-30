import React, { Component } from 'react';
import Chart from 'react-apexcharts'

import './style.css'; 

class ChartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
            chart:[],
            options: {
              chart: {
                id: "basic-bar", 
                background: '#2E4053',
                events: { 
                  dataPointSelection: (e,char,config) => {
                    // console.log(config.dataPointIndex)
                    this.props.action(config.dataPointIndex )
                  }
                },
                animations: {
                  enabled: true,
                  easing: 'easeinout',
                  speed: 800,
                  animateGradually: {
                      enabled: true,
                      delay: 150
                  },
                  dynamicAnimation: {
                      enabled: true,
                      speed: 350
                  }
              }
              }, 
              active: {
                  allowMultipleDataPointsSelection: false,
              },
              markers: {size: 3},
              tooltip: {
                  intersect:true, 
                  shared: false, 
              },
              xaxis: {
                categories: this.props.category,
                labels: {
                  format: 'DD/MM',
                  style: {
                    colors: '#ffffff',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif'
                },
                }
              },
              yaxis: {
                show: true,
                tickAmount: 10,
                labels: {
                  style: {
                    color: '#ffffff'
                  }
                }
              },
              legend: {
                show: true,
                fontSize: '16px', 
                labels: { 
                    colors: '#ffffff'
                  
                }, 
              }

             
            } 
           
          }
    } 

    componentWillReceiveProps(nextProps){ 

        if(nextProps.category !== this.props.category){
            this.setState({
                  options: {
                      xaxis: {
                            categories: nextProps.category ,
                            labels: {
                                datetimeFormatter: {
                                  year: 'yyyy',
                                  month: 'MMM \'yy',
                                  day: 'dd MMM',
                                  hour: 'HH:mm'
                                },
                                showDuplicates: false,
                            }
                        }
                  }
            })
        }
    }
 


    render() { 
     
        return ( 
           
      <div className="">
          <div className="mixed-chart">  
           
          <Chart
            options={this.state.options}
            series={
              [
                {
                  name: "solar",
                  data: this.props.solar  
                },
                {
                  name: "wind",
                  data: this.props.wind
                }
              ]
            } 
             
           type="line"
          width="100%" 
            
          />
          </div>
            </div>
         );
    }
}
 
export default ChartComponent;






/* i write comment How can use this component to undretandable more esay .
     import ChartComponent from components folder.


     <ChartComponent 
          solar={this.state.solar}   // ths solar is props for show data line just fetch data and set state and pass in like as props
          wind={this.state.wind}  // ths wind is props for show data line just fetch data and set state and pass in like as props
          category={this.state.category} // show catgeory under your gragh
          action={(val) => this._getSolarAndWind(val)} // this callback function after click the point will return id of graph
      />

*/