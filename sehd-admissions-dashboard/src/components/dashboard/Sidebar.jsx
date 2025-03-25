// src/components/dashboard/Sidebar.jsx
import React from 'react';

const Sidebar = ({ activeView, setActiveView }) => {
  // Menu items for the sidebar
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'enrollment', label: 'Enrollment Trends', icon: '📈' },
    { id: 'admissions', label: 'Admission Statistics', icon: '📋' },
    { id: 'geography', label: 'Geographic Distribution', icon: '🌎' },
    { id: 'academics', label: 'Academic Metrics', icon: '🎓' }
  ];
  
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/sebastian-ibis.jpg" alt="University of Miami" 
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/120x50?text=UMiami";
          }}
        />
      </div>
      
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li 
            key={item.id}
            className={`sidebar-menu-item ${activeView === item.id ? 'active' : ''}`}
            onClick={() => setActiveView(item.id)}
          >
            <span className="menu-icon">{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      
      <div className="sidebar-footer">
        <p className="version-info">Version 1.0.0</p>
      </div>
    </div>
  );
};

export default Sidebar;