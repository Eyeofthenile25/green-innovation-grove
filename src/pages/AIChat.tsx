
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIForm from '../components/AIForm';

const AIChat = () => {
  return (
    <div className="min-h-screen bg-anka-black">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Idea Evaluator
            </h1>
            <p className="text-lg text-anka-cream/80 max-w-2xl mx-auto">
              Get instant feedback on your renewable energy ideas with our advanced AI analysis
            </p>
          </motion.div>
          
          <div className="glass-dark rounded-2xl border border-anka-gold/30 overflow-hidden">
            <AIForm onSubmit={(idea) => console.log(idea)} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIChat;
