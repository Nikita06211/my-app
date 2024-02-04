import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Typography } from '@mui/material';

export const DonutChart = () => {
  const chartData = [
    {
      data: [15, 39, 15, 20, 12],
      innerRadius: 50,
      outerRadius: 60,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -90,
      endAngle: 180,
      cx: 150,
      cy: 150,
    },
  ];

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Category Wise Carbon Emission
      </Typography>
      <PieChart series={chartData} />
    </div>
  );
};

