import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import { Paper } from "@mui/material";

const data = [
  { name: "Waste", value: 15 },
  { name: "Travel", value: 20 },
  { name: "Food", value: 15 },
  { name: "Other", value: 12 },
  { name: "Energy", value: 59 }

];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={5} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#EEEEEE"
      >{`${value}`}</text>
      <text
        style={{fontSize:'0.5rem'}}
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={10}
        textAnchor={textAnchor}
        fill="#eeee"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <Paper
      style={{
        width: "14rem",
        height: "13rem",
        background: "#374149",
        padding: "16px",
        marginTop: "1.5rem",
        marginLeft: "2.5rem",
      }}
      elevation={3}
    >
      <p style={{ fontSize:'0.7rem', fontWeight:'bold',color: "#ffffff", marginBottom: "0", marginTop:'0', textDecoration:'underline' }}>
        Category Wise Carbon Emission
      </p>
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={90}
          cy={75}
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </Paper>
  );
};
