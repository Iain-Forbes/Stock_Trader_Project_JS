import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import ChartData, {xAxis} from "./getChartData"


const chartConfig = {

  type: "line",
  data: {
    labels: ["2020-12-31", 
    "2021-01-04", 
    "2021-01-05",
    "2021-01-06",
    "2021-01-07",
    "2021-01-08",
    "2021-01-09",
    "2021-01-10",
    "2021-01-11",
    "2021-01-12",
    "2021-01-13",
    "2021-01-14"],
    datasets: [{
    label: "MSFT Closing Share Values",
    data: [222.4, 217.6, 217.9, 215.7, 212.2, 218.1, 219.6, 217.4, 214.9, 216.3, 213.02, 240.2 ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

const Chart = () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };

  return (

    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default Chart;