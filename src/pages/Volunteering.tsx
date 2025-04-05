
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, User, Calendar, Filter, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VolunteerCard from '../components/VolunteerCard';
import { Button } from '@/components/ui/button';

const Volunteering = () => {
  const [filter, setFilter] = useState<'all' | 'adult' | 'kids'>('all');

  // Define volunteer opportunities
  const opportunities = [
    {
      id: 1,
      title: "Community Solar Panel Installation",
      description: "Help install solar panels on community buildings and learn about solar energy systems.",
      date: "June 15, 2025",
      location: "Downtown Community Center",
      duration: "4 hours (9 AM - 1 PM)",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      type: 'adult',
      spots: 8
    },
    {
      id: 2,
      title: "Beach Cleanup & Energy Workshop",
      description: "Participate in cleaning a local beach while learning about wave and tidal energy potential.",
      date: "May 28, 2025",
      location: "Sunset Beach",
      duration: "3 hours (8 AM - 11 AM)",
      image: "https://images.unsplash.com/photo-1618477462146-aa33b1b40484?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      type: 'adult',
      spots: 15
    },
    {
      id: 3,
      title: "Renewable Energy Fair Assistance",
      description: "Help organize and run educational stations at our yearly renewable energy fair.",
      date: "July 10-12, 2025",
      location: "City Park",
      duration: "Flexible (4-hour shifts)",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      type: 'adult',
      spots: 20
    },
    {
      id: 4,
      title: "Kids Solar Toy Workshop",
      description: "Learn to build simple toys powered by small solar panels in this fun workshop for children.",
      date: "June 5, 2025",
      location: "Science Museum",
      duration: "2 hours (2 PM - 4 PM)",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbafc90bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      type: 'kids',
      spots: 12
    },
    {
      id: 5,
      title: "Eco-Garden Planting Day",
      description: "Help plant and learn about sustainable gardening practices at our community garden.",
      date: "May 22, 2025",
      location: "Green Meadows Park",
      duration: "3 hours (10 AM - 1 PM)",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      type: 'kids',
      spots: 18
    },
    {
      id: 6,
      title: "Wind Energy Science Day",
      description: "Build small wind turbines and learn how wind energy works through fun experiments.",
      date: "July 3, 2025",
      location: "Children's Learning Center",
      duration: "2 hours (1 PM - 3 PM)",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      type: 'kids',
      spots: 15
    }
  ];

  const filteredOpportunities = filter === 'all' 
    ? opportunities 
    : opportunities.filter(opp => opp.type === filter);

  const handleApply = (id: number) => {
    console.log(`Applied for opportunity ID: ${id}`);
    // In a real app, this would open an application form or modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-anka-black to-anka-navy">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-anka-purple/15 text-anka-purple border border-anka-purple/30">
                <Users size={16} className="mr-2" />
                <span className="text-sm font-medium">Community Engagement</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text-gold-cream mb-6">
                Volunteering Opportunities
              </h1>
              <p className="text-lg text-anka-sand/90 max-w-2xl mx-auto">
                Make a difference by participating in our renewable energy volunteer programs for all ages
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="px-6 mb-10">
          <div className="max-w-7xl mx-auto">
            <div className="glass-dark rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Filter size={20} className="mr-2 text-anka-purple" /> 
                Filter Opportunities
              </h2>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={() => setFilter('all')} 
                  variant={filter === 'all' ? "default" : "outline"}
                  className={filter === 'all' ? "bg-anka-purple hover:bg-anka-purple/90" : "text-anka-sand border-anka-sand/30"}
                >
                  All Opportunities
                </Button>
                <Button 
                  onClick={() => setFilter('adult')} 
                  variant={filter === 'adult' ? "default" : "outline"}
                  className={filter === 'adult' ? "bg-anka-blue hover:bg-anka-blue/90" : "text-anka-sand border-anka-sand/30"}
                >
                  <User size={18} className="mr-2" /> 
                  For Adults
                </Button>
                <Button 
                  onClick={() => setFilter('kids')} 
                  variant={filter === 'kids' ? "default" : "outline"}
                  className={filter === 'kids' ? "bg-purple-500 hover:bg-purple-500/90" : "text-anka-sand border-anka-sand/30"}
                >
                  <User size={18} className="mr-2" /> 
                  For Kids
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities Grid */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            {filteredOpportunities.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-anka-sand/70">No opportunities found matching your filter.</p>
                <Button 
                  className="mt-4 bg-anka-purple hover:bg-anka-purple/90" 
                  onClick={() => setFilter('all')}
                >
                  View All Opportunities
                </Button>
              </div>
            ) : (
              <>
                {/* Title for filtered sections */}
                {filter !== 'all' && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white">
                      {filter === 'adult' ? 'Adult Volunteer Opportunities' : 'Kids Volunteer Opportunities'}
                    </h2>
                    <p className="text-anka-sand/70">
                      {filter === 'adult' 
                        ? 'Opportunities for adults to contribute and learn about renewable energy.' 
                        : 'Fun and educational volunteer activities designed for children.'}
                    </p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredOpportunities.map((opportunity) => (
                    <motion.div
                      key={opportunity.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: opportunity.id * 0.1 }}
                    >
                      <VolunteerCard
                        title={opportunity.title}
                        description={opportunity.description}
                        date={opportunity.date}
                        location={opportunity.location}
                        duration={opportunity.duration}
                        image={opportunity.image}
                        type={opportunity.type as 'adult' | 'kids'}
                        spots={opportunity.spots}
                        onApply={() => handleApply(opportunity.id)}
                      />
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 mt-16">
          <div className="max-w-5xl mx-auto">
            <div className="glass-dark rounded-2xl p-8 border border-anka-purple/20 bg-gradient-to-br from-anka-navy/50 to-anka-purple/10">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Can't Find a Suitable Opportunity?</h2>
                <p className="text-anka-sand/80 mb-6 max-w-lg mx-auto">
                  We're always looking for new ways to engage the community. Let us know your interests or suggest a new volunteering program.
                </p>
                <Button className="px-6 py-6 rounded-full font-semibold shadow-lg bg-gradient-to-r from-anka-gold to-anka-purple text-anka-black hover:from-anka-gold/90 hover:to-anka-purple/90 transition-all">
                  Suggest New Opportunity
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Info Boxes */}
        <section className="px-6 mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-dark rounded-xl p-6 border border-anka-blue/30 bg-gradient-to-br from-anka-navy/50 to-anka-blue/10">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <User size={20} className="mr-2 text-anka-blue" />
                  Adult Volunteers
                </h3>
                <p className="text-anka-sand/80 mb-4">
                  Adult volunteers play a crucial role in our mission by contributing their skills and time to important renewable energy projects and educational initiatives.
                </p>
                <ul className="space-y-2 text-anka-sand/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-anka-blue mr-2"></span>
                    Gain hands-on experience with renewable technologies
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-anka-blue mr-2"></span>
                    Network with industry professionals and like-minded individuals
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-anka-blue mr-2"></span>
                    Contribute to meaningful community projects
                  </li>
                </ul>
              </div>
              
              <div className="glass-dark rounded-xl p-6 border border-purple-500/30 bg-gradient-to-br from-anka-navy/50 to-purple-500/10">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <User size={20} className="mr-2 text-purple-400" />
                  Kids Volunteers
                </h3>
                <p className="text-anka-sand/80 mb-4">
                  Our kids programs focus on making renewable energy fun and educational, building the next generation of environmentally conscious citizens.
                </p>
                <ul className="space-y-2 text-anka-sand/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                    Participate in age-appropriate activities and experiments
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                    Learn about renewable energy through hands-on projects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                    Develop eco-consciousness while having fun
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Volunteering;
