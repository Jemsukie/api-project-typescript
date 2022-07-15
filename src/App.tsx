import React from 'react';
import Nav from './components/Nav';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Container from './components/Container';
import CityTable from './components/CityTable';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <LeftRightLayout left={<Container />} right={<CityTable />} />
      </header>
    </div>
  );
}

function LeftRightLayout(props: any) {
  return (
    <div className="row">
      <div className="col">{props.left}</div>
      <div className="col">{props.right}</div>
    </div>
  );
}


export default App;
