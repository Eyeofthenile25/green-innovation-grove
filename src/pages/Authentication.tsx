
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Key, Mail, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from '../hooks/use-toast';
import { useUser } from '../contexts/UserContext';

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login, register } = useUser();
  
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Login
      login(email, password);
      toast({
        title: "Welcome back!",
        description: "You've successfully logged in.",
      });
      navigate('/awareness');
    } else {
      // Register
      register(name, email, password);
      toast({
        title: "Account created!",
        description: "Your account has been successfully created.",
      });
      navigate('/awareness');
    }
  };

  return (
    <div className="min-h-screen bg-anka-pharaohBlue">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-md mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-dark rounded-2xl border border-anka-gold/20 p-8 shadow-xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <button 
                onClick={() => navigate('/')}
                className="text-anka-gold hover:text-anka-gold/80 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <h1 className="text-2xl font-bold text-center text-white">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
              <div className="w-5"></div> {/* Empty div for flex spacing */}
            </div>
            
            <div className="flex mb-8 bg-anka-nightBlue/50 rounded-lg p-1">
              <button
                className={`flex-1 py-2 rounded-md transition-colors ${
                  isLogin ? 'bg-anka-gold text-anka-pharaohBlue' : 'text-white/70 hover:text-white'
                }`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`flex-1 py-2 rounded-md transition-colors ${
                  !isLogin ? 'bg-anka-gold text-anka-pharaohBlue' : 'text-white/70 hover:text-white'
                }`}
                onClick={() => setIsLogin(false)}
              >
                Register
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm text-anka-sand/80">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-anka-gold/70" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-anka-nightBlue/50 border border-anka-gold/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-anka-gold/50"
                      placeholder="John Doe"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm text-anka-sand/80">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-anka-gold/70" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-anka-nightBlue/50 border border-anka-gold/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-anka-gold/50"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm text-anka-sand/80">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Key size={18} className="text-anka-gold/70" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2 bg-anka-nightBlue/50 border border-anka-gold/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-anka-gold/50"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-anka-gold/70 hover:text-anka-gold"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              {isLogin && (
                <div className="text-right">
                  <Link to="/" className="text-sm text-anka-gold hover:text-anka-gold/80 transition-colors">
                    Forgot password?
                  </Link>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full py-3 mt-6 bg-anka-gold hover:bg-anka-gold/90 text-anka-pharaohBlue font-medium rounded-lg transition-colors shadow-sm"
              >
                {isLogin ? 'Login' : 'Create Account'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-anka-sand/60">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 text-anka-gold hover:text-anka-gold/80 transition-colors"
                >
                  {isLogin ? 'Register here' : 'Login here'}
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Authentication;
