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
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
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
        data: labels.map(() => Math.floor(Math.random() * (1000 - 0 + 1)) + 0),
        borderColor: "#E1261C",
        backgroundColor: "#FCE9E8",
      },
    ],
  };

  return (
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
  );
}
