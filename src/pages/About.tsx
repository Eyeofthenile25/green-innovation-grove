
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Leaf, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-anka-pharaohBlue">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-6 bg-gradient-to-b from-anka-darkNavy to-anka-navy text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(240,196,25,0.3),transparent_70%)]"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="subtitle text-anka-gold mb-2 animate-fade-in">Our Mission</div>
              <h1 className="heading-1 animate-fade-in max-w-4xl">
                Empowering a Sustainable Future
              </h1>
              <p className="text-xl mt-6 max-w-3xl text-white/80 animate-fade-in stagger-1">
                At Anka, we are dedicated to empowering individuals and communities to adopt sustainable practices 
                and advance renewable energy solutions through education, innovation, and collaboration.
              </p>
            </div>
          </div>
        </section>
        
        {/* Vision Section */}
        <section className="py-20 px-6 bg-anka-nightBlue papyrus-texture">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="subtitle text-anka-gold mb-2">Our Vision</div>
                <h2 className="heading-2 mb-6 text-anka-sand">Inspired by Ancient Wisdom</h2>
                <p className="body-large mb-6 text-anka-sand/80">
                  Like the Ankh symbol from ancient Egypt that represents eternal life, our platform 
                  symbolizes the sustainable cycle of renewable energy that brings life to our planet 
                  for generations to come.
                </p>
                <p className="body-large text-anka-sand/80">
                  We envision a world where clean energy is accessible to all, where communities are 
                  empowered with knowledge and tools to create sustainable solutions, and where each 
                  individual can contribute to a healthier planet.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full bg-anka-gold/10 border-8 border-anka-gold/30 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/920fadd4-f513-414a-bd9d-0fce5adec2ae.png" 
                    alt="Anka Logo" 
                    className="w-40 h-40 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* What We Offer Section */}
        <section className="py-20 px-6 bg-anka-navy/80">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="subtitle text-anka-gold mb-2">What We Offer</div>
              <h2 className="heading-2 mb-4 text-anka-sand">Our Comprehensive Approach</h2>
              <p className="max-w-3xl mx-auto text-anka-sand/70">
                We provide a multifaceted platform that combines education, technology, and community 
                to make renewable energy accessible and actionable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Leaf,
                  title: "Educational Awareness",
                  description: "Interactive Q&A sessions, TikTok-style videos, and DIY tutorials on renewable energy topics."
                },
                {
                  icon: Lightbulb,
                  title: "AI Idea Evaluation",
                  description: "Advanced AI technology to evaluate user ideas, provide success probability, and step-by-step guidance."
                },
                {
                  icon: Users,
                  title: "Community Engagement",
                  description: "Volunteering opportunities for all ages and a marketplace connecting users with collaborators."
                },
                {
                  icon: Heart,
                  title: "Gamified Learning",
                  description: "Fun quizzes and challenges that reward users with discounts for their eco-friendly efforts."
                }
              ].map((feature, index) => (
                <div 
                  key={feature.title}
                  className="glass-gold rounded-2xl p-8 border border-anka-gold/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-anka-navy rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-anka-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-anka-sand">{feature.title}</h3>
                  <p className="text-anka-sand/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 px-6 bg-anka-darkNavy hieroglyphic-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="subtitle text-anka-gold mb-2">Our Team</div>
              <h2 className="heading-2 mb-4 text-anka-sand">Passionate Experts & Innovators</h2>
              <p className="max-w-3xl mx-auto text-anka-sand/70">
                Our diverse team of renewable energy experts, educators, engineers, and community 
                organizers work together to bring sustainable solutions to life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="bg-anka-navy/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-anka-gold/10">
                  <div className="w-24 h-24 bg-anka-gold/10 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-center mb-1 text-anka-sand">Team Member {index + 1}</h3>
                  <p className="text-anka-gold/80 text-center mb-4">Position Title</p>
                  <p className="text-anka-sand/70 text-center">
                    Brief description about the team member and their contribution to the Anka mission.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
