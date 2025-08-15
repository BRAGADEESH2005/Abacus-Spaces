import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import "../styles/Navbar.css";

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/listings', label: 'Listings' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },

];

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={handleNavClick}>
        Abacus Spaces
      </Link>
      <div className={`navbar-links${menuOpen ? " open" : ""}`}>
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`navbar-link${location.pathname === link.to ? " active" : ""}`}
            onClick={handleNavClick}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="navbar-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseIcon style={{ fontSize: 32 }} /> : <MenuIcon style={{ fontSize: 32 }} />}
      </div>
      {/* Animated dropdown for mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile-dropdown"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`navbar-link${location.pathname === link.to ? " active" : ""}`}
                onClick={handleNavClick}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {menuOpen && (
        <div className="navbar-mobile-overlay" onClick={handleNavClick}></div>
      )}
    </nav>
  );
}

export default Navbar;