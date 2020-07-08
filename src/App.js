import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PvPPage from './paginas/PvPPage';
import PvCPage from './paginas/PvCPage';
import HomePage from './paginas/HomePage';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Route exact path="/pvp" component={PvPPage}/>
        <Route exact path="/pvc" component={PvCPage}/>
        <Route exact path="/" component={HomePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
