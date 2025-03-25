// src/pages/DashboardPage.jsx
import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import { AuthContext } from '../context/AuthContext';

const DashboardPage = () => {
  const { isAuthenticated, currentUser } = useContext(AuthContext);
  
  useEffect(() => {
    // Set page title when dashboard loads
    document.title = 'UMiami Admissions Dashboard';
    
    // You could load initial data here if needed
  }, []);
  
  // If user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <div className="dashboard-page">
      <Dashboard/>
    </div>
  );
};

export default DashboardPage;