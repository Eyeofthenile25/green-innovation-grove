
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Leaf, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-anka-black">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-dark rounded-2xl p-12 border border-anka-gold/30 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-anka-navy/50 border border-anka-gold/20 flex items-center justify-center">
              <Leaf className="w-10 h-10 text-anka-gold" />
            </div>
            
            <h1 className="text-5xl font-bold mb-4 text-white">404</h1>
            <p className="text-xl text-anka-cream/80 mb-8">Oops! The page you're looking for doesn't exist.</p>
            
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-anka-gold text-anka-black font-medium transition-colors hover:bg-anka-gold/90"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Return to Home
            </Link>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
