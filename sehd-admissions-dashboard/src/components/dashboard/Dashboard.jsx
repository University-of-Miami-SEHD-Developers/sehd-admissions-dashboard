// src/components/dashboard/Dashboard.jsx
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Header from './Header';
import Sidebar from './Sidebar';
import EnrollmentTrends from '../visualizations/EnrollmentTrends';
import AdmissionStats from '../visualizations/AdmissionStats';
import GeoDistribution from '../visualizations/GeoDistribution';
import AcademicMetrics from '../visualizations/AcademicMetrics';

// Mock data - in real application, this would come from an API
import { 
  fetchEnrollmentData,
  fetchAdmissionData,
  fetchGeoDistribution,
  fetchAcademicMetrics
} from '../../services/api';

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [activeView, setActiveView] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    enrollmentData: [],
    admissionData: {},
    geoDistribution: [],
    academicMetrics: {}
  });

  useEffect(() => {
    const loadDashboardData = async () => {
      setIsLoading(true);
      try {
        // In a real application, these would be actual API calls
        const enrollmentData = await fetchEnrollmentData();
        const admissionData = await fetchAdmissionData();
        const geoDistribution = await fetchGeoDistribution();
        const academicMetrics = await fetchAcademicMetrics();

        setDashboardData({
          enrollmentData,
          admissionData,
          geoDistribution,
          academicMetrics
        });
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  // Function to render the active view component
  const renderActiveView = () => {
    if (isLoading) {
      return <div className="loading-spinner">Loading dashboard data...</div>;
    }

    switch (activeView) {
      case 'enrollment':
        return <EnrollmentTrends data={dashboardData.enrollmentData} />;
      case 'admissions':
        return <AdmissionStats data={dashboardData.admissionData} />;
      case 'geography':
        return <GeoDistribution data={dashboardData.geoDistribution} />;
      case 'academics':
        return <AcademicMetrics data={dashboardData.academicMetrics} />;
      case 'overview':
      default:
        // Overview shows a summary of all visualizations
        return (
          <div className="dashboard-overview">
            <div className="dashboard-row">
              <div className="dashboard-card">
                <h3>Enrollment Trends</h3>
                <EnrollmentTrends data={dashboardData.enrollmentData} compact={true} />
              </div>
              <div className="dashboard-card">
                <h3>Admission Statistics</h3>
                <AdmissionStats data={dashboardData.admissionData} compact={true} />
              </div>
            </div>
            <div className="dashboard-row">
              <div className="dashboard-card">
                <h3>Geographic Distribution</h3>
                <GeoDistribution data={dashboardData.geoDistribution} compact={true} />
              </div>
              <div className="dashboard-card">
                <h3>Academic Metrics</h3>
                <AcademicMetrics data={dashboardData.academicMetrics} compact={true} />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar 
        activeView={activeView}
        setActiveView={setActiveView}
      />
      <div className="dashboard-content">
        <Header 
          userName={currentUser?.name || 'User'} 
          userRole={currentUser?.role || 'viewer'}
        />
        <div className="dashboard-main">
          <h2 className="dashboard-title">
            {activeView === 'overview' 
              ? 'University of Miami Admissions Overview' 
              : `${activeView.charAt(0).toUpperCase() + activeView.slice(1)} Analysis`}
          </h2>
          {renderActiveView()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;