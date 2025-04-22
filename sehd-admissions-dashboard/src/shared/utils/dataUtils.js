// src/features/analysis/utils/dataUtils.js

// Import JSON data files
import Spring24Data from '../data/Spring24.json';
import Summer24Data from '../data/Summer24.json';
import Fall24Data from '../data/Fall24.json';
import Spring23Data from '../data/Spring23.json';
import Summer23Data from '../data/Summer23.json';
import Fall23Data from '../data/Fall23.json';
import Spring22Data from '../data/Spring22.json';
import Summer22Data from '../data/Summer22.json';
import Fall22Data from '../data/Fall22.json';

// Combined data sets for easier access
export const allData = [
  ...Fall24Data, 
  ...Spring24Data, 
  ...Summer24Data, 
  ...Fall23Data, 
  ...Spring23Data, 
  ...Summer23Data,
  ...Fall22Data,
  ...Spring22Data,
  ...Summer22Data
];

export const academicYears = {
  '2023-24': [...Fall23Data, ...Spring24Data, ...Summer24Data],
  '2022-23': [...Fall22Data, ...Spring23Data, ...Summer23Data],
  '2021-22': [...Fall22Data, ...Spring22Data, ...Summer22Data] // Using Fall22 as a placeholder for missing Fall21
};

export const terms = {
  'Fall24': Fall24Data,
  'Spring24': Spring24Data,
  'Summer24': Summer24Data,
  'Fall23': Fall23Data,
  'Spring23': Spring23Data,
  'Summer23': Summer23Data,
  'Fall22': Fall22Data,
  'Spring22': Spring22Data,
  'Summer22': Summer22Data
};

// Program types mapping
export const programTypes = {
  'Bachelors': "Bachelor's",
  'Masters': "Master's", 
  'Doctoral': "Doctoral"
};

/**
 * Calculate statistics for a specific program type in a given academic year
 * @param {string} programType - The program type (Bachelor's, Master's, Doctoral)
 * @param {string} academicYear - The academic year ('2023-24', '2022-23')
 * @returns {Object} Object with calculated statistics
 */
export const calculateProgramStats = (programType, academicYear = '2023-24') => {
  // Get data for the specified academic year
  const yearData = academicYears[academicYear] || academicYears['2023-24'];
  
  // Filter data for the specific program
  const programData = yearData.filter(item => item.Program === programType);
  
  // Calculate totals
  const applied = programData.reduce((sum, item) => sum + item['Total Applied'], 0);
  const admitted = programData.reduce((sum, item) => sum + item['Total Admitted'], 0);
  const matriculated = programData.reduce((sum, item) => sum + item['Matriculated'], 0);
  
  // Calculate yield rate
  const yieldRate = admitted > 0 ? (matriculated / admitted) * 100 : 0;
  
  return {
    applied,
    admitted, 
    matriculated,
    yieldRate: yieldRate.toFixed(1)
  };
};

/**
 * Calculate trends by comparing statistics from two academic years
 * @param {string} programType - The program type (Bachelor's, Master's, Doctoral)
 * @param {string} currentYear - The current academic year ('2023-24')
 * @param {string} previousYear - The previous academic year ('2022-23')
 * @returns {Object} Object with current stats and trend indicators
 */
export const calculateTrends = (programType, currentYear = '2023-24', previousYear = '2022-23') => {
  const currentStats = calculateProgramStats(programType, currentYear);
  const previousStats = calculateProgramStats(programType, previousYear);
  
  // Calculate percentage changes
  const appliedChange = previousStats.applied > 0 
    ? ((currentStats.applied - previousStats.applied) / previousStats.applied) * 100 
    : 0;
    
  const admittedChange = previousStats.admitted > 0 
    ? ((currentStats.admitted - previousStats.admitted) / previousStats.admitted) * 100 
    : 0;
    
  const matriculatedChange = previousStats.matriculated > 0 
    ? ((currentStats.matriculated - previousStats.matriculated) / previousStats.matriculated) * 100 
    : 0;
    
  const yieldRateChange = previousStats.yieldRate > 0 
    ? parseFloat(currentStats.yieldRate) - parseFloat(previousStats.yieldRate)
    : 0;
  
  return {
    ...currentStats,
    trends: {
      applied: determineTrend(appliedChange),
      admitted: determineTrend(admittedChange),
      matriculated: determineTrend(matriculatedChange),
      yieldRate: determineTrend(yieldRateChange, 0.5) // Use smaller threshold for yield rate
    },
    changes: {
      applied: appliedChange.toFixed(1),
      admitted: admittedChange.toFixed(1),
      matriculated: matriculatedChange.toFixed(1),
      yieldRate: yieldRateChange.toFixed(1)
    }
  };
};

