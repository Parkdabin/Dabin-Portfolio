import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Project from './Pages/Project';
import Study from './Pages/Study';
import Home from './Pages/Home';
import AddTodoList from './Components/AddTodoList';

function App (){
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
            <Route path="/add_todolist">
              <AddTodoList />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
