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

const options = {
  interaction: {
    intersect: false,
  },
  cutout: "80%",
  tooltip: {
    display: false,
  },
};

const plugins = [
  {
    beforeDraw: function (chart) {
      let width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      let fontSize = (height / 13).toFixed(2);
      ctx.font = fontSize + "pt IRANSans_FaNum";
      ctx.textBaseline = "top";
      let text = "تعداد بازدید کننده" ,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  },
];

const DoughnutChart = (props) => (
  <>
    <Doughnut data={data} options={options} plugins={plugins}/>
  </>
)

export default DoughnutChart;