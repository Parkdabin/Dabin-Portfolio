import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul className="Navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todolist">TodoList</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/study">Study</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;