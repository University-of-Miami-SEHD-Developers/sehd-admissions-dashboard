// src/services/auth.js

// Mock user database for demonstration purposes
// In a real application, this would be on your backend server
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
  
  // Simulate API delay for a more realistic experience
  const simulateAPIDelay = () => {
    const delay = Math.floor(Math.random() * (1000 - 300 + 1) + 300); // 300-1000ms
    return new Promise(resolve => setTimeout(resolve, delay));
  };
  
  /**
   * Login function that authenticates a user with email and password
   * 
   * @param {string} email - User's email address
   * @param {string} password - User's password
   * @returns {Promise} - Promise resolving to user object or throwing an error
   */
  export const login = async (email, password) => {
    // Simulate API delay
    await simulateAPIDelay();
    
    // Find user in mock database
    const user = MOCK_USERS.find(
      user => user.email === email && user.password === password
    );
    
    if (!user) {
      throw new Error('Invalid email or password');
    }
    
    // Remove password before returning user object
    const { password: _, ...safeUserData } = user;
    
    // Store user in localStorage for persistence
    localStorage.setItem('umiami_user', JSON.stringify(safeUserData));
    
    return safeUserData;
  };
  
  /**
   * Logout function that clears user session
   * 
   * @returns {Promise} - Promise resolving when logout is complete
   */
  export const logout = async () => {
    // Simulate API delay
    await simulateAPIDelay();
    
    // Clear user from localStorage
    localStorage.removeItem('umiami_user');
    
    return true;
  };
  
  /**
   * Get the current user from localStorage if they exist
   * 
   * @returns {Object|null} - User object or null if no user is logged in
   */
  export const getCurrentUser = () => {
    const storedUser = localStorage.getItem('umiami_user');
    if (storedUser) {
      try {
        return JSON.parse(storedUser);
      } catch (error) {
        console.error('Failed to parse stored user data', error);
        localStorage.removeItem('umiami_user');
      }
    }
    return null;
  };
  
  /**
   * Check if a user is authenticated
   * 
   * @returns {boolean} - True if user is authenticated, false otherwise
   */
  export const isAuthenticated = () => {
    return !!getCurrentUser();
  };