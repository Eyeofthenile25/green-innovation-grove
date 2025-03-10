
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Awareness', path: '/awareness' },
    { name: 'AI Chat', path: '/ai-chat' },
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
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${scrolled ? 'py-3 glass shadow-sm' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-anka-blue"
          aria-label="Anka - Home"
        >
          <Leaf className="h-8 w-8" />
          <span className="text-2xl font-bold tracking-tight">anka</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                location.pathname === link.path
                  ? 'font-medium text-anka-blue after:bg-anka-blue after:w-full'
                  : 'text-foreground/80 hover:text-anka-blue after:bg-anka-blue/50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xl py-3 transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-anka-blue font-medium'
                  : 'text-white hover:text-anka-blue'
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
