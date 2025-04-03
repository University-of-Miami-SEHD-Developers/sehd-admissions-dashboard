// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthProvider from './features/auth/context/AuthContext'; //src\features\auth\context\AuthContext.jsx
import ProtectedRoute from './features/auth/components/ProtectedRoute';
import Login from './features/auth/components/Login';
import Dashboard from './features/dashboard/pages/Dashboard';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Route>
          
          {/* Redirect to login by default */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;