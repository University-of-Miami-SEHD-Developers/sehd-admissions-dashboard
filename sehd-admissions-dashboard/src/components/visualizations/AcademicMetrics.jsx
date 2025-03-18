// src/components/visualizations/AcademicMetrics.jsx
import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  AreaChart,
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart,
  Bar,
  ReferenceLine
} from 'recharts';

// Mock academic metrics data
const mockAcademicData = {
  gpaTrends: [
    { year: '2015', average: 4.0, median: 3.9 },
    { year: '2016', average: 4.0, median: 3.9 },
    { year: '2017', average: 4.1, median: 4.0 },
    { year: '2018', average: 4.1, median: 4.0 },
    { year: '2019', average: 4.2, median: 4.0 },
    { year: '2020', average: 4.2, median: 4.1 },
    { year: '2021', average: 4.3, median: 4.2 },
    { year: '2022', average: 4.3, median: 4.2 },
    { year: '2023', average: 4.4, median: 4.3 },
    { year: '2024', average: 4.4, median: 4.3 }
  ],
  satTrends: [
    { year: '2015', average: 1300, range25: 1220, range75: 1380 },
    { year: '2016', average: 1310, range25: 1230, range75: 1390 },
    { year: '2017', average: 1320, range25: 1240, range75: 1400 },
    { year: '2018', average: 1330, range25: 1250, range75: 1410 },
    { year: '2019', average: 1340, range25: 1260, range75: 1420 },
    { year: '2020', average: 1350, range25: 1270, range75: 1430 },
    { year: '2021', average: 1360, range25: 1280, range75: 1440 },
    { year: '2022', average: 1370, range25: 1290, range75: 1450 },
    { year: '2023', average: 1380, range25: 1300, range75: 1460 },
    { year: '2024', average: 1390, range25: 1310, range75: 1470 }
  ],
  actTrends: [
    { year: '2015', average: 29, range25: 27, range75: 31 },
    { year: '2016', average: 29, range25: 27, range75: 31 },
    { year: '2017', average: 30, range25: 28, range75: 32 },
    { year: '2018', average: 30, range25: 28, range75: 32 },
    { year: '2019', average: 30, range25: 28, range75: 32 },
    { year: '2020', average: 31, range25: 29, range75: 33 },
    { year: '2021', average: 31, range25: 29, range75: 33 },
    { year: '2022', average: 31, range25: 29, range75: 33 },
    { year: '2023', average: 32, range25: 30, range75: 34 },
    { year: '2024', average: 32, range25: 30, range75: 34 }
  ],
  byMajor: [
    { major: 'Business Administration', avgGPA: 4.2, avgSAT: 1380, avgACT: 31 },
    { major: 'Biology', avgGPA: 4.4, avgSAT: 1410, avgACT: 32 },
    { major: 'Computer Science', avgGPA: 4.3, avgSAT: 1400, avgACT: 32 },
    { major: 'Psychology', avgGPA: 4.2, avgSAT: 1370, avgACT: 31 },
    { major: 'Engineering', avgGPA: 4.3, avgSAT: 1420, avgACT: 33 },
    { major: 'Communications', avgGPA: 4.0, avgSAT: 1350, avgACT: 30 },
    { major: 'Nursing', avgGPA: 4.3, avgSAT: 1390, avgACT: 31 },
    { major: 'Political Science', avgGPA: 4.1, avgSAT: 1380, avgACT: 31 }
  ]
};

