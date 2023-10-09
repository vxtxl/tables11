import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import jsonData from './data.json';

const BarsTwo = () => {
  const [selectedVopros, setSelectedVopros] = useState('');
  const [selectedPok, setSelectedPok] = useState('');
  const [selectedEdizm, setSelectedEdizm] = useState('');

  const handleVoprosFilter = (filterValue) => {
    setSelectedVopros(filterValue);
  };

  const handlePokFilter = (filterValue) => {
    setSelectedPok(filterValue);
  };

  const handleEdizmFilter = (filterValue) => {
    setSelectedEdizm(filterValue);
  };

  const filteredData = jsonData.filter(item => {
    if (selectedVopros && item.vopros !== selectedVopros) {
      return false;
    }
    if (selectedPok && item.pok_name !== selectedPok) {
      return false;
    }
    if (selectedEdizm && item.edizm_name !== selectedEdizm) {
      return false;
    }
    return true;
  }).map(item => ({
    name: item.okved_name,
    uv: item.value,
    vopros: item.vopros,
    pok_name: item.pok_name,
    edizm_name: item.edizm_name,
  }));

  return (
    <div style={{ marginLeft: '25px', marginTop: '25px', position: 'relative', height: '690px', width: '1810px', border: 'none' }}>
      <div style={{ position: 'absolute', top: '75px', left: '40px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', zIndex: '1', border: 'none' }}>
        <style>
          {`
            select:focus {
              outline: none;
            }
            option {
              width: 500px;
            }
          `}
        </style>
        <select style={{ marginLeft: '25px', width: '200px', backgroundColor: '#071945', color: 'white', border: 'none', fontColor: 'black' }} value={selectedVopros} onChange={(e) => handleVoprosFilter(e.target.value)}>

          <option value="">Все</option>
          {Array.from(new Set(jsonData.map(item => item.vopros))).map((value, index) => (
            <option key={index} value={value}>{value}</option>
          ))}
        </select>
        <div style={{ position: 'absolute', top: '75px', left: '300px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', zIndex: '1' }}>
        <label style={{ marginLeft: '20px', marginRight: '10px', color: 'black' }}>Показатель:</label>
        <select style={{ marginLeft: '100px', width: '200px', backgroundColor: '#071945', color: 'white', border: 'none', fontColor: 'black' }} value={selectedPok} onChange={(e) => handlePokFilter(e.target.value)}>
          <option value="">Все</option>
          {Array.from(new Set(jsonData.map(item => item.pok_name))).map((value, index) => (
            <option key={index} value={value}>{value}</option>
          ))}
        </select>
        </div>
        <select style={{ marginLeft: '100px', width: '200px', backgroundColor: '#071945', color: 'white', border: 'none', fontColor: 'black' }} value={selectedEdizm} onChange={(e) => handleEdizmFilter(e.target.value)}>
          <option value="">Все</option>
          {Array.from(new Set(jsonData.map(item => item.edizm_name))).map((value, index) => (
            <option key={index} value={value}>{value}</option>
          ))}
        </select>
      
      </div>
      <div style={{ overflowX: 'scroll', width: '100%', height: '100%', border: '1px solid #ccc', borderRadius: '10px', marginLeft: '20px' }}>
        <BarChart
          width={filteredData.length * 100}
          height={630}
          data={filteredData}
          margin={{
            top: 95,
            right: 60,
            left: 60,
            bottom: 25,
          }}
        >
          <XAxis dataKey="name" tick={{ fill: 'black', fontSize: 12 }} />
          <YAxis padding={{ top: 20, bottom: 5 }} tick={{ fill: 'black', fontSize: 12 }} hide={true} />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#0b78a1" label={{ position: 'top', fontSize: 12, fill: 'black' }} />
          <Bar dataKey="okved_name" fill="#8000FF" label={{ position: 'top', fontSize: 12, fill: 'black' }} />
          <text x="90px" y="30" textAnchor="middle" fontSize={18} fill='black'>
            по оквед
          </text>
        </BarChart>
      </div>
    </div>
  );
};

export default BarsTwo;
