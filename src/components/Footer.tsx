
import { Leaf, Heart, Twitter, Facebook, Instagram, Youtube, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-anka-darkBlue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="animate-fade-in">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-anka-blue" />
              <span className="text-xl font-bold tracking-tight">anka</span>
            </Link>
            <p className="text-anka-gray mb-6">
              Empowering individuals and communities to adopt sustainable practices and advance renewable energy solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" aria-label="Twitter" className="text-anka-gray hover:text-anka-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-anka-gray hover:text-anka-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-anka-gray hover:text-anka-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="text-anka-gray hover:text-anka-blue transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in stagger-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Awareness', 'AI Chat', 'Volunteering', 'Marketplace', 'Quizzes'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-anka-gray hover:text-white flex items-center group transition-colors"
                  >
                    <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div className="animate-fade-in stagger-2">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {['About Us', 'Blog', 'Sustainability', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/"
                    className="text-anka-gray hover:text-white flex items-center group transition-colors"
                  >
                    <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="animate-fade-in stagger-3">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-anka-gray mb-4">Subscribe to our newsletter for the latest updates on renewable energy.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 focus:border-anka-blue focus:outline-none transition-colors"
              />
              <button 
                type="submit" 
                className="w-full bg-anka-blue hover:bg-anka-blue/90 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between">
          <p className="text-sm text-anka-gray">
            &copy; {new Date().getFullYear()} Anka. All rights reserved.
          </p>
          <p className="text-sm text-anka-gray flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500" /> for a sustainable future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
