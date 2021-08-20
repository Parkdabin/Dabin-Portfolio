import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Project from './Pages/Project';
import Study from './Pages/Study';
import Home from './Pages/Home';
import AddTodoList from './Components/AddTodoList';
import TodoList from './Pages/TodoList';
import AddProfile from './Components/AddProfile';
import EmptyPage from './Pages/EmptyPage';
import StudyListContent from './Components/StudyListContent';
import AddStudyList from './Components/AddStudyList';

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
            <Route path="/todolist" exact>
              <TodoList />
            </Route>
            <Route path="/project" exact>
              <Project />
            </Route>
            <Route path="/study" exact>
              <Study />
            </Route>
            <Route path="/todolist/add_todolist" exact>
              <AddTodoList />
            </Route>
            <Route path="/add_profile" exact>
              <AddProfile />
            </Route>
            <Route path="/study/studylist/:contentid" exact>
              <StudyListContent />
            </Route>
            <Route path="/study/addstudylist" exact>
              <AddStudyList />
            </Route>
            <Route>
              <EmptyPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
