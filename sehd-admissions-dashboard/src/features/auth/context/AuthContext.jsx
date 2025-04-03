// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// Create the authentication context
export const AuthContext = createContext();

// Mock user database for demonstration purposes
// In a real application, you would use a backend service
const MOCK_USERS = [
  { 
    email: 'admin@miami.edu', 
    password: 'admin123', 
    name: 'Admin User',
    role: 'admin' 
  },
  { 
    email: 'staff@miami.edu', 
    password: 'staff123', 
    name: 'Staff Member',
    role: 'staff' 
  }
];

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('umiami_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setCurrentUser(parsedUser);
      } catch (error) {
        console.error('Failed to parse stored user data', error);
        localStorage.removeItem('umiami_user');
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Find user in mock database
    const user = MOCK_USERS.find(
      user => user.email === email && user.password === password
    );
    
    if (!user) {
      throw new Error('Invalid email or password');
    }
    
    // Remove password before storing user object
    const { password: _, ...safeUserData } = user;
    
    // Store user in state and localStorage
    setCurrentUser(safeUserData);
    localStorage.setItem('umiami_user', JSON.stringify(safeUserData));
    
    return safeUserData;
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('umiami_user');
  };

  // Value object to be provided to consumers
  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;