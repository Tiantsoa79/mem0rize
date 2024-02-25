import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar = () => {
    return (
      <nav className='nav'>
        <ul className="nav-links">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li className="center">
            <Link to="/Générer">Générer</Link>
          </li>
          <li className="center">
            <Link to="/FAQ">FAQ</Link>
          </li>
        </ul>
      </nav>
    );
  }
  

export default Navbar;
