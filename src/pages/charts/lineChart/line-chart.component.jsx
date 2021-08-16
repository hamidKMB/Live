import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "فروش",
      data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: "orange",
      borderColor: "orange",
      color: "#000",
      tension: 0.6,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      backgroundColor: "#fff",
      title: {
        display: false,
      },
      titleSpacing: 0,
      titleMarginBottom: 0,
      bodyColor: "#000",
      borderColor: "rgba(0, 0, 0, 0.3)",
      borderWidth: 0.5,
      bodyFont: {
        size: 14,
        weight: "bold",
        family: "IRANSans_FaNum",
      },
      bodyAlign: "center",
      bodySpacing: 0,
      displayColors: false,
      rtl: true,
      position: "nearest",
      yAlign: "bottom",
      
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        autoSkip: false,
        maxRotation: 60,
        minRotation: 60,
        font: {
          size: 12,
          weight: "bold",
          family: "IRANSans_FaNum",
        },
      },
    },
    y: {
      grid: {
        lineWidth: 2,
        color: "rgba(0, 0, 0, 0.2)",
      },
      ticks: {
        beginAtZero: true,
        font: {
          size: 12,
          weight: "bold",
          family: "IRANSans_FaNum",
        },
      },
      title: {
        display: true,
        text: "تعداد فروش",
        font: {
          size: 15,
          weight: "bold",
          family: "IRANSans_FaNum",
        },
      },
    },
  },
};

    const LineChart = () => (
    <>
    <Line data={data} options={options} />
    </>
    );

export default LineChart;
