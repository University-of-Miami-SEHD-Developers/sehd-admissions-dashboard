// src/components/visualizations/GeoDistribution.jsx
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

// Mock geographic distribution data
const mockGeoData = [
  { state: 'FL', count: 1300, percentage: 30 },
  { state: 'NY', count: 560, percentage: 12.8 },
  { state: 'NJ', count: 340, percentage: 7.8 },
  { state: 'CA', count: 310, percentage: 7.1 },
  { state: 'TX', count: 280, percentage: 6.4 },
  { state: 'MA', count: 210, percentage: 4.8 },
  { state: 'IL', count: 190, percentage: 4.3 },
  { state: 'PA', count: 170, percentage: 3.9 },
  { state: 'GA', count: 130, percentage: 3.0 },
  { state: 'CT', count: 110, percentage: 2.5 },
  { state: 'Other US', count: 340, percentage: 7.8 },
  { state: 'International', count: 440, percentage: 10.0 }
];

// Colors for the charts
const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', 
  '#82CA9D', '#FFC658', '#8DD1E1', '#A4DE6C', '#D0ED57',
  '#FF6B6B', '#747A86'
];

const GeoDistribution = ({ data = mockGeoData, compact = false }) => {
  const [viewType, setViewType] = useState('bar'); // 'bar' or 'pie'
  
  // Group "Other States" for compact view
  const processData = () => {
    if (compact) {
      // Show only top 5 states plus "Other States" and "International"
      const topStates = [...data]
        .filter(item => item.state !== 'International' && item.state !== 'Other US')
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
      
      // Calculate sum for remaining states
      const otherStatesCount = data
        .filter(item => item.state !== 'International' && item.state !== 'Other US')
        .filter(item => !topStates.find(top => top.state === item.state))
        .reduce((sum, item) => sum + item.count, 0);
      
      const otherStatesPercentage = data
        .filter(item => item.state !== 'International' && item.state !== 'Other US')
        .filter(item => !topStates.find(top => top.state === item.state))
        .reduce((sum, item) => sum + item.percentage, 0);
      
      // Add other states and international
      return [
        ...topStates,
        { 
          state: 'Other States', 
          count: otherStatesCount + (data.find(item => item.state === 'Other US')?.count || 0),
          percentage: otherStatesPercentage + (data.find(item => item.state === 'Other US')?.percentage || 0)
        },
        data.find(item => item.state === 'International') || { state: 'International', count: 0, percentage: 0 }
      ];
    }
    
    // For full view, sort by count descending
    return [...data].sort((a, b) => b.count - a.count);
  };
  
  const chartData = processData();
  
  // Toggle between bar and pie charts
  const handleViewToggle = (type) => {
    setViewType(type);
  };
  
  return (
    <div className={`geo-distribution-container ${compact ? 'compact' : ''}`}>
      {!compact && (
        <div className="visualization-controls">
          <button 
            className={`view-toggle-btn ${viewType === 'bar' ? 'active' : ''}`}
            onClick={() => handleViewToggle('bar')}
          >
            Bar Chart
          </button>
          <button 
            className={`view-toggle-btn ${viewType === 'pie' ? 'active' : ''}`}
            onClick={() => handleViewToggle('pie')}
          >
            Pie Chart
          </button>
        </div>
      )}
      
      {(viewType === 'bar' || compact) ? (
        <ResponsiveContainer width="100%" height={compact ? 200 : 400}>
          <BarChart
            data={chartData}
            layout={compact ? "vertical" : "horizontal"}
            margin={{
              top: 20,
              right: 30,
              left: compact ? 100 : 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            {compact ? (
              <>
                <XAxis type="number" />
                <YAxis type="category" dataKey="state" />
              </>
            ) : (
              <>
                <XAxis dataKey="state" />
                <YAxis />
              </>
            )}
            <Tooltip formatter={(value, name) => [value, name === 'count' ? 'Students' : 'Percentage']} />
            <Legend />
            <Bar 
              dataKey="count" 
              name="Students" 
              fill="#005030" // Miami green
              background={{ fill: '#eee' }}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={true}
              outerRadius={150}
              fill="#8884d8"
              dataKey="count"
              nameKey="state"
              label={({state, percent}) => `${state}: ${(percent * 100).toFixed(1)}%`}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value} students`]} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
      
      {!compact && (
        <div className="visualization-insights">
          <h3>Key Insights:</h3>
          <ul>
            <li>Florida residents make up {data.find(d => d.state === 'FL')?.percentage || 0}% of the student body</li>
            <li>The top 5 states account for {chartData.slice(0, 5).reduce((sum, item) => sum + item.percentage, 0).toFixed(1)}% of domestic students</li>
            <li>International students represent {data.find(d => d.state === 'International')?.percentage || 0}% of enrolled students</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default GeoDistribution;