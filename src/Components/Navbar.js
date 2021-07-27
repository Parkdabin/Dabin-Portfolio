import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <ui className="Navbar">
        <li><Link to="/">Dabin</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/study">Study</Link></li>
      </ui>
    );
  }
}

export default Navbar;