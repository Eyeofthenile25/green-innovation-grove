
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Users, Leaf, Wind, Droplet, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CollaboratorCard from '../components/CollaboratorCard';
import ProductCard from '../components/ProductCard';

const Marketplace = () => {
  // Define collaborators data
  const collaborators = [
    {
      name: "EcoTech Solutions",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      description: "Leading provider of solar panel solutions with over 10 years of experience in renewable energy installations across multiple countries.",
      category: "Solar Energy",
      rating: 4.8,
      website: "https://example.com/ecotech",
      featured: true
    },
    {
      name: "WindForce Energy",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Specialized in wind turbine technology and implementation for both residential and commercial applications.",
      category: "Wind Energy",
      rating: 4.5,
      website: "https://example.com/windforce"
    },
    {
      name: "AquaPower Systems",
      image: "https://images.unsplash.com/photo-1558449033-2ffd7e1e3505?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Innovative hydroelectric solutions for sustainable water-based energy generation.",
      category: "Hydroelectric",
      rating: 4.2,
      website: "https://example.com/aquapower"
    }
  ];

  // Define products data
  const products = [
    {
      id: 1,
      name: "Portable Solar Power Station",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Compact 500W solar power station with multiple outlets for camping, emergencies, and outdoor activities.",
      category: "Solar",
      rating: 4.9,
      discount: 15,
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Home Wind Turbine Kit",
      price: 799.99,
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Residential wind turbine kit capable of generating up to 400W of power in optimal wind conditions.",
      category: "Wind",
      rating: 4.3,
      discount: 0,
      tag: "New"
    },
    {
      id: 3,
      name: "Smart Home Energy Monitor",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Real-time energy consumption monitor with smartphone app integration and energy-saving recommendations.",
      category: "Efficiency",
      rating: 4.7,
      discount: 10,
      tag: ""
    },
    {
      id: 4,
      name: "Rainwater Collection System",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1568230571527-c2d6d3593acf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Complete rainwater harvesting system with 100-gallon capacity and filtration for garden use.",
      category: "Water",
      rating: 4.5,
      discount: 0,
      tag: ""
    },
    {
      id: 5,
      name: "Biodegradable Planting Pots (Set of 24)",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Eco-friendly planting pots made from biodegradable materials that break down naturally in soil.",
      category: "Garden",
      rating: 4.8,
      discount: 20,
      tag: "Sale"
    },
    {
      id: 6,
      name: "Solar Garden Lights (Pack of 8)",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1558599140-89c0cc6a8508?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Solar-powered LED pathway lights with dusk-to-dawn sensor and waterproof design.",
      category: "Solar",
      rating: 4.6,
      discount: 0,
      tag: "Popular"
    }
  ];

  const getCategoryIcon = (category) => {
    switch(category.toLowerCase()) {
      case 'solar': return <Zap className="text-amber-500" />;
      case 'wind': return <Wind className="text-blue-500" />;
      case 'water': return <Droplet className="text-cyan-500" />;
      case 'efficiency': return <Zap className="text-green-500" />;
      default: return <Leaf className="text-emerald-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-anka-navy to-anka-black">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text-gold-cream mb-6">
                Sustainable Marketplace
              </h1>
              <p className="text-lg text-anka-sand/90 max-w-2xl mx-auto">
                Connect with collaborators and discover sustainable products
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-1 rounded-full foggy-gold mb-4">
                <ShoppingBag className="w-5 h-5 mr-2 text-anka-gold" />
                <span className="text-anka-gold font-medium">Featured Products</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Sustainable Products</h2>
              <p className="text-anka-sand/90">Discover eco-friendly products for your renewable energy journey</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard 
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                  category={product.category}
                  rating={product.rating}
                  discount={product.discount}
                  tag={product.tag}
                  icon={getCategoryIcon(product.category)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Collaborators Section */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-1 rounded-full foggy-turquoise mb-4">
                <Users className="w-5 h-5 mr-2 text-anka-turquoise" />
                <span className="text-anka-turquoise font-medium">Partners</span>
              </div>
              <h2 className="text-3xl font-bold gradient-text-blue-turquoise mb-4">Our Collaborators</h2>
              <p className="text-anka-sand/90">Partner with industry leaders in renewable energy</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collaborators.map((collaborator, index) => (
                <CollaboratorCard 
                  key={index}
                  name={collaborator.name}
                  image={collaborator.image}
                  category={collaborator.category}
                  description={collaborator.description}
                  rating={collaborator.rating}
                  website={collaborator.website}
                  featured={collaborator.featured}
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

export default Marketplace;
