import React from 'react';
import './App.css';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import HomePage from './componentes/paginas/HomePage';
import Page from './componentes/paginas/Page';

function App() {
  return (
    <div className="container">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Route exact path={process.env.PUBLIC_URL + '/pvp'} render={() => <Page CPU={false}/>}/>
        <Route exact path={process.env.PUBLIC_URL + '/pvc'} render={() => <Page CPU={true}/>}/>        
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
      </HashRouter>
    </div>
  );
}

export default App;
