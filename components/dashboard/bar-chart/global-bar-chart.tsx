import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function GlobalBarChart() {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Regional Mapping",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "NG",
        data: labels.map(
          () => Math.floor(Math.random() * (1000 - 0 + 1)) + 300
        ),
        backgroundColor: "#E1261C",
        // borderWidth: 1,
        borderRadius: 50,
      },
      {
        label: "KEN",
        data: labels.map(() => Math.floor(Math.random() * (1000 - 0 + 1)) + 0),
        backgroundColor: "#ECB53E",
        // borderWidth: 1,
        borderRadius: 50,
      },
      {
        label: "UGN",
        data: labels.map(() => Math.floor(Math.random() * (1000 - 0 + 1)) + 0),
        backgroundColor: "#C2CBDD",
        // borderWidth: 1,
        borderRadius: 50,
      },
      {
        label: "USA",
        data: labels.map(
          () => Math.floor(Math.random() * (1000 - 0 + 1)) + 200
        ),
        backgroundColor: "#F1B9B6",

        // borderSkipped: false,
        borderRadius: 50,
      },
    ],
  };

  return (
    <Bar
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
