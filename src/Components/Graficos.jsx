import React, { Component } from "react";
import Chart from "react-apexcharts";
import Donut from "./Graficos2";
import ApexCharts from "react-apexcharts";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);

class Grafico extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }



  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
         

   {/*      <Doughnut data={...} /> */}
          <Donut/>

          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            width="500"
        />

        <div id="chart"></div>
        </div>
      </div>
    );
  }
}

export default Grafico;