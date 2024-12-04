import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import '../Navbar.css'; // Ensure necessary styles are applied

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      {/* Navbar Header */}
      <div className="navbar-header">
        <h1 className="logo">Keenan Maupin: Hello! Im a Full Stack Developer.
        <br></br>  
        </h1>
        <h2>Specializing In: JavaScript | React | HTML | CSS </h2>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
        <a id='Lunch-Menu'><img src="https://cdn3.emoji.gg/emojis/2426-nekoburgerbounce.gif" width="40px" height="64px" alt="NekoBurgerBounce"/></a>
        <Tooltip 
        anchorSelect = '#Lunch-Menu'
        content = 'Lunch-Menu' />
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'open' : 'closed'}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Me Here!</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
