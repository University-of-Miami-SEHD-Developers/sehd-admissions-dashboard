// src/features/auth/context/AuthContext.jsx (Updated to use API)
import React, { createContext, useState, useEffect } from 'react';
import { apiService } from '../../../services/apiService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = apiService.getAuthToken();
      if (token) {
        try {
          const user = await apiService.getCurrentUser();
          setCurrentUser(user);
        } catch (error) {
          console.error('Failed to get current user:', error);
          apiService.removeAuthToken();
        }
      }
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await apiService.login(email, password);
      setCurrentUser(response.user);
      return response.user;
    } catch (error) {
      throw new Error(error.message || 'Login failed');
    }
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    apiService.logout();
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