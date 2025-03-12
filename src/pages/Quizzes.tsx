
import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuizCard from '../components/QuizCard';

const Quizzes = () => {
  // Define sample questions for the quiz
  const solarQuestions = [
    {
      id: 1,
      text: "What is the main component of a solar panel that converts sunlight into electricity?",
      options: ["Inverter", "Photovoltaic cell", "Battery", "Transformer"],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "Which of these is NOT a benefit of solar energy?",
      options: ["Renewable resource", "Zero emissions", "Works equally well in all weather", "Reduces electricity bills"],
      correctAnswer: 2
    },
    {
      id: 3,
      text: "What percentage of the sun's energy that reaches Earth is typically converted into electricity by commercial solar panels?",
      options: ["5-10%", "15-20%", "50-60%", "80-90%"],
      correctAnswer: 1
    }
  ];
  
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
                image="https://images.unsplash.com/photo-1592833759747-3bafd6d95315?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                pointsValue={100}
                questions={solarQuestions}
                onComplete={(score) => console.log(`Quiz completed with score: ${score}`)}
              />
              {/* Add more quizzes here */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Quizzes;
