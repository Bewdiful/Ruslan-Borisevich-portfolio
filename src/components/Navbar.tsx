
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll event to add background to navbar when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close menu when clicking a link or changing route
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled 
          ? "bg-white/95 shadow-lg backdrop-blur-sm py-3" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="font-playfair font-bold text-2xl text-navy relative overflow-hidden group"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-green">RB</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden relative text-navy transition-colors duration-300",
            isOpen ? "text-green" : "text-navy hover:text-green"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="transition-all duration-300">
            {isOpen ? <X size={24} className="animate-fade-in" /> : <Menu size={24} className="animate-fade-in" />}
          </div>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium tracking-wider transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-green",
                location.pathname === link.path 
                  ? "text-green after:w-full" 
                  : "text-navy hover:text-green after:w-0 hover:after:w-full after:transition-all after:duration-300"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg animate-slide-down">
            <div className="flex flex-col items-center py-8 space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium tracking-wider transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-green after:transition-all after:duration-300",
                    location.pathname === link.path 
                      ? "text-green after:w-full" 
                      : "text-navy hover:text-green after:w-0 hover:after:w-full"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
