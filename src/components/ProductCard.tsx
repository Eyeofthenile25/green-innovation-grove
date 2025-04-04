
import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  discount?: number;
  tag?: string;
  icon?: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  price, 
  image, 
  description, 
  category,
  rating,
  discount = 0,
  tag = '',
  icon
}) => {
  const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl overflow-hidden h-full flex flex-col"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-anka-ruby/90 text-white text-xs font-bold px-2 py-1 rounded-md">
            {discount}% OFF
          </div>
        )}
        
        {tag && (
          <div className="absolute top-3 right-3 bg-anka-black/80 text-anka-gold text-xs font-medium px-2 py-1 rounded-md border border-anka-gold/30">
            {tag}
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          {icon && <span>{icon}</span>}
        </div>
        
        <div className="flex items-center mb-1">
          <div className="flex items-center text-amber-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(rating) ? "fill-amber-400" : "stroke-amber-400"}
              />
            ))}
          </div>
          <span className="text-xs text-white/70">{rating.toFixed(1)}</span>
        </div>
        
        <div className="text-sm text-white/70 mb-4 line-clamp-2 flex-grow">
          {description}
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <div>
              {discount > 0 ? (
                <div className="flex items-center">
                  <span className="text-lg font-bold text-white">${discountedPrice.toFixed(2)}</span>
                  <span className="ml-2 text-sm text-white/50 line-through">${price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-lg font-bold text-white">${price.toFixed(2)}</span>
              )}
            </div>
            
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-anka-gold text-anka-black hover:bg-anka-gold/90 transition-colors">
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
