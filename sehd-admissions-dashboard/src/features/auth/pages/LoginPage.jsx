// src/pages/LoginPage.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  
  // If user is already authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <div className="login-page">
      <Login />
    </div>
  );
};

export default LoginPage;