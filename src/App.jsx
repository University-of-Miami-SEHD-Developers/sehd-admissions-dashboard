// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthProvider from './features/auth/context/AuthContext';
import ProtectedRoute from './features/auth/components/ProtectedRoute';
import Login from './features/auth/components/Login';
import Dashboard from './features/dashboard/pages/Dashboard';
import ApiTestComponent from './shared/components/ApiTestComponent';
import './styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          
          {/* API Test route - accessible without authentication for testing */}
          <Route path="/api-test" element={<ApiTestComponent />} />
          
          {/* Protected routes - Dashboard and its nested routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Route>
          
          {/* Redirect to login by default */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;