import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import StatCard from '../../../shared/components/StatCard';

// Import utility functions and data
import { 
  programTypes, 
  calculateTrends, 
  formatStatCardData 
} from '../../../shared/utils/dataUtils';

/**
 * AnalysisCards component that displays program statistics using StatCard components
 * 
 * @param {Object} props
 * @param {string} props.programTab - The selected program tab (Bachelors, Masters, Doctoral)
 * @param {string} props.academicYear - The academic year to display data for (optional)
 * @param {string} props.compareYear - The academic year to compare against (optional)
 */
const AnalysisCards = ({ 
  programTab, 
  academicYear = '2023-24', 
  compareYear = '2022-23' 
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [programStats, setProgramStats] = useState(null);
  const [trendsData, setTrendsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Get the program type from our mapping
        const programType = programTypes[programTab] || "Bachelor's";
        
        // Calculate program statistics with trends compared to previous year
        const stats = calculateTrends(programType, academicYear, compareYear);
        
        // Format data for StatCard component
        const formattedStats = formatStatCardData(stats, academicYear);
        
        setProgramStats(formattedStats);
        setTrendsData(stats.changes);
        setLoading(false);
      } catch (err) {
        console.error("Error processing data:", err);
        setError("Failed to load program statistics. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, [programTab, academicYear, compareYear]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ width: '100%', mb: 2 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  // Map stat title to change key
  const getChangeKey = (title) => {
    const mapping = {
      'Applied': 'applied',
      'Admitted': 'admitted',
      'Yield Rate': 'yieldRate',
      'Net Deposited': 'netDeposited'
    };
    return mapping[title] || title.toLowerCase();
  };

  return (
    <Box sx={{ mb: 4, width: '100%' }}>
      <Typography variant="h6" component="h2" gutterBottom>
        {programTab} Program Statistics
      </Typography>
      
      <Grid container spacing={3}>
        {programStats && programStats.map((stat, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <StatCard
              title={stat.title}
              value={stat.value}
              interval={stat.interval}
              trend={stat.trend}
              data={stat.data}
              change={trendsData && parseFloat(trendsData[getChangeKey(stat.title)])}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AnalysisCards;