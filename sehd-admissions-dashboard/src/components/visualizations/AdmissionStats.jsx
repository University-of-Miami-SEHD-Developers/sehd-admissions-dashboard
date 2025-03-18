// src/components/visualizations/AdmissionStats.jsx
import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Mock admission data
const mockAdmissionData = {
  byDemographics: {
    gender: [
      { name: 'Female', value: 58 },
      { name: 'Male', value: 42 }
    ],
    ethnicity: [
      { name: 'White', value: 41 },
      { name: 'Hispanic/Latino', value: 27 },
      { name: 'Black', value: 10 },
      { name: 'Asian', value: 15 },
      { name: 'Other', value: 7 }
    ],
    residency: [
      { name: 'Florida', value: 30 },
      { name: 'Out of State', value: 60 },
      { name: 'International', value: 10 }
    ]
  },
  byColleges: [
    { name: 'Arts & Sciences', applicants: 12000, admitted: 4200, enrolled: 1300 },
    { name: 'Business', applicants: 9500, admitted: 2800, enrolled: 900 },
    { name: 'Engineering', applicants: 6500, admitted: 2000, enrolled: 650 },
    { name: 'Communication', applicants: 5200, admitted: 1800, enrolled: 580 },
    { name: 'Nursing', applicants: 4800, admitted: 1300, enrolled: 420 },
    { name: 'Architecture', applicants: 1800, admitted: 650, enrolled: 210 },
    { name: 'Music', applicants: 1200, admitted: 400, enrolled: 140 },
    { name: 'Education', applicants: 1000, admitted: 380, enrolled: 130 }
  ]
};

// Colors for the pie charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#8DD1E1'];

const AdmissionStats = ({ data = mockAdmissionData, compact = false }) => {
  const [demographicView, setDemographicView] = useState('gender');
  
  // Toggle between different demographic views
  const handleDemographicToggle = (view) => {
    setDemographicView(view);
  };
  
  // Calculate admission rates for each college
  const collegeData = data.byColleges.map(college => ({
    ...college,
    admitRate: ((college.admitted / college.applicants) * 100).toFixed(1)
  }));
  
  // Sort colleges by admission rate (low to high)
  const sortedCollegeData = [...collegeData].sort((a, b) => 
    parseFloat(a.admitRate) - parseFloat(b.admitRate)
  );
  
  // Function to render a pie chart
  const renderPieChart = (data) => (
    <ResponsiveContainer width="100%" height={compact ? 180 : 300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={true}
          outerRadius={compact ? 70 : 100}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
          label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
      </PieChart>
    </ResponsiveContainer>
  );
  
  return (
    <div className={`admission-stats-container ${compact ? 'compact' : ''}`}>
      {/* Demographic Distribution Section */}
      <div className="demographic-section">
        <h3>Demographic Distribution</h3>
        
        {!compact && (
          <div className="demographic-controls">
            <button 
              className={`demographic-btn ${demographicView === 'gender' ? 'active' : ''}`}
              onClick={() => handleDemographicToggle('gender')}
            >
              Gender
            </button>
            <button 
              className={`demographic-btn ${demographicView === 'ethnicity' ? 'active' : ''}`}
              onClick={() => handleDemographicToggle('ethnicity')}
            >
              Ethnicity
            </button>
            <button 
              className={`demographic-btn ${demographicView === 'residency' ? 'active' : ''}`}
              onClick={() => handleDemographicToggle('residency')}
            >
              Residency
            </button>
          </div>
        )}
        
        {renderPieChart(data.byDemographics[demographicView])}
      </div>
      
      {/* College Admission Rates Section - Only shown in full view */}
      {!compact && (
        <div className="college-section">
          <h3>Admission Rates by College</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={sortedCollegeData}
              layout="vertical"
              margin={{
                top: 20,
                right: 30,
                left: 150,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                type="number" 
                domain={[0, 100]} 
                label={{ value: 'Admission Rate (%)', position: 'insideBottom', offset: -5 }}
              />
              <YAxis type="category" dataKey="name" />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
              <Bar dataKey="admitRate" name="Admission Rate" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
      
      {/* In compact mode, show only a summary */}
      {compact && (
        <div className="compact-summary">
          <p>Overall acceptance rate: <strong>{
            ((data.byColleges.reduce((sum, college) => sum + college.admitted, 0) / 
             data.byColleges.reduce((sum, college) => sum + college.applicants, 0)) * 100).toFixed(1)
          }%</strong></p>
        </div>
      )}
    </div>
  );
};

export default AdmissionStats;