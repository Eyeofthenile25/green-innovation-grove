import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Lightbulb, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QAAccordion from '../components/QAAccordion';
import VideoCard from '../components/VideoCard';
import { Button } from '@/components/ui/button';

const Awareness = () => {
  // Define QA items for the accordion
  const qaItems = [
    {
      question: "What is renewable energy?",
      answer: "Renewable energy comes from sources that naturally replenish themselves, such as sunlight, wind, rain, tides, waves, and geothermal heat. Unlike fossil fuels, these energy sources won't run out and generally cause less environmental impact."
    },
    {
      question: "Why is renewable energy important?",
      answer: "Renewable energy is crucial for reducing greenhouse gas emissions, decreasing dependence on imported fuels, creating economic development and jobs, and providing energy access to the billion people living without electricity."
    },
    {
      question: "How do solar panels work?",
      answer: "Solar panels convert sunlight into electricity through the photovoltaic effect. When sunlight hits the semiconductor material in solar cells, it knocks electrons loose, creating an electric current that can be captured and used as electricity."
    },
    {
      question: "What is the most efficient renewable energy source?",
      answer: "The efficiency of renewable energy sources varies by location and implementation. Hydroelectric power generally has the highest efficiency rate at 90%, followed by wind turbines at around 35-45%, while solar panels typically convert 15-20% of sunlight into electricity."
    },
    {
      question: "How can I implement renewable energy in my home?",
      answer: "You can start with solar panels on your roof, small wind turbines if you have the space, solar water heaters, geothermal heat pumps, or even micro-hydropower systems if you have flowing water on your property. Many governments offer incentives to offset installation costs."
    },
    {
      question: "What are the different types of renewable energy?",
      answer: "The main types of renewable energy are solar, wind, hydroelectric, geothermal, and biomass. Each has different applications and benefits depending on location, climate, and available resources."
    },
    {
      question: "How much does it cost to switch to renewable energy?",
      answer: "The cost varies widely depending on the type of renewable energy, scale of implementation, and location. While initial installation costs can be higher than conventional energy sources, renewable energy typically offers lower operational costs and long-term savings. Many regions also offer tax incentives, rebates, and financing options to reduce upfront costs."
    },
    {
      question: "What is the carbon footprint of renewable energy?",
      answer: "Renewable energy technologies have significantly lower lifecycle carbon emissions compared to fossil fuels. While there are some emissions associated with manufacturing, installation, and maintenance, the operational phase of renewables produces virtually zero direct emissions. Solar and wind energy have among the lowest carbon footprints of all energy sources."
    },
    {
      question: "Can renewable energy completely replace fossil fuels?",
      answer: "Theoretically, yes. The total amount of renewable energy available far exceeds global energy demand. However, practical challenges include energy storage, grid integration, and ensuring reliable supply. Many experts believe that with continued technological advancements, policy support, and investment, a transition to a predominantly renewable energy system is achievable in the coming decades."
    },
    {
      question: "How does energy storage work with renewable energy?",
      answer: "Energy storage technologies like batteries, pumped hydro storage, compressed air, and thermal storage help address the intermittent nature of some renewable sources. These systems store excess energy when production is high and release it when production is low, ensuring a stable and reliable energy supply. Advances in battery technology are making storage increasingly efficient and affordable."
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Understanding Solar Energy",
      description: "A quick overview of how solar energy works and its benefits",
      videoSrc: "https://example.com/solar-video.mp4",
      thumbnailSrc: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      duration: "2:30",
      views: "1.2K"
    },
    {
      id: 2,
      title: "Wind Power Basics",
      description: "Learn the fundamentals of wind energy in just a few minutes",
      videoSrc: "https://example.com/wind-video.mp4",
      thumbnailSrc: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      duration: "3:15",
      views: "980"
    },
    {
      id: 3,
      title: "Hydro Power Revolution",
      description: "Discover how water can generate clean electricity",
      videoSrc: "https://example.com/hydro-video.mp4",
      thumbnailSrc: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      duration: "4:10",
      views: "1.5K"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Solar-Powered Phone Charger",
      description: "Build a portable device that uses sunlight to charge your devices",
      difficulty: "Beginner",
      materials: ["Small solar panel", "USB port", "Battery", "Enclosure"],
      color: "from-amber-300 to-red-500"
    },
    {
      id: 2,
      title: "Mini Wind Turbine",
      description: "Construct a small wind turbine that can power LED lights",
      difficulty: "Intermediate",
      materials: ["PVC pipes", "DC motor", "Blades", "LED lights"],
      color: "from-teal-400 to-blue-500"
    },
    {
      id: 3,
      title: "Home Energy Monitor",
      description: "Create a system to track your household energy consumption",
      difficulty: "Advanced",
      materials: ["Raspberry Pi", "Current sensors", "Display screen", "Software"],
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-anka-black to-anka-navy/90">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-anka-turquoise/15 text-anka-turquoise border border-anka-turquoise/30">
                <Lightbulb size={16} className="mr-2" />
                <span className="text-sm font-medium">Educational Resources</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-anka-gold via-anka-cream to-anka-sand bg-clip-text text-transparent mb-6">
                Learn About Renewable Energy
              </h1>
              <p className="text-lg text-anka-cream/80 max-w-2xl mx-auto">
                Discover sustainable energy through interactive content, expert Q&As, and hands-on tutorials.
              </p>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute top-60 right-10 w-40 h-40 bg-anka-turquoise/10 rounded-full blur-3xl"></div>
            <div className="absolute top-80 left-20 w-60 h-60 bg-anka-gold/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Q&A Section */}
        <section className="px-6 mb-20 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
                <span className="bg-gradient-to-r from-anka-cream to-anka-sand bg-clip-text text-transparent">
                  Common Questions
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-anka-gold/80 to-anka-gold/20"></div>
              </h2>
              <p className="text-anka-cream/70">Find answers to frequently asked questions about renewable energy</p>
            </div>
            <div className="glass-dark rounded-2xl border border-anka-gold/30 shadow-xl overflow-hidden">
              <QAAccordion items={qaItems} />
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="px-6 mb-20 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
                <span className="bg-gradient-to-r from-anka-cream to-anka-gold bg-clip-text text-transparent">
                  Quick Learning Videos
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-anka-terracotta/80 to-anka-terracotta/20"></div>
              </h2>
              <p className="text-anka-cream/70">Watch bite-sized videos explaining renewable energy concepts</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: video.id * 0.1 }}
                >
                  <VideoCard 
                    title={video.title}
                    description={video.description}
                    videoSrc={video.videoSrc}
                    thumbnailSrc={video.thumbnailSrc}
                    duration={video.duration}
                    views={video.views}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DIY Projects Section */}
        <section className="px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
                <span className="bg-gradient-to-r from-anka-gold to-anka-terracotta bg-clip-text text-transparent">
                  DIY Projects
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-anka-turquoise/80 to-anka-turquoise/20"></div>
              </h2>
              <p className="text-anka-cream/70">Start your renewable energy journey with these hands-on projects</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass-dark rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:scale-[1.02] transition-transform duration-300`}
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${project.color}`}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-anka-cream/70 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-anka-navy text-anka-cream">
                        {project.difficulty}
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-anka-gold mb-2">Materials:</h4>
                      <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                        {project.materials.map((material, i) => (
                          <li key={i} className="text-anka-cream/70 text-sm flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-anka-gold/60 mr-1.5"></span>
                            {material}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="default" className="w-full bg-gradient-to-r from-anka-gold to-anka-terracotta hover:from-anka-gold/90 hover:to-anka-terracotta/90 text-anka-black">
                      View Project
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                className="px-8 py-6 rounded-full font-semibold shadow-lg bg-gradient-to-r from-anka-gold to-anka-terracotta text-anka-black hover:from-anka-gold/90 hover:to-anka-terracotta/90 transition-all"
              >
                Explore More Projects
                <ExternalLink size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Awareness;
