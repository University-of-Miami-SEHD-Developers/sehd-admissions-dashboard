import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GradientGauge from '../visualizations/Gauge';

const GaugeLayout = () => {
  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        SEHD Performance Metrics
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <GradientGauge 
            value={82} 
            maxValue={100} 
            title="Admission Rate" 
            subtitle="Current academic year"
            colors={['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0']}
          />
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <GradientGauge 
            value={64} 
            maxValue={100} 
            title="Enrollment Target" 
            subtitle="Fall semester progress"
            colors={['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0']}
          />
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <GradientGauge 
            value={91} 
            maxValue={100} 
            title="Student Retention" 
            subtitle="Year-over-year"
            colors={['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0']}
          />
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <GradientGauge 
            value={45} 
            maxValue={100} 
            title="Budget Utilization" 
            subtitle="Q2 2025"
            colors={['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0']}
          />
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <GradientGauge 
            value={45} 
            maxValue={100} 
            title="Budget Utilization" 
            subtitle="Q2 2025"
            colors={['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0']}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <GradientGauge 
            value={45} 
            maxValue={100} 
            title="Budget Utilization" 
            subtitle="Q2 2025"
            colors={['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0']}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <GradientGauge 
            value={45} 
            maxValue={100} 
            title="Budget Utilization" 
            subtitle="Q2 2025"
            colors={['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0']}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <GradientGauge 
            value={45} 
            maxValue={100} 
            title="Budget Utilization" 
            subtitle="Q2 2025"
            colors={['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0']}
          />
        </Grid>
      </Grid>
      
    </Box>
  );
};

export default GaugeLayout;