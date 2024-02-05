import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Paper, Typography } from "@mui/material";

const doubleBarChartData = [
  { month: "Jan", year2022: 2, year2023: 5 },
  { month: "Feb", year2022: 8, year2023: 8 },
  { month: "March", year2022: 15, year2023: 10 },
  { month: "April", year2022: 18, year2023: 14 },
  { month: "May", year2022: 22, year2023: 20 },
  { month: "June", year2022: 16, year2023: 18 },
  { month: "July", year2022: 20, year2023: 15 },
  { month: "Aug", year2022: 19, year2023: 20 },
  { month: "Sept", year2022: 25, year2023: 23 },
  { month: "Oct", year2022: 25, year2023: 30 },
  { month: "Nov", year2022: 30, year2023: 25 },
  { month: "Dec", year2022: 28, year2023: 19 },
];

export const DoubleBarChart = () => {
  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "51rem",
        height: "13rem",
        background: "#374149",
        padding: "16px",
        marginTop: "1.5rem",
        marginLeft: "5rem",
        marginBottom:'2rem'
      }}
      elevation={3}
    >
      <Typography
        style={{
          color: "#ffffff",
          marginBottom: "0.5rem",
          textDecoration: "underline",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        Double Bar Chart
      </Typography>
      <ResponsiveContainer width="100%" height="80%" style={{ marginRight: '3rem' }}>
        <BarChart data={doubleBarChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fill: '#ffffff' }}/>
          <YAxis tick={{ fill: '#ffffff' }}/>
          <Tooltip />
          <Bar dataKey="year2022" fill="#826ACA" barSize={20} />
          <Bar dataKey="year2023" fill="#FFE8FF" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};
