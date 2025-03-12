
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlignJustify, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ];
  
  const menuLinks = [
    { name: 'Awareness', path: '/awareness' },
    { name: 'Volunteering', path: '/volunteering' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Quizzes', path: '/quizzes' }
  ];
  
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
  
  useEffect(() => {
    setIsOpen(false);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${scrolled ? 'py-3 glass shadow-sm' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-anka-gold"
          aria-label="Anka - Home"
        >
          <img 
            src="/lovable-uploads/920fadd4-f513-414a-bd9d-0fce5adec2ae.png" 
            alt="Anka Logo" 
            className="h-10 w-10" 
          />
          <span className="text-2xl font-bold tracking-tight">anka</span>
        </Link>
        
        {/* Center Nav Links */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {mainLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                location.pathname === link.path
                  ? 'font-medium text-anka-gold after:bg-anka-gold after:w-full'
                  : 'text-foreground/80 hover:text-anka-gold after:bg-anka-gold/50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Right Menu Dropdown */}
        <div className="hidden md:block relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onBlur={() => setTimeout(() => setIsMenuOpen(false), 100)}
            className="flex items-center space-x-1 text-foreground/80 hover:text-anka-gold transition-colors"
          >
            <span>Menu</span>
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-anka-navy rounded-lg shadow-lg py-2 z-50 border border-anka-gold/20 animate-fade-in">
              {menuLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-2 text-sm hover:bg-anka-gold/10 transition-colors ${
                    location.pathname === link.path
                      ? 'font-medium text-anka-gold bg-anka-gold/5'
                      : 'text-foreground/80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-anka-gold"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 glass-dark md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0', paddingTop: '5rem' }}
      >
        <div className="flex flex-col px-8 py-6 space-y-6">
          {[...mainLinks, ...menuLinks].map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xl py-3 transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-anka-gold font-medium'
                  : 'text-white hover:text-anka-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
