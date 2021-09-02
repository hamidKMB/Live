import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['مشهد','اهواز','تهران','سیستان','مشهد','اهواز','تهران','سیستان'],
  datasets: [
    {
      data: [12, 19, 3, 6, 12, 19, 3, 6],
      barThickness: 30,
      borderRadius: 5, 
      backgroundColor: [
        'rgba(255, 159, 64, 1)',
      ],
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
        maxRotation: 70,
        minRotation: 70,
        font: {
          size: 15,
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
        text: "تعداد بازدید",
        font: {
          size: 15,
          weight: "bold",
          family: "IRANSans_FaNum",
        },
      },
    },
  },
};

const VerticalBar = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default VerticalBar;