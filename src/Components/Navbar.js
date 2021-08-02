import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ui className="Navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/study">Study</Link></li>
      </ui>
    </div>
  );
}

export default Navbar;