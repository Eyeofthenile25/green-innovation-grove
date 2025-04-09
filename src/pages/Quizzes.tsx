
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, Award, Zap, Wind, Droplet, LightbulbIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuizCard from '../components/QuizCard';
import GameCard from '../components/GameCard';

const Quizzes = () => {
  const [userPoints, setUserPoints] = useState<number>(0);
  
  // Define solar quiz questions
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
  
  // Define wind energy quiz questions
  const windQuestions = [
    {
      id: 1,
      text: "What is the minimum wind speed typically needed for a wind turbine to generate electricity?",
      options: ["5-10 mph", "1-3 mph", "20-25 mph", "30-35 mph"],
      correctAnswer: 0
    },
    {
      id: 2,
      text: "Which country has the highest installed capacity of wind power globally?",
      options: ["United States", "China", "Germany", "Denmark"],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "What is the main advantage of offshore wind farms compared to onshore?",
      options: ["Lower construction costs", "Easier maintenance", "Stronger and more consistent winds", "Less noise pollution for residents"],
      correctAnswer: 2
    }
  ];
  
  // Define water conservation quiz questions
  const waterQuestions = [
    {
      id: 1,
      text: "How much water can be saved by fixing a leaky faucet that drips once per second?",
      options: ["About 5 gallons per day", "About 3,000 gallons per year", "About 100 gallons per month", "About 500 gallons per week"],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "Which household activity typically uses the most water?",
      options: ["Showering", "Washing dishes", "Flushing toilets", "Doing laundry"],
      correctAnswer: 2
    },
    {
      id: 3,
      text: "What percentage of Earth's water is freshwater available for human use?",
      options: ["About 3%", "About 25%", "Less than 1%", "About 10%"],
      correctAnswer: 2
    }
  ];
  
  // Define energy efficiency quiz questions
  const efficiencyQuestions = [
    {
      id: 1,
      text: "Which light bulb type is most energy efficient?",
      options: ["Incandescent", "Halogen", "CFL (Compact Fluorescent)", "LED"],
      correctAnswer: 3
    },
    {
      id: 2,
      text: "What does the ENERGY STAR label indicate about a product?",
      options: ["It's made from recycled materials", "It's manufactured in the USA", "It meets energy efficiency guidelines set by the EPA", "It uses renewable energy in manufacturing"],
      correctAnswer: 2
    },
    {
      id: 3,
      text: "Which appliance typically consumes the most energy in a home?",
      options: ["Refrigerator", "Water heater", "Clothes dryer", "Air conditioner"],
      correctAnswer: 1
    }
  ];
  
  const handleQuizComplete = (score: number, pointsValue: number) => {
    const earnedPoints = Math.round((score / 3) * pointsValue);
    setUserPoints(prevPoints => prevPoints + earnedPoints);
    console.log(`Quiz completed! Earned ${earnedPoints} points`);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-anka-navy to-anka-black">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text-purple-blue mb-6">
                Learn & Play
              </h1>
              <p className="text-lg text-anka-sand/90 max-w-2xl mx-auto">
                Test your knowledge, earn points, and get discounts in our marketplace
              </p>
              <div className="mt-8 inline-flex items-center px-6 py-3 rounded-full foggy-gold border border-anka-gold/40">
                <Ticket className="w-5 h-5 mr-2 text-anka-gold" />
                <span className="text-anka-gold">Your Points: {userPoints}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quizzes Section */}
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-1 rounded-full foggy-purple mb-4">
                <Award className="w-5 h-5 mr-2 text-anka-amethyst" />
                <span className="text-anka-amethyst font-medium">Knowledge Check</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Renewable Energy Quizzes</h2>
              <p className="text-anka-sand/90">Test your knowledge and earn reward points</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <QuizCard 
                title="Solar Energy Basics"
                description="Test your knowledge about solar power fundamentals"
                image="https://images.unsplash.com/photo-1592833759747-3bafd6d95315?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                pointsValue={100}
                questions={solarQuestions}
                onComplete={(score) => handleQuizComplete(score, 100)}
                icon={<Zap className="text-amber-400" />}
              />
              <QuizCard 
                title="Wind Power 101"
                description="Learn about wind energy systems and technology"
                image="https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                pointsValue={125}
                questions={windQuestions}
                onComplete={(score) => handleQuizComplete(score, 125)}
                icon={<Wind className="text-blue-400" />}
              />
              <QuizCard 
                title="Water Conservation"
                description="Discover ways to save and protect water resources"
                image="https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                pointsValue={75}
                questions={waterQuestions}
                onComplete={(score) => handleQuizComplete(score, 75)}
                icon={<Droplet className="text-cyan-400" />}
              />
              <QuizCard 
                title="Energy Efficiency"
                description="Learn how to reduce energy consumption at home"
                image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                pointsValue={150}
                questions={efficiencyQuestions}
                onComplete={(score) => handleQuizComplete(score, 150)}
                icon={<LightbulbIcon className="text-green-400" />}
              />
            </div>
          </div>
        </section>
        
        {/* Interactive Games Section */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-1 rounded-full foggy-turquoise mb-4">
                <Zap className="w-5 h-5 mr-2 text-anka-turquoise" />
                <span className="text-anka-turquoise font-medium">Interactive Games</span>
              </div>
              <h2 className="text-3xl font-bold gradient-text-green-turquoise mb-4">Educational Games</h2>
              <p className="text-anka-sand/90">Have fun while learning about sustainability and renewable energy</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <GameCard 
                title="Energy Flow"
                description="Connect solar panels, wind turbines, and batteries to power a virtual city"
                image="https://images.unsplash.com/photo-1509390144018-eeaf1d21fc0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                category="Strategy"
                difficulty="Medium"
                pointsReward={200}
                estimatedTime="10-15 min"
                theme="solar"
              />
              <GameCard 
                title="Eco Builder"
                description="Design and build a sustainable house while managing your resources"
                image="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                category="Simulation"
                difficulty="Easy"
                pointsReward={150}
                estimatedTime="15-20 min"
                theme="efficiency"
              />
              <GameCard 
                title="Water Cycle Challenge"
                description="Guide water droplets through the water cycle while avoiding pollution"
                image="https://images.unsplash.com/photo-1468421870903-4df1664ac249?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                category="Arcade"
                difficulty="Easy"
                pointsReward={100}
                estimatedTime="5-10 min"
                theme="water"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Quizzes;
