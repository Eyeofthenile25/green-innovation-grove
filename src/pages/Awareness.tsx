import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Lightbulb } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QAAccordion from '../components/QAAccordion';
import VideoCard from '../components/VideoCard';

const Awareness = () => {
  const videos = [
    {
      id: 1,
      title: "Understanding Solar Energy",
      thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      duration: "2:30",
      views: "1.2K"
    },
    {
      id: 2,
      title: "Wind Power Basics",
      thumbnail: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      duration: "3:15",
      views: "980"
    }
  ];

  return (
    <div className="min-h-screen bg-anka-pharaohBlue">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Learn About Renewable Energy
              </h1>
              <p className="text-lg text-anka-sand/80 max-w-2xl mx-auto">
                Discover sustainable energy through interactive content, expert Q&As, and hands-on tutorials.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Q&A Section */}
        <section className="px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Common Questions</h2>
              <p className="text-anka-sand/80">Find answers to frequently asked questions about renewable energy</p>
            </div>
            <QAAccordion />
          </div>
        </section>

        {/* Video Section */}
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Quick Learning Videos</h2>
              <p className="text-anka-sand/80">Watch bite-sized videos explaining renewable energy concepts</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </div>
        </section>

        {/* DIY Projects Section */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">DIY Projects</h2>
              <p className="text-anka-sand/80">Start your renewable energy journey with these hands-on projects</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project cards will be added here */}
            </div>
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-anka-gold text-anka-pharaohBlue font-semibold rounded-full hover:bg-anka-gold/90 transition-colors">
                Explore More Projects
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Awareness;
