// src/components/dashboard/Header.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Header = ({ userName, userRole }) => {
  const { logout } = useContext(AuthContext);
  
  // Get current date for header
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <header className="dashboard-header">
      <div className="current-date">
        {currentDate}
      </div>
      
      <div className="user-profile">
        <div className="user-profile-info">
          <span className="user-name">{userName}</span>
          <span className="user-role">{userRole}</span>
        </div>
        
        <div className="dropdown">
          <button className="dropdown-toggle">
            <img 
              src="/profile-placeholder.jpg" 
              alt="User profile" 
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/40x40";
              }}
            />
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;