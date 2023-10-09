import React from 'react';
import TableComponent from './TableComponent';
import './App.css';
import Menu from './Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bars from './BarChart';
import Navbar from './NavBar';
import TreeMap from './Treemap';
import BarChartHrz from './BarChartHrz'
import PieOne from './PieOne';
import PieTwo from './PieTwo'
import data from './data.json'
import BarsTwo from './BarChartTwo'
const App = () => {
  return (


    <div>


      <Navbar />
      <div style={{ display: 'flex', marginTop: '90px', }}>
        <div style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'end' }}>
          <BarsTwo />
          <Bars />
          <div style={{ display: 'flex' }}>
            <text style={{ fontSize: '50px', marginRight: '100px', marginTop: '100px' }}>{data.length}<p style={{ fontSize: '25px' }}>число обследованных организаций</p></text>
            <PieOne />
            <PieTwo />
          </div>
        </div>
        <div className="App">

          <Menu></Menu>
        </div>
      </div>
      {/* <TableComponent /> */}
    </div >
  );
};

export default App;
