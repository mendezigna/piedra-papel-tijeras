import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './paginas/HomePage';
import Page from './paginas/Page';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Route exact path="/pvp" render={() => <Page CPU={false}/>}/>
        <Route exact path="/pvc" render={() => <Page CPU={true}/>}/>        
        <Route exact path="/" component={HomePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
