import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Paper, Typography } from "@mui/material";

const data = [
  { name: "Week 1", progress: 20 },
  { name: "Week 2", progress: 40 },
  { name: "Week 3", progress: 60 },
  { name: "Week 4", progress: 80 },
  { name: "Week 5", progress: 100 },
];

export const ProgressChart = () => {
  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center the content horizontally
        justifyContent: "center", // Center the content vertically
        width: "14rem",
        height: "13rem",
        background: "#374149",
        padding: "16px",
        marginTop: "1.5rem",
        marginLeft: "2.5rem",
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
        Task Progress Chart
      </Typography>
      <ResponsiveContainer width="100%" height="80%" style={{marginRight:'2.8rem'}}>
        <LineChart data={data} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{fill:"#eeee"}}/>
          <YAxis tick={{fill:"#eeee"}}/>
          <Tooltip />
          <Line
            type="monotone"
            dataKey="progress"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ fill: "#8884d8" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};
