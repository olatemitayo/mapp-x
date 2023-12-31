import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function Globalchart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        display: false,
      },
    },
  };

  const labels = ["0", "5", "10", "15", "20", "25", "30"];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",

        data: labels.map(
          () => Math.floor(Math.random() * (1000 - 0 + 200)) + 1000
        ),
        borderColor: "#E1261C",
        backgroundColor: "rgba(254, 240, 239, 4) ",
        pointHoverWidth: 5,
        pointHoverRadius: 4,
        pointBorderColor: "rgba(0, 0, 0, 0)",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#bf2018",
        lineTension: 0.3,
      },
    ],
  };

  return (
    <div>
      <Line
        options={{
          ...options,
          scales: {
            x: {
              stacked: true,
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
              stacked: true,
              grid: {
                display: false,
              },
            },
          },
        }}
        data={data}
      />
    </div>
  );
}
