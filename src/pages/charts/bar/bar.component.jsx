import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['مشهد','اهواز','تهران','سیستان','مشهد','اهواز','تهران','سیستان'],
  datasets: [
    {
      data: [12, 19, 3, 6, 12, 19, 3, 6],
      barThickness: 50,
      borderRadius: 10, 
      backgroundColor: [
        'rgba(255, 159, 64, 1)',
      ],
    },
  ],
};

const options = {
    plugins:{
        legend: {
        display: false
        }
    },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: {
        ticks: {
            display: true,
        }
    }
  },
};

const VerticalBar = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default VerticalBar;