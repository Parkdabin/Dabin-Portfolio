import React, { Component, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Project from './Pages/Project';
import Study from './Pages/Study';
import Home from './Pages/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Dabin's PortFolio</h1>
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/study">
              <Study />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
