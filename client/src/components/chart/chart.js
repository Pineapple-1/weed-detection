import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";


const COLORS = ["#4dabf5", "#FFBB28"];
let renderLabel = ({ percent,name }) => {
  return `${name} ${(percent * 100).toFixed(0)}%` 
}

const Chart = ({pie}) => {
  return (
    <Container maxWidth="md">
      <CssBaseline />

      <ResponsiveContainer width="100%" aspect={1.5}>
        <PieChart width={400} height={400}>
          <Pie
            data={pie}
            cx="50%"
            cy="50%"
            labelLine={false}
            label = {renderLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            startAngle={360}
            endAngle={0}
            innerRadius={50}
          >
            {pie.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Chart;
