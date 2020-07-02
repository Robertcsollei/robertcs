import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Home from './Pages/Home'
import About from './Pages/About'
import Nav from './Shared/_Nav'
import Portfolio from './Pages/Portfolio'
import Contacts from './Pages/Contacts'
import PortfolioItem from './Pages/PortfolioItem'


function App() {
  return (
    <Router>
      <Nav/>

      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/PortfolioItem" component={PortfolioItem}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/about" component={About}/>
      </Switch>
      
    </Router>
  );
}

export default App;
