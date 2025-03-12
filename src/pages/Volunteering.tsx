
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VolunteerCard from '../components/VolunteerCard';

const Volunteering = () => {
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
                Join Our Community
              </h1>
              <p className="text-lg text-anka-sand/80 max-w-2xl mx-auto">
                Make a difference by volunteering in renewable energy initiatives
              </p>
            </motion.div>
          </div>
        </section>

        {/* Adult Programs */}
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Corporate & Adult Programs
              </h2>
              <p className="text-anka-sand/80">Discover volunteering opportunities for professionals</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VolunteerCard 
                title="Solar Panel Installation"
                description="Help install solar panels in underserved communities"
                location="Various Locations"
                duration="Flexible"
                type="Adult"
              />
              {/* More cards will be added here */}
            </div>
          </div>
        </section>

        {/* Kids Programs */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Kids Workshops & Activities
              </h2>
              <p className="text-anka-sand/80">Fun and educational programs for young minds</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VolunteerCard 
                title="Eco Science Club"
                description="Weekly workshops teaching kids about renewable energy"
                location="Community Centers"
                duration="2 hours/week"
                type="Kids"
              />
              {/* More cards will be added here */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Volunteering;
