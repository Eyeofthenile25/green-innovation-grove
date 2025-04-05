
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Puzzle, Gamepad, Trophy, Filter, User, Zap, Wind, Droplet, BookOpen, Leaf } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuizCard from '../components/QuizCard';
import GameCard from '../components/GameCard';
import { Button } from '@/components/ui/button';

const Quizzes = () => {
  const [contentType, setContentType] = useState<'quizzes' | 'games'>('quizzes');
  const [category, setCategory] = useState<'all' | 'solar' | 'wind' | 'hydro' | 'basics'>('all');

  // Define quizzes data
  const quizzes = [
    {
      id: 1,
      title: "Renewable Energy Basics",
      description: "Test your knowledge of fundamental concepts in renewable energy.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      pointsValue: 100,
      questions: [
        {
          id: 1,
          text: "Which of the following is NOT a renewable energy source?",
          options: ["Solar", "Wind", "Natural Gas", "Hydroelectric"],
          correctAnswer: 2
        },
        {
          id: 2,
          text: "What percentage of global electricity production came from renewable sources in 2020?",
          options: ["About 10%", "About 30%", "About 50%", "About 70%"],
          correctAnswer: 1
        },
        {
          id: 3,
          text: "Which country leads the world in wind power capacity?",
          options: ["United States", "China", "Germany", "India"],
          correctAnswer: 1
        }
      ],
      category: "basics",
      icon: <BookOpen size={18} className="text-anka-blue" />
    },
    {
      id: 2,
      title: "Solar Energy Mastery",
      description: "Explore the intricate details of solar technology and implementation.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      pointsValue: 150,
      questions: [
        {
          id: 1,
          text: "What material are most solar cells made from?",
          options: ["Silicon", "Aluminum", "Copper", "Gold"],
          correctAnswer: 0
        },
        {
          id: 2,
          text: "What is the average efficiency of commercial solar panels?",
          options: ["5-10%", "15-20%", "40-50%", "70-80%"],
          correctAnswer: 1
        },
        {
          id: 3,
          text: "What happens to solar panel efficiency on cloudy days?",
          options: ["It stops working completely", "Efficiency drops to about 10-25%", "Efficiency increases", "No change in efficiency"],
          correctAnswer: 1
        }
      ],
      category: "solar",
      icon: <Zap size={18} className="text-amber-400" />
    },
    {
      id: 3,
      title: "Wind Power Challenge",
      description: "Test your knowledge about wind turbines and wind energy systems.",
      image: "https://images.unsplash.com/photo-1548337138-e87d9a47c91e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      pointsValue: 120,
      questions: [
        {
          id: 1,
          text: "What determines the amount of electricity a wind turbine can generate?",
          options: ["Only the wind speed", "Only the blade length", "Both the wind speed and blade length", "Only the height of the tower"],
          correctAnswer: 2
        },
        {
          id: 2,
          text: "What is the typical lifespan of a modern wind turbine?",
          options: ["5-10 years", "15-20 years", "20-25 years", "50+ years"],
          correctAnswer: 2
        },
        {
          id: 3,
          text: "Which country has the highest percentage of electricity generated from wind power?",
          options: ["United States", "China", "Denmark", "Germany"],
          correctAnswer: 2
        }
      ],
      category: "wind",
      icon: <Wind size={18} className="text-blue-400" />
    },
    {
      id: 4,
      title: "Hydroelectric Power",
      description: "Dive into the world of hydroelectric energy and water-based power generation.",
      image: "https://images.unsplash.com/photo-1586349930800-5f1875273eed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      pointsValue: 130,
      questions: [
        {
          id: 1,
          text: "What is the main environmental concern with large hydroelectric dams?",
          options: ["Water pollution", "Disruption of ecosystems", "Air pollution", "Noise pollution"],
          correctAnswer: 1
        },
        {
          id: 2,
          text: "Which country produces the most hydroelectric power?",
          options: ["United States", "Brazil", "China", "Canada"],
          correctAnswer: 2
        },
        {
          id: 3,
          text: "What is 'pumped storage' in hydroelectric power?",
          options: ["A method to store excess energy", "A type of water filter", "A dam construction technique", "A water preservation system"],
          correctAnswer: 0
        }
      ],
      category: "hydro",
      icon: <Droplet size={18} className="text-blue-500" />
    },
    {
      id: 5,
      title: "Green Living Quiz",
      description: "Test your knowledge on sustainable living practices and their impact.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      pointsValue: 110,
      questions: [
        {
          id: 1,
          text: "Which of the following activities typically has the largest carbon footprint?",
          options: ["Taking a long shower", "Flying internationally", "Using plastic bags", "Leaving lights on"],
          correctAnswer: 1
        },
        {
          id: 2,
          text: "What percentage of household energy consumption can be saved by proper insulation?",
          options: ["Up to 10%", "Up to 20%", "Up to 40%", "Up to 60%"],
          correctAnswer: 2
        },
        {
          id: 3,
          text: "Which household appliance typically uses the most energy?",
          options: ["Refrigerator", "Washing machine", "Television", "Laptop"],
          correctAnswer: 0
        }
      ],
      category: "basics",
      icon: <Leaf size={18} className="text-green-400" />
    }
  ];

  // Define games data
  const games = [
    {
      id: 1,
      title: "Energy Grid Builder",
      description: "Design and build your own renewable energy grid to power a virtual city efficiently.",
      image: "https://images.unsplash.com/photo-1600456899121-68eda5705257?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      pointsValue: 200,
      difficulty: "Medium",
      duration: "15-20 min",
      players: "Single player",
      category: "basics",
      icon: <Puzzle size={18} className="text-green-400" />
    },
    {
      id: 2,
      title: "Solar Panel Simulator",
      description: "Place solar panels strategically to maximize energy production throughout the day.",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      pointsValue: 150,
      difficulty: "Easy",
      duration: "10-15 min",
      players: "Single player",
      category: "solar",
      icon: <Zap size={18} className="text-amber-400" />
    },
    {
      id: 3,
      title: "Wind Farm Challenge",
      description: "Position wind turbines to harness maximum wind energy while managing environmental impact.",
      image: "https://images.unsplash.com/photo-1559136142-84c2ea0dc316?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      pointsValue: 180,
      difficulty: "Hard",
      duration: "20-25 min",
      players: "1-2 players",
      category: "wind",
      icon: <Wind size={18} className="text-blue-400" />
    },
    {
      id: 4,
      title: "Hydropower Manager",
      description: "Regulate water flow through virtual dams to generate power while protecting ecosystems.",
      image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      pointsValue: 170,
      difficulty: "Medium",
      duration: "15-20 min",
      players: "Single player",
      category: "hydro",
      icon: <Droplet size={18} className="text-blue-500" />
    },
    {
      id: 5,
      title: "Eco City Builder",
      description: "Build a sustainable city from the ground up, balancing energy needs with environmental impact.",
      image: "https://images.unsplash.com/photo-1518557984649-7b161c230cfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      pointsValue: 250,
      difficulty: "Hard",
      duration: "30+ min",
      players: "Single player",
      category: "basics",
      icon: <Leaf size={18} className="text-green-400" />
    }
  ];

  // Filter content based on selected type and category
  const filteredQuizzes = category === 'all' 
    ? quizzes 
    : quizzes.filter(quiz => quiz.category === category);

  const filteredGames = category === 'all'
    ? games
    : games.filter(game => game.category === category);

  const handleQuizComplete = (score: number, pointsValue: number) => {
    const earnedPoints = Math.round((score / 3) * pointsValue); // Assuming 3 questions per quiz
    console.log(`Quiz completed! Earned ${earnedPoints} points out of ${pointsValue}`);
    // In a real implementation, this would update the user's points in a database
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-anka-black to-anka-navy/90">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-anka-amethyst/15 text-anka-amethyst border border-anka-amethyst/30">
                <Trophy size={16} className="mr-2" />
                <span className="text-sm font-medium">Learn & Earn Points</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text-gold-cream mb-6">
                Quizzes & Games
              </h1>
              <p className="text-lg text-anka-sand/90 max-w-2xl mx-auto">
                Test your knowledge and have fun while earning points for marketplace discounts
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="px-6 mb-10">
          <div className="max-w-7xl mx-auto">
            <div className="glass-dark rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Filter size={20} className="mr-2 text-anka-amethyst" /> 
                Browse Content
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <h3 className="text-sm font-medium text-anka-sand/80 mb-2">Content Type</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      onClick={() => setContentType('quizzes')} 
                      variant={contentType === 'quizzes' ? "default" : "outline"}
                      className={contentType === 'quizzes' ? "bg-anka-amethyst hover:bg-anka-amethyst/90" : "text-anka-sand border-anka-sand/30"}
                    >
                      <Lightbulb size={18} className="mr-2" /> 
                      Quizzes
                    </Button>
                    <Button 
                      onClick={() => setContentType('games')} 
                      variant={contentType === 'games' ? "default" : "outline"}
                      className={contentType === 'games' ? "bg-anka-turquoise hover:bg-anka-turquoise/90" : "text-anka-sand border-anka-sand/30"}
                    >
                      <Gamepad size={18} className="mr-2" /> 
                      Games
                    </Button>
                  </div>
                </div>
                
                <div className="border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-4 pt-4 sm:pt-0">
                  <h3 className="text-sm font-medium text-anka-sand/80 mb-2">Category</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      onClick={() => setCategory('all')} 
                      variant={category === 'all' ? "default" : "outline"}
                      className={category === 'all' ? "bg-anka-gold hover:bg-anka-gold/90 text-anka-black" : "text-anka-sand border-anka-sand/30"}
                      size="sm"
                    >
                      All
                    </Button>
                    <Button 
                      onClick={() => setCategory('solar')} 
                      variant={category === 'solar' ? "default" : "outline"}
                      className={category === 'solar' ? "bg-amber-400 hover:bg-amber-400/90 text-anka-black" : "text-anka-sand border-anka-sand/30"}
                      size="sm"
                    >
                      <Zap size={14} className="mr-1" />
                      Solar
                    </Button>
                    <Button 
                      onClick={() => setCategory('wind')} 
                      variant={category === 'wind' ? "default" : "outline"}
                      className={category === 'wind' ? "bg-blue-400 hover:bg-blue-400/90 text-white" : "text-anka-sand border-anka-sand/30"}
                      size="sm"
                    >
                      <Wind size={14} className="mr-1" />
                      Wind
                    </Button>
                    <Button 
                      onClick={() => setCategory('hydro')} 
                      variant={category === 'hydro' ? "default" : "outline"}
                      className={category === 'hydro' ? "bg-blue-500 hover:bg-blue-500/90 text-white" : "text-anka-sand border-anka-sand/30"}
                      size="sm"
                    >
                      <Droplet size={14} className="mr-1" />
                      Hydro
                    </Button>
                    <Button 
                      onClick={() => setCategory('basics')} 
                      variant={category === 'basics' ? "default" : "outline"}
                      className={category === 'basics' ? "bg-green-500 hover:bg-green-500/90 text-white" : "text-anka-sand border-anka-sand/30"}
                      size="sm"
                    >
                      <Leaf size={14} className="mr-1" />
                      Basics
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Display */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            {contentType === 'quizzes' ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <Lightbulb size={24} className="mr-2 text-anka-amethyst" />
                    Knowledge Quizzes
                  </h2>
                  <p className="text-anka-sand/70">
                    Test your renewable energy knowledge and earn points for discounts
                  </p>
                </div>
                
                {filteredQuizzes.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-xl text-anka-sand/70">No quizzes found in this category.</p>
                    <Button 
                      className="mt-4 bg-anka-gold hover:bg-anka-gold/90 text-anka-black" 
                      onClick={() => setCategory('all')}
                    >
                      View All Categories
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredQuizzes.map((quiz) => (
                      <QuizCard
                        key={quiz.id}
                        title={quiz.title}
                        description={quiz.description}
                        image={quiz.image}
                        pointsValue={quiz.pointsValue}
                        questions={quiz.questions}
                        onComplete={(score) => handleQuizComplete(score, quiz.pointsValue)}
                        icon={quiz.icon}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <Gamepad size={24} className="mr-2 text-anka-turquoise" />
                    Interactive Games
                  </h2>
                  <p className="text-anka-sand/70">
                    Play and learn with interactive games about renewable energy
                  </p>
                </div>
                
                {filteredGames.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-xl text-anka-sand/70">No games found in this category.</p>
                    <Button 
                      className="mt-4 bg-anka-gold hover:bg-anka-gold/90 text-anka-black" 
                      onClick={() => setCategory('all')}
                    >
                      View All Categories
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredGames.map((game) => (
                      <GameCard
                        key={game.id}
                        title={game.title}
                        description={game.description}
                        image={game.image}
                        pointsValue={game.pointsValue}
                        difficulty={game.difficulty as 'Easy' | 'Medium' | 'Hard'}
                        duration={game.duration}
                        players={game.players}
                        category={game.category}
                        onPlay={() => console.log(`Starting game: ${game.title}`)}
                        icon={game.icon}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Points Info Section */}
        <section className="px-6 mt-16">
          <div className="max-w-5xl mx-auto">
            <div className="glass-dark rounded-xl p-6 border border-anka-gold/20 bg-gradient-to-br from-anka-navy/50 to-anka-gold/5">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-anka-gold/20 flex items-center justify-center">
                    <Trophy size={48} className="text-anka-gold" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">How Points Work</h3>
                  <p className="text-anka-sand/80 mb-2">
                    Complete quizzes and games to earn points that can be redeemed for discounts in our marketplace.
                  </p>
                  <ul className="text-sm text-anka-sand/70 space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-anka-gold mr-2"></span>
                      <span>100 points = 5% discount on your next purchase</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-anka-gold mr-2"></span>
                      <span>250 points = 10% discount on your next purchase</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-anka-gold mr-2"></span>
                      <span>500 points = 20% discount on your next purchase</span>
                    </li>
                  </ul>
                </div>
                
                <div className="ml-auto flex-shrink-0">
                  <Button
                    className="px-6 py-2 bg-anka-gold hover:bg-anka-gold/90 text-anka-black"
                    onClick={() => console.log('Navigating to marketplace')}
                  >
                    Visit Marketplace
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Quizzes;
