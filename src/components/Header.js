import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <span className="logo-text">B</span>PP
      </a>

      <nav className="navbar">
      <a href="#home"><FontAwesomeIcon icon={fas.faHome} /> Home</a>
        <a href="#service"><FontAwesomeIcon icon={fas.faCogs} /> Service</a>
        <a href="#about"><FontAwesomeIcon icon={fas.faInfoCircle} /> About</a>
        <a href="#price"><FontAwesomeIcon icon={fas.faDollarSign} /> Price</a>
        <a href="#review"><FontAwesomeIcon icon={fas.faStar} /> Review</a>
        <a href="#contact"><FontAwesomeIcon icon={fas.faEnvelope} /> Contact</a>
        <a href="#footer"><FontAwesomeIcon icon={fas.faLink} /> Quick Links</a>
      </nav>

      <div id="menu-bars" className="fas fa-bars"></div>
    </header>
  );
}

export default Header;
