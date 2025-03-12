
import React, { createContext, useContext, useState, useEffect } from 'react';

type User = {
  name: string;
  email: string;
  image?: string;
};

type UserContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // Check localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('anka_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string) => {
    // In a real app, this would validate against a backend
    const mockUser = {
      name: email.split('@')[0],
      email: email,
      image: null
    };
    
    setUser(mockUser);
    localStorage.setItem('anka_user', JSON.stringify(mockUser));
  };

  const register = (name: string, email: string, password: string) => {
    // In a real app, this would create a user in a backend
    const mockUser = {
      name: name,
      email: email,
      image: null
    };
    
    setUser(mockUser);
    localStorage.setItem('anka_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('anka_user');
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      register, 
      logout 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
