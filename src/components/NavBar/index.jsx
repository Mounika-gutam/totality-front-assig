import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <img src="https://i.pinimg.com/564x/d2/62/04/d26204a27a5902717798d297431bbcd0.jpg" alt="logo" className='nav-logo' />
      <button className="toggle-button" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/flats">Flats</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </nav>
  );
};

export default Navbar;