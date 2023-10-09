import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import jsonData from './data.json';



const PieTwo = () => {
  const data = jsonData.map(item => ({
    name: item.columns_name,
    value: item.value,
  }));
  return (

    <PieChart width={400} height={400}>
      <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={150} fill="#8884d8" />

      <Tooltip />

      <text x="200px" y="370" textAnchor="middle" fontSize={22} fontColor='black'>
        Планы по использованию
        <tspan x="200px" dy="1.2em">цифровых технологий</tspan>
      </text>
    </PieChart>

  );
};

export default PieTwo;
