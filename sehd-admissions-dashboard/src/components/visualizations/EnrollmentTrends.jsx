// src/components/visualizations/EnrollmentTrends.jsx
import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

// Mock enrollment data
const mockEnrollmentData = [
  { year: '2015', applicants: 28000, admitted: 9800, enrolled: 3200 },
  { year: '2016', applicants: 30500, admitted: 10200, enrolled: 3350 },
  { year: '2017', applicants: 33000, admitted: 11000, enrolled: 3600 },
  { year: '2018', applicants: 34200, admitted: 11500, enrolled: 3700 },
  { year: '2019', applicants: 34800, admitted: 11700, enrolled: 3750 },
  { year: '2020', applicants: 33500, admitted: 12000, enrolled: 3650 },
  { year: '2021', applicants: 36500, admitted: 12500, enrolled: 3900 },
  { year: '2022', applicants: 42000, admitted: 13200, enrolled: 4100 },
  { year: '2023', applicants: 44500, admitted: 13800, enrolled: 4250 },
  { year: '2024', applicants: 48000, admitted: 14500, enrolled: 4380 },
];

const EnrollmentTrends = ({ data = mockEnrollmentData, compact = false }) => {
  const [dataView, setDataView] = useState('absolute'); // or 'percentage'
  
  // Process data based on view type
  const processedData = data.map(yearData => {
    if (dataView === 'percentage') {
      // Calculate percentages
      const admitRate = (yearData.admitted / yearData.applicants) * 100;
      const yieldRate = (yearData.enrolled / yearData.admitted) * 100;
      
      return {
        ...yearData,
        admitRate: Number(admitRate.toFixed(1)),
        yieldRate: Number(yieldRate.toFixed(1))
      };
    }
    
    return yearData;
  });
  
  // Toggle between absolute numbers and percentage view
  const handleViewToggle = () => {
    setDataView(prev => prev === 'absolute' ? 'percentage' : 'absolute');
  };
  
  return (
    <div className={`enrollment-trends-container ${compact ? 'compact' : ''}`}>
      {!compact && (
        <div className="visualization-controls">
          <button 
            className={`view-toggle-btn ${dataView === 'absolute' ? 'active' : ''}`}
            onClick={handleViewToggle}
          >
            Absolute Numbers
          </button>
          <button 
            className={`view-toggle-btn ${dataView === 'percentage' ? 'active' : ''}`}
            onClick={handleViewToggle}
          >
            Percentage Rates
          </button>
        </div>
      )}
      
      <ResponsiveContainer width="100%" height={compact ? 200 : 400}>
        <LineChart
          data={processedData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis 
            domain={dataView === 'percentage' ? [0, 100] : ['auto', 'auto']}
            label={{ 
              value: dataView === 'percentage' ? 'Percentage (%)' : 'Number of Students',
              angle: -90,
              position: 'insideLeft'
            }}
          />
          <Tooltip />
          <Legend />
          
          {dataView === 'absolute' ? (
            <>
              <Line 
                type="monotone" 
                dataKey="applicants" 
                name="Applicants"
                stroke="#8884d8" 
                activeDot={{ r: 8 }} 
              />
              <Line 
                type="monotone" 
                dataKey="admitted" 
                name="Admitted"
                stroke="#82ca9d" 
                activeDot={{ r: 8 }} 
              />
              <Line 
                type="monotone" 
                dataKey="enrolled" 
                name="Enrolled"
                stroke="#ffc658" 
                activeDot={{ r: 8 }} 
              />
            </>
          ) : (
            <>
              <Line 
                type="monotone" 
                dataKey="admitRate" 
                name="Admission Rate"
                stroke="#82ca9d" 
                activeDot={{ r: 8 }} 
              />
              <Line 
                type="monotone" 
                dataKey="yieldRate" 
                name="Yield Rate"
                stroke="#ffc658" 
                activeDot={{ r: 8 }} 
              />
            </>
          )}
        </LineChart>
      </ResponsiveContainer>
      
      {!compact && (
        <div className="visualization-insights">
          <h3>Key Insights:</h3>
          <ul>
            <li>Application volume has increased by {Math.round((data[data.length - 1].applicants / data[0].applicants - 1) * 100)}% since 2015</li>
            <li>The admission rate is currently {((data[data.length - 1].admitted / data[data.length - 1].applicants) * 100).toFixed(1)}%</li>
            <li>Yield rate (enrolled/admitted) is {((data[data.length - 1].enrolled / data[data.length - 1].admitted) * 100).toFixed(1)}%</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default EnrollmentTrends;