/**
 * Helper function to determine trend direction
 * @param {number} changePercent - The percentage change
 * @param {number} threshold - The threshold for determining a significant change
 * @returns {string} 'up', 'down', or 'neutral'
 */
export const determineTrend = (changePercent, threshold = 2) => {
  if (changePercent >= threshold) return 'up';
  if (changePercent <= -threshold) return 'down';
  return 'neutral';
};

/**
 * Create trend data for visualization
 * @param {number} value - The final value in the trend
 * @returns {Array} Array of 12 values trending toward the final value
 */
export const createTrendData = (value) => {
  // Generate a series of 12 values that trend toward the final value
  const startValue = Math.round(value * 0.85); // Start at 85% of final value
  const step = (value - startValue) / 11;
  
  return Array.from({ length: 12 }, (_, i) => 
    Math.round(startValue + step * i)
  );
};

/**
 * Format data for StatCard component
 * @param {Object} stats - The stats object with trends
 * @param {string} academicYear - The academic year for the interval
 * @returns {Array} Array of formatted stat card data objects
 */
export const formatStatCardData = (stats, academicYear = '2023-24') => {
  return [
    {
      title: 'Applied',
      value: stats.applied.toString(),
      interval: `Academic Year ${academicYear}`,
      trend: stats.trends.applied,
      data: createTrendData(stats.applied)
    },
    {
      title: 'Admitted',
      value: stats.admitted.toString(),
      interval: `Academic Year ${academicYear}`,
      trend: stats.trends.admitted,
      data: createTrendData(stats.admitted)
    },
    {
      title: 'Yield Rate',
      value: `${stats.yieldRate}%`,
      interval: `Academic Year ${academicYear}`,
      trend: stats.trends.yieldRate,
      data: Array(12).fill(parseFloat(stats.yieldRate))
    },
    {
      title: 'Matriculated',
      value: stats.matriculated.toString(),
      interval: `Academic Year ${academicYear}`,
      trend: stats.trends.matriculated,
      data: createTrendData(stats.matriculated)
    }
  ];
};

/**
 * Get department-specific data for a program type
 * @param {string} programType - The program type (Bachelor's, Master's, Doctoral)
 * @param {string} department - The department code (KIN, EPS, TAL)
 * @returns {Object} Object with department-specific statistics
 */
export const getDepartmentStats = (programType, department) => {
  // Get current academic year data
  const currentYearData = academicYears['2023-24'];
  
  // Filter by program and department
  const filteredData = currentYearData.filter(
    item => item.Program === programType && item.Department === department
  );
  
  // Calculate totals
  const applied = filteredData.reduce((sum, item) => sum + item['Total Applied'], 0);
  const admitted = filteredData.reduce((sum, item) => sum + item['Total Admitted'], 0);
  const matriculated = filteredData.reduce((sum, item) => sum + item['Matriculated'], 0);
  
  // Calculate yield rate
  const yieldRate = admitted > 0 ? (matriculated / admitted) * 100 : 0;
  
  return {
    applied,
    admitted,
    matriculated,
    yieldRate: yieldRate.toFixed(1)
  };
};

/**
 * Get distribution data for program types across departments
 * @param {string} programType - The program type (Bachelor's, Master's, Doctoral)
 * @returns {Object} Object with distribution data formatted for charts
 */
export const getProgramDistribution = (programType) => {
  const departments = ['KIN', 'EPS', 'TAL'];
  const stats = departments.map(dept => getDepartmentStats(programType, dept));
  
  // Calculate total applications
  const totalApplied = stats.reduce((sum, stat) => sum + stat.applied, 0);
  
  // Calculate percentages
  const data = departments.map((dept, i) => {
    const percentage = totalApplied > 0 
      ? Math.round((stats[i].applied / totalApplied) * 100) 
      : 0;
    return percentage;
  });
  
  return {
    labels: departments,
    datasets: [
      {
        data,
        backgroundColor: [
          '#00bcd4',
          '#f44336',
          '#ffc107',
        ],
        borderColor: [
          '#0097a7',
          '#d32f2f',
          '#ffa000',
        ],
        borderWidth: 1,
        hoverOffset: 4
      }
    ]
  };
};

export default {
  calculateProgramStats,
  calculateTrends,
  formatStatCardData,
  getDepartmentStats,
  getProgramDistribution,
  programTypes,
  terms,
  academicYears,
  allData
};