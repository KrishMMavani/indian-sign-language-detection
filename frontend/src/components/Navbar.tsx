import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, HandMetal } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isLoggedIn = !!localStorage.getItem('userToken'); // Check if the user is logged in

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header 
      className={`fixed top-2 left-0 right-0 z-50 transition-all duration-300 ${ // Changed `top-0` to `top-2` for margin
        scrolled ? 'glass-effect py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <HandMetal className="h-8 w-8 text-accent" />
            <span className="text-xl font-display font-bold neon-text">हस्तवाणी</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            {/* <NavLink to="/convert" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Convert
            </NavLink> */}
            <NavLink to="/technology" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Detection
            </NavLink>
            <NavLink to="/learning-module" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Learning Module
            </NavLink>

            <NavLink to="/animatelearn" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Animatelearn
            </NavLink>

            <NavLink to="/games" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Games
            </NavLink>

            <NavLink to="/quiz" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Quiz
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
            
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden glass-effect"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => `block py-2 px-4 ${isActive ? 'text-accent' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/convert" 
              className={({ isActive }) => `block py-2 px-4 ${isActive ? 'text-accent' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              Convert
            </NavLink>
            <NavLink 
              to="/technology" 
              className={({ isActive }) => `block py-2 px-4 ${isActive ? 'text-accent' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              Technology
            </NavLink>
            <NavLink 
              to="/learning-module" 
              className={({ isActive }) => `block py-2 px-4 ${isActive ? 'text-accent' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              Learning Module
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `block py-2 px-4 ${isActive ? 'text-accent' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `block py-2 px-4 ${isActive ? 'text-accent' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink 
              to="/quiz" 
              className={({ isActive }) => `block py-2 px-4 ${isActive ? 'text-accent' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              Quiz
            </NavLink>
            <NavLink 
              to="/games" 
              className={({ isActive }) => `block py-2 px-4 ${isActive ? 'text-accent' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              Games
            </NavLink>
            {isLoggedIn ? (
              <NavLink 
                to="/logout" 
                className={({ isActive }) => `block py-2 px-4 ${isActive ? 'text-accent' : 'text-white'}`}
                onClick={() => setIsOpen(false)}
              >
                Logout
              </NavLink>
            ) : (
              <NavLink 
                to="/login" 
                className={({ isActive }) => `block py-2 px-4 ${isActive ? 'text-accent' : 'text-white'}`}
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            )}
            <Link 
              to="/" 
              className="btn-primary text-center mx-4"
              onClick={() => setIsOpen(false)}
            >
              Try Now
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;