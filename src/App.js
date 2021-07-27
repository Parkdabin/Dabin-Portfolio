import React, { Component, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Dabin's PortFolio</h1>
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact>
              <div className="Container">
                <div className="Container-Nav"></div>
                <div className="Container-Content"></div>
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
