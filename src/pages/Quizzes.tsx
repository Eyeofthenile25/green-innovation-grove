
import React from 'react';
import { motion } from 'framer-motion';
import { Game, Ticket } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuizCard from '../components/QuizCard';

const Quizzes = () => {
  return (
    <div className="min-h-screen bg-anka-pharaohBlue">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Test Your Knowledge
              </h1>
              <p className="text-lg text-anka-sand/80 max-w-2xl mx-auto">
                Play quizzes, earn points, and get discounts in our marketplace
              </p>
              <div className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-anka-gold/10 text-anka-gold border border-anka-gold/20">
                <Ticket className="w-5 h-5 mr-2" />
                <span>Your Points: 0</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quizzes Section */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <QuizCard 
                title="Solar Energy Basics"
                description="Test your knowledge about solar power fundamentals"
                difficulty="Beginner"
                points={100}
                timeLimit={10}
                questionsCount={10}
              />
              {/* More quiz cards will be added here */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Quizzes;
