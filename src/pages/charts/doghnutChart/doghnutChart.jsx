import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      data: [24, 19, 3, 5],
      backgroundColor: [
        'green',
        'blue',
        'grey',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'green',
        'blue',
        'grey',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = (props) => (
  <>
    <Doughnut data={data} options={{cutout: "80%"}}/>
  </>
)

export default DoughnutChart;