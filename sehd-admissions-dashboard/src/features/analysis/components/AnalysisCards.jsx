import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import StatCard from '../../../shared/components/StatCard';
import programStats from '../data/CardData'; // Import your data here



const AnalysisCards = ({ programTab }) => {
  // Get the stats for the current program tab
  const currentStats = programStats[programTab] || programStats.Bachelors;

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        {programTab} Program Statistics
      </Typography>
      <Grid container spacing={3}>
        {currentStats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
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