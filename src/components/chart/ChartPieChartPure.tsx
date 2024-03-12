import React from "react";
import {Cell, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";

interface ChartPieChartPureProps {
  data?: { name: string; value: number }[];
}

export const ChartPieChartPure: React.FC<ChartPieChartPureProps> = (props) => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const data = [
    {name: "Group A", value: 400},
    {name: "Group B", value: 300},
    {name: "Group C", value: 300},
    {name: "Group D", value: 200},
  ];
  const chartData = props.data || data;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
          ))}
        </Pie>
        <Tooltip/>
      </PieChart>
    </ResponsiveContainer>
  );
};
