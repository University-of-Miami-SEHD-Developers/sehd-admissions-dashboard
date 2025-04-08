import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StatCard from '../../../shared/components/StatCard';
import programStats from '../data/CardData';

const AnalysisCards = ({ programTab }) => {
  // Get the stats for the current program tab
  const currentStats = programStats[programTab] || programStats.Bachelors;

  return (
    <Box sx={{ mb: 4, width: '100%' }}>
      <Typography variant="h6" component="h2" gutterBottom>
        {programTab} Program Statistics
      </Typography>
      
      {/* Using a 2x2 grid layout that uses the full width */}
      <Grid container spacing={3}>
        {currentStats.map((stat, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <StatCard
              title={stat.title}
              value={stat.value}
              interval={stat.interval}
              trend={stat.trend}
              data={stat.data}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AnalysisCards;