const AcademicMetrics = ({ data = mockAcademicData, compact = false }) => {
  const [metricType, setMetricType] = useState('gpa'); // 'gpa', 'sat', 'act', or 'major'
  
  // Function to handle switching between different metrics
  const handleMetricToggle = (type) => {
    setMetricType(type);
  };
  
  // Render GPA trends chart
  const renderGPAChart = () => (
    <ResponsiveContainer width="100%" height={compact ? 200 : 300}>
      <LineChart
        data={data.gpaTrends}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[3.8, 4.5]} />
        <Tooltip formatter={(value) => [`${value}`]} />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="average" 
          name="Average GPA" 
          stroke="#005030" 
          activeDot={{ r: 8 }} 
        />
        <Line 
          type="monotone" 
          dataKey="median" 
          name="Median GPA" 
          stroke="#f47321" 
          activeDot={{ r: 8 }} 
        />
      </LineChart>
    </ResponsiveContainer>
  );
  
  // Render SAT trends chart
  const renderSATChart = () => (
    <ResponsiveContainer width="100%" height={compact ? 200 : 300}>
      <AreaChart
        data={data.satTrends}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[1200, 1500]} />
        <Tooltip formatter={(value) => [`${value}`]} />
        <Legend />
        <Area 
          type="monotone" 
          dataKey="range25" 
          name="25th Percentile" 
          stackId="1"
          stroke="#8884d8" 
          fill="#8884d8" 
          fillOpacity={0.3}
        />
        <Area 
          type="monotone" 
          dataKey="range75" 
          name="75th Percentile" 
          stackId="1"
          stroke="#82ca9d" 
          fill="#82ca9d" 
          fillOpacity={0.3}
        />
        <Line 
          type="monotone" 
          dataKey="average" 
          name="Average SAT" 
          stroke="#f47321" 
          strokeWidth={2}
          dot={{ r: 4 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
  
  // Render ACT trends chart
  const renderACTChart = () => (
    <ResponsiveContainer width="100%" height={compact ? 200 : 300}>
      <AreaChart
        data={data.actTrends}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[25, 36]} />
        <Tooltip formatter={(value) => [`${value}`]} />
        <Legend />
        <Area 
          type="monotone" 
          dataKey="range25" 
          name="25th Percentile" 
          stackId="1"
          stroke="#8884d8" 
          fill="#8884d8" 
          fillOpacity={0.3}
        />
        <Area 
          type="monotone" 
          dataKey="range75" 
          name="75th Percentile" 
          stackId="1"
          stroke="#82ca9d" 
          fill="#82ca9d" 
          fillOpacity={0.3}
        />
        <Line 
          type="monotone" 
          dataKey="average" 
          name="Average ACT" 
          stroke="#f47321" 
          strokeWidth={2}
          dot={{ r: 4 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
  
  // Render metrics by major
  const renderMajorChart = () => {
    // Sort majors by the current metric
    const sortKey = metricType === 'gpa' ? 'avgGPA' : 
                    metricType === 'sat' ? 'avgSAT' : 'avgACT';
    
    const sortedData = [...data.byMajor].sort((a, b) => b[sortKey] - a[sortKey]);
    
    return (
      <ResponsiveContainer width="100%" height={compact ? 200 : 400}>
        <BarChart
          data={sortedData}
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
            domain={
              metricType === 'gpa' ? [3.9, 4.5] : 
              metricType === 'sat' ? [1300, 1450] : [29, 34]
            } 
          />
          <YAxis type="category" dataKey="major" />
          <Tooltip />
          <Legend />
          <Bar 
            dataKey={
              metricType === 'gpa' ? 'avgGPA' : 
              metricType === 'sat' ? 'avgSAT' : 'avgACT'
            } 
            name={
              metricType === 'gpa' ? 'Average GPA' : 
              metricType === 'sat' ? 'Average SAT' : 'Average ACT'
            } 
            fill="#005030" 
            background={{ fill: '#eee' }}
          />
          <ReferenceLine 
            x={
              metricType === 'gpa' ? 
                data.byMajor.reduce((sum, item) => sum + item.avgGPA, 0) / data.byMajor.length :
              metricType === 'sat' ? 
                data.byMajor.reduce((sum, item) => sum + item.avgSAT, 0) / data.byMajor.length :
                data.byMajor.reduce((sum, item) => sum + item.avgACT, 0) / data.byMajor.length
            } 
            stroke="red" 
            strokeDasharray="3 3"
            label={{ 
              value: 'University Average', 
              position: 'insideBottomLeft',
              fill: 'red',
              fontSize: 12
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  
  // Determine which chart to render based on metric type
  const renderMetricChart = () => {
    switch(metricType) {
      case 'sat':
        return renderSATChart();
      case 'act':
        return renderACTChart();
      case 'major':
        return renderMajorChart();
      case 'gpa':
      default:
        return renderGPAChart();
    }
  };
  
  return (
    <div className={`academic-metrics-container ${compact ? 'compact' : ''}`}>
      {!compact && (
        <div className="visualization-controls">
          <button 
            className={`view-toggle-btn ${metricType === 'gpa' ? 'active' : ''}`}
            onClick={() => handleMetricToggle('gpa')}
          >
            GPA Trends
          </button>
          <button 
            className={`view-toggle-btn ${metricType === 'sat' ? 'active' : ''}`}
            onClick={() => handleMetricToggle('sat')}
          >
            SAT Scores
          </button>
          <button 
            className={`view-toggle-btn ${metricType === 'act' ? 'active' : ''}`}
            onClick={() => handleMetricToggle('act')}
          >
            ACT Scores
          </button>
          <button 
            className={`view-toggle-btn ${metricType === 'major' ? 'active' : ''}`}
            onClick={() => handleMetricToggle('major')}
          >
            By Major
          </button>
        </div>
      )}
      
      {renderMetricChart()}
      
      {!compact && (
        <div className="visualization-insights">
          <h3>Key Insights:</h3>
          <ul>
            {metricType === 'gpa' && (
              <>
                <li>Average GPA has increased from {data.gpaTrends[0].average} to {data.gpaTrends[data.gpaTrends.length-1].average} over the past decade</li>
                <li>The gap between average and median GPA has {
                  (data.gpaTrends[data.gpaTrends.length-1].average - data.gpaTrends[data.gpaTrends.length-1].median) >
                  (data.gpaTrends[0].average - data.gpaTrends[0].median) ? 'increased' : 'decreased'
                } over time</li>
              </>
            )}
            {metricType === 'sat' && (
              <>
                <li>The average SAT score has improved by {data.satTrends[data.satTrends.length-1].average - data.satTrends[0].average} points since 2015</li>
                <li>The middle 50% range is currently {data.satTrends[data.satTrends.length-1].range75 - data.satTrends[data.satTrends.length-1].range25} points</li>
              </>
            )}
            {metricType === 'act' && (
              <>
                <li>The average ACT score has risen from {data.actTrends[0].average} to {data.actTrends[data.actTrends.length-1].average} since 2015</li>
                <li>The current middle 50% range is {data.actTrends[data.actTrends.length-1].range25}-{data.actTrends[data.actTrends.length-1].range75}</li>
              </>
            )}
            {metricType === 'major' && (
              <>
                <li>The {
                  metricType === 'gpa' ? 
                    data.byMajor.sort((a, b) => b.avgGPA - a.avgGPA)[0].major : 
                  metricType === 'sat' ? 
                    data.byMajor.sort((a, b) => b.avgSAT - a.avgSAT)[0].major : 
                    data.byMajor.sort((a, b) => b.avgACT - a.avgACT)[0].major
                } major has the highest average {metricType.toUpperCase()} among enrolled students</li>
                <li>Engineering students have the highest average test scores</li>
                <li>Biology students have the highest average GPA at {data.byMajor.find(m => m.major === 'Biology')?.avgGPA}</li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AcademicMetrics;