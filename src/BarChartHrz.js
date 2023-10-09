import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';




const data = [
  {
    name: '2010',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2011',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2012',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '2013',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2014',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2015',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '2016',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BarChartHrz = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionAmt, setSelectedOptionAmt] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFilter = (filterValue) => {
    setSelectedOption(filterValue);
    if (filterValue === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => item.name === filterValue);
      setFilteredData(filtered);
    }
    setSelectedOptionAmt('');
  };

  const handleFilterAmt = (filterValue) => {
    setSelectedOptionAmt(filterValue);
    if (filterValue === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => item.amt === parseInt(filterValue));
      setFilteredData(filtered);
    }
    setSelectedOption('');
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const normalStyles = {
    marginLeft: '25px',
    marginTop: '25px',
    position: 'relative',
  };

  const fullScreenStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
    backgroundColor: 'white',
  };

  const styles = isFullScreen ? fullScreenStyles : normalStyles;

  return (
    <div style={styles}>
      {isFullScreen ? (
        <button
          style={{ position: 'absolute', top: '10px', borderRadius: '100%', right: '10px', zIndex: '1' }}
          onClick={toggleFullScreen}
        >
          -
        </button>
      ) : (
        <button
          style={{ position: 'absolute', borderRadius: '100%', top: '40px', right: '40px', zIndex: '1' }}
          onClick={toggleFullScreen}
        >
          +
        </button>
      )}
      <div style={{ position: 'absolute', top: '75px', left: '40px', backgroundColor: '#071945', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', zIndex: '1' }}>
        <style>
          {`
            select:focus {
              outline: none;
            }
          `}
        </style>
        <label htmlFor="filter" style={{ color: 'white', marginRight: '5px', position: 'absolute', top: '-20px' }}>Фильтр:</label>
        <select id="filter" style={{ marginLeft: '25px', width: '65px', backgroundColor: '#071945', color: 'white', border: 'none', fontColor: 'white' }} value={selectedOption} onChange={(e) => handleFilter(e.target.value)}>
          <option value="">Все</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
        </select>
      </div>
      <div style={{ position: 'absolute', top: '75px', left: '160px', backgroundColor: '#071945', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', zIndex: '1' }}>
        <style>
          {`
            select:focus {
              outline: none;
            }
          `}
        </style>
        <select style={{ marginLeft: '25px', width: '65px', backgroundColor: '#071945', color: 'white', border: 'none', fontColor: 'white' }} value={selectedOptionAmt} onChange={(e) => handleFilterAmt(e.target.value)}>
          <option value="">Все</option>
          <option value="2000">2000</option>
          <option value="2100">2100</option>
          <option value="2181">2181</option>
          <option value="2210">2210</option>
          <option value="2290">2290</option>
          <option value="2400">2400</option>
          <option value="3908">3908</option>
          <option value="4300">4300</option>
          <option value="4800">4800</option>
          <option value="9800">9800</option>
        </select>
      </div>
      <BarChart
        width={840}
        height={630}
        data={filteredData}
        margin={{
          top: 115,
          right: 60,
          left: 30,
          bottom: 25,
        }}
        layout="vertical"
        style={{ border: '1px solid #ccc', borderRadius: '4px', margin: '20px' }}
      >
        <XAxis type="number" tick={{ fill: 'white', fontSize: 12 }} />
        <YAxis padding={{ top: 20, bottom: 5 }} dataKey="name" type="category" tick={{ fill: 'white', fontSize: 12 }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#0b78a1" label={{ position: 'right', fontSize: 12, fill: 'white' }} />
        <Bar dataKey="uv" fill="#8000FF" label={{ position: 'right', fontSize: 12, fill: 'white' }} />
        <text x="60px" y="30" textAnchor="middle" fill="#fff" fontSize={18}>
          Chart Title
        </text>
      </BarChart>
    </div>
  );
};

export default BarChartHrz;