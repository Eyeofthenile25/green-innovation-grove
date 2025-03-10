import { Leaf, ArrowRight, Zap, Users, BookOpen, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';

const Index = () => {
  const features = [
    {
      title: 'Educational Awareness',
      description: 'Access Q&A sessions, TikTok-style videos, and DIY tutorials on renewable energy topics.',
      icon: BookOpen,
      link: '/awareness',
      color: 'blue'
    },
    {
      title: 'AI Idea Evaluator',
      description: 'Get your renewable energy ideas evaluated with success probability, resources, and step-by-step guidance.',
      icon: Zap,
      link: '/ai-chat',
      color: 'green'
    },
    {
      title: 'Volunteering Opportunities',
      description: 'Find and join volunteering activities for both adults and kids in your community.',
      icon: Users,
      link: '/volunteering',
      color: 'purple'
    },
    {
      title: 'Sustainable Marketplace',
      description: 'Connect with collaborators and discover sustainable products for your eco-friendly projects.',
      icon: ShoppingBag,
      link: '/marketplace',
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-anka-pharaohBlue">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title="Powering a Sustainable Future Together"
          subtitle="Renewable Energy Platform"
          description="Anka empowers individuals and communities to adopt sustainable practices and advance renewable energy solutions through education, innovation, and collaboration."
          ctaText="Get Started"
          ctaLink="/awareness"
          secondaryCtaText="Learn More"
          secondaryCtaLink="/about"
          imageSrc="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        />
        
        {/* Features Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-anka-nightBlue to-anka-pharaohBlue">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <div className="subtitle text-anka-gold mb-2 animate-fade-in">Our Platform</div>
              <h2 className="heading-2 mb-4 animate-fade-in">How Anka Helps You Make a Difference</h2>
              <p className="text-foreground/70 animate-fade-in stagger-1">
                Discover our comprehensive suite of tools and resources designed to help you contribute to a sustainable future through renewable energy adoption.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  link={feature.link}
                  color={feature.color}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Impact Stats Section */}
        <section className="py-16 px-6 bg-anka-nightBlue text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.3),transparent_70%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(76,175,80,0.3),transparent_70%)]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="subtitle text-anka-gold mb-2 animate-fade-in">Our Impact</div>
              <h2 className="heading-2 mb-4 animate-fade-in">Together We're Making a Difference</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '10K+', label: 'Users' },
                { value: '500+', label: 'Completed Projects' },
                { value: '2,500+', label: 'Volunteer Hours' },
                { value: '15K+', label: 'CO2 Tons Saved' }
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="glass-dark rounded-2xl p-6 border border-white/10 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white">{stat.value}</div>
                  <div className="text-anka-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-anka-pharaohBlue to-anka-nightBlue">
          <div className="max-w-5xl mx-auto text-center">
            <div className="glass-dark rounded-3xl p-10 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-anka-gold/5 to-anka-turquoise/5 -z-10"></div>
              
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-anka-gold/10 flex items-center justify-center">
                  <Leaf size={32} className="text-anka-gold" />
                </div>
              </div>
              
              <h2 className="heading-2 mb-4 animate-fade-in">Ready to Join the Renewable Energy Movement?</h2>
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto animate-fade-in stagger-1">
                Start your journey towards a sustainable future today. Explore our platform, learn about renewable energy, and connect with like-minded individuals.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in stagger-2">
                <Link
                  to="/awareness"
                  className="px-6 py-3 rounded-full bg-anka-gold hover:bg-anka-gold/90 text-anka-pharaohBlue font-medium transition-colors shadow-sm hover:shadow flex items-center group"
                >
                  Get Started
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/quizzes"
                  className="px-6 py-3 rounded-full bg-anka-navy/50 hover:bg-anka-navy text-foreground font-medium border border-anka-gold/20 transition-colors"
                >
                  Take a Quiz
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
