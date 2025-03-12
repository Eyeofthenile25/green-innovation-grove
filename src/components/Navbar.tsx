import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AlignJustify, X, ChevronDown, User, LogOut, Settings } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useUser();
  
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
    setIsProfileOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsProfileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${scrolled ? 'py-3 glass shadow-sm' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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
        
        <div className="hidden md:flex md:items-center md:space-x-6">
          <div className="relative">
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

          {isAuthenticated ? (
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                onBlur={() => setTimeout(() => setIsProfileOpen(false), 100)}
                className="flex items-center space-x-2 text-foreground/80 hover:text-anka-gold transition-colors"
              >
                <div className="h-9 w-9 rounded-full bg-anka-gold/20 border border-anka-gold/30 flex items-center justify-center text-anka-gold">
                  {user?.image ? (
                    <img src={user.image} alt={user.name} className="h-full w-full rounded-full object-cover" />
                  ) : (
                    <User size={18} />
                  )}
                </div>
                <span className="text-sm font-medium hidden lg:block">{user?.name}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-anka-navy rounded-lg shadow-lg py-2 z-50 border border-anka-gold/20 animate-fade-in">
                  <div className="px-4 py-2 border-b border-anka-gold/10">
                    <p className="text-sm font-medium text-anka-gold">{user?.name}</p>
                    <p className="text-xs text-foreground/60 truncate">{user?.email}</p>
                  </div>
                  <Link to="/profile" className="flex items-center space-x-2 w-full px-4 py-2 text-sm hover:bg-anka-gold/10 transition-colors">
                    <Settings size={16} />
                    <span>Profile Settings</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-left w-full px-4 py-2 text-sm text-red-400 hover:bg-anka-gold/10 transition-colors"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link 
              to="/auth" 
              className="bg-anka-gold hover:bg-anka-gold/90 text-anka-pharaohBlue px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Login
            </Link>
          )}
        </div>
        
        <div className="md:hidden flex items-center space-x-4">
          {isAuthenticated && (
            <Dialog>
              <DialogTrigger asChild>
                <button className="h-8 w-8 rounded-full bg-anka-gold/20 border border-anka-gold/30 flex items-center justify-center text-anka-gold">
                  {user?.image ? (
                    <img src={user.image} alt={user.name} className="h-full w-full rounded-full object-cover" />
                  ) : (
                    <User size={16} />
                  )}
                </button>
              </DialogTrigger>
              <DialogContent className="bg-anka-pharaohBlue border border-anka-gold/20">
                <DialogHeader>
                  <DialogTitle className="text-anka-gold">Account</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-2">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-anka-gold/20 border border-anka-gold/30 flex items-center justify-center text-anka-gold">
                      {user?.image ? (
                        <img src={user.image} alt={user.name} className="h-full w-full rounded-full object-cover" />
                      ) : (
                        <User size={24} />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-white">{user?.name}</p>
                      <p className="text-sm text-white/60">{user?.email}</p>
                    </div>
                  </div>
                  <div className="pt-2 space-y-2">
                    <Link 
                      to="/profile"
                      className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-anka-gold/10"
                    >
                      <Settings size={18} className="text-anka-gold" />
                      <span className="text-white">Profile Settings</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-anka-gold/10"
                    >
                      <LogOut size={18} className="text-red-400" />
                      <span className="text-red-400">Logout</span>
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-anka-gold"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
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
          {!isAuthenticated && (
            <Link 
              to="/auth" 
              className="bg-anka-gold hover:bg-anka-gold/90 text-anka-pharaohBlue px-4 py-2 rounded-lg text-base font-medium transition-colors w-full text-center mt-4"
            >
              Login / Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
