import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link to="/" className="text-xl">Nutrinook</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/" className={location.pathname === '/' ? 'underline font-medium' : ''}>Home</Link></li>
          <li><Link to="/favorites" className={location.pathname === '/favorites' ? 'underline font-medium' : ''}>Favorieten</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Instellingen</a>
      </div>
    </div>
  );
}

export default Navbar;
