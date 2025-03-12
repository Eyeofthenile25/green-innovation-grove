
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VolunteerCard from '../components/VolunteerCard';

const Volunteering = () => {
  // Define adult volunteering opportunities
  const adultOpportunities = [
    {
      title: "Solar Panel Installation",
      description: "Help install solar panels in underserved communities. No prior experience required - our team will train you on-site.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      date: "Every Saturday",
      location: "Various Locations",
      duration: "Flexible",
      spots: 5
    },
    {
      title: "Renewable Energy Workshop Leader",
      description: "Lead workshops teaching adults about renewable energy concepts and practical applications.",
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      date: "Monthly",
      location: "Community Centers",
      duration: "3 hours/session",
      spots: 2
    }
  ];

  // Define kids volunteering opportunities
  const kidsOpportunities = [
    {
      title: "Eco Science Club",
      description: "Weekly workshops teaching kids about renewable energy through fun, hands-on activities and experiments.",
      image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      date: "Every Wednesday",
      location: "Community Centers",
      duration: "2 hours/week",
      spots: 10
    },
    {
      title: "Green Energy Art Project",
      description: "Help kids create art projects made from recycled materials that teach about renewable energy.",
      image: "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      date: "Last Sunday of each month",
      location: "Local Art Center",
      duration: "4 hours",
      spots: 8
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
              {adultOpportunities.map((opportunity, index) => (
                <VolunteerCard 
                  key={index}
                  title={opportunity.title}
                  description={opportunity.description}
                  image={opportunity.image}
                  date={opportunity.date}
                  location={opportunity.location}
                  duration={opportunity.duration}
                  type="adult"
                  spots={opportunity.spots}
                  onApply={() => console.log(`Applied for: ${opportunity.title}`)}
                />
              ))}
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
              {kidsOpportunities.map((opportunity, index) => (
                <VolunteerCard 
                  key={index}
                  title={opportunity.title}
                  description={opportunity.description}
                  image={opportunity.image}
                  date={opportunity.date}
                  location={opportunity.location}
                  duration={opportunity.duration}
                  type="kids"
                  spots={opportunity.spots}
                  onApply={() => console.log(`Applied for: ${opportunity.title}`)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Volunteering;
