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

const carbonFootprintData = [
  { month: "Jan", value: 7 },
  { month: "Feb", value: 12 },
  { month: "Mar", value: 3 },
  { month: "Apr", value: 6 },
  { month: "May", value: 10 },
  { month: "Jun", value: 11 },
  { month: "Jul", value: 7 },
  { month: "Aug", value: 5 },
  { month: "Sep", value: 13 },
  { month: "Oct", value: 19 },
  { month: "Nov", value: 26 },
  { month: "Dec", value: 8 },
];

export const CarbonFootprintBarChart = () => {
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
        marginLeft: "4.8rem",
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
        Carbon Footprint per Month
      </Typography>
      <ResponsiveContainer width="100%" height="80%" style={{marginRight:'3rem'}}>
        <BarChart data={carbonFootprintData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fill: '#ffffff' }} />
          <YAxis tick={{ fill: '#ffffff' }} />
          <Tooltip />
          <Bar dataKey="value" fill="#D8B8D8" barRadius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};
