import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Tooltip  } from 'recharts';

const data = [
  { name: 'Caloriess', value: 400 },
];

const colors = ["#EC4899"];

const CustomPieChartWithPadding = () => (
  <PieChart width={400} height={400}>
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={80}
      startAngle={90}
      endAngle={450}
      paddingAngle={30} // Adjust this value for the padding angle
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

export default CustomPieChartWithPadding;
