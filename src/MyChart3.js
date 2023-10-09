import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MyChart3 = () => {
  const data = [
    { name: 'Янв', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Фев', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Мар', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Апр', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Май', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Июн', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Июл', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default MyChart3;
