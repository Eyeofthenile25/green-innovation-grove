
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Save, ArrowLeft, Upload, Check, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useUser } from '../contexts/UserContext';
import { toast } from '../hooks/use-toast';

const Profile = () => {
  const { user, updateUserProfile } = useUser();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(user?.image || null);
  const [isUploading, setIsUploading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setIsEditing(true);
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      // Create a preview URL for the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setIsUploading(false);
        setIsEditing(true);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update user profile with form data and image
    updateUserProfile({
      name: formData.name,
      email: formData.email,
      image: previewImage || undefined
    });
    
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
    
    setIsEditing(false);
  };
  
  const handleCancel = () => {
    // Reset form data to current user data
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
    });
    setPreviewImage(user?.image || null);
    setIsEditing(false);
  };
  
  if (!user) {
    navigate('/auth');
    return null;
  }
  
  return (
    <div className="min-h-screen bg-anka-pharaohBlue">
      <Navbar />
      
      <main className="pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-dark rounded-2xl border border-anka-gold/20 p-8 shadow-xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <button 
                onClick={() => navigate(-1)}
                className="text-anka-gold hover:text-anka-gold/80 transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft size={20} />
              </button>
              <h1 className="text-2xl font-bold text-center text-white">
                Profile Settings
              </h1>
              <div className="w-5"></div> {/* Empty div for flex spacing */}
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Image Section */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="h-32 w-32 rounded-full bg-anka-gold/20 border-2 border-anka-gold/30 flex items-center justify-center overflow-hidden">
                    {previewImage ? (
                      <img 
                        src={previewImage} 
                        alt={user.name} 
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <User size={48} className="text-anka-gold" />
                    )}
                    {isUploading && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-anka-gold"></div>
                      </div>
                    )}
                  </div>
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-0 right-0 h-9 w-9 bg-anka-gold text-anka-pharaohBlue rounded-full flex items-center justify-center shadow-lg hover:bg-anka-gold/90 transition-colors"
                    aria-label="Upload profile picture"
                  >
                    <Upload size={16} />
                  </button>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="hidden"
                    accept="image/*"
                  />
                </div>
                <p className="text-white/70 text-sm">
                  Upload a profile picture
                </p>
              </div>
              
              {/* Profile Form Section */}
              <div className="flex-1">
                <form onSubmit={handleSave} className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm text-anka-sand/80">
                      Display Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-anka-gold/70" />
                      </div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 bg-anka-nightBlue/50 border border-anka-gold/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-anka-gold/50"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm text-anka-sand/80">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={18} className="text-anka-gold/70" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 bg-anka-nightBlue/50 border border-anka-gold/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-anka-gold/50"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  
                  {isEditing && (
                    <div className="flex space-x-3 justify-end pt-4">
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="flex items-center space-x-1 px-3 py-1.5 bg-anka-nightBlue/50 border border-anka-gold/10 text-white/70 rounded-lg hover:bg-anka-nightBlue/70 transition-colors"
                      >
                        <X size={16} />
                        <span>Cancel</span>
                      </button>
                      <button
                        type="submit"
                        className="flex items-center space-x-1 px-4 py-1.5 bg-anka-gold text-anka-pharaohBlue rounded-lg font-medium hover:bg-anka-gold/90 transition-colors"
                      >
                        <Save size={16} />
                        <span>Save Changes</span>
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
