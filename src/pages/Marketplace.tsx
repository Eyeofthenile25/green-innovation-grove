
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CollaboratorCard from '../components/CollaboratorCard';

const Marketplace = () => {
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
                Sustainable Marketplace
              </h1>
              <p className="text-lg text-anka-sand/80 max-w-2xl mx-auto">
                Connect with collaborators and discover sustainable products
              </p>
            </motion.div>
          </div>
        </section>

        {/* Collaborators Section */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Collaborators</h2>
              <p className="text-anka-sand/80">Partner with industry leaders in renewable energy</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CollaboratorCard 
                name="EcoTech Solutions"
                image="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
                description="Leading provider of solar panel solutions"
                specialties={["Solar Panels", "Installation", "Maintenance"]}
              />
              {/* More collaborator cards will be added here */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Marketplace;
