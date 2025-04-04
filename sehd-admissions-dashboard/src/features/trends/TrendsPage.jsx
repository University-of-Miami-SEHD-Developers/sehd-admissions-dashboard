import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import StatCard from './components/StatCard';

// Mock data for the StatCards
const dashboardStats = [
  {
    title: 'Total Applications',
    value: '2,854',
    interval: 'Spring 2024',
    trend: 'up',
    data: [150, 142, 160, 172, 185, 202, 219, 230, 252, 267, 285, 290]
  },
  {
    title: 'Acceptance Rate',
    value: '58.2%',
    interval: 'Spring 2024',
    trend: 'down',
    data: [62, 61, 60, 59.5, 59, 58.8, 58.5, 58.3, 58.2, 58.1, 58, 58.2]
  },
  {
    title: 'Yield Rate',
    value: '72.1%',
    interval: 'Spring 2024',
    trend: 'up',
    data: [65, 65.5, 66, 67, 68, 69.5, 70, 70.5, 71, 71.5, 72, 72.1]
  },
  {
    title: 'Average GPA',
    value: '3.48',
    interval: 'Spring 2024',
    trend: 'neutral',
    data: [3.45, 3.45, 3.46, 3.46, 3.47, 3.47, 3.47, 3.48, 3.48, 3.48, 3.48, 3.48]
  }
];

// Additional summary stats for different programs
const programStats = [
  {
    title: 'Teacher Education',
    value: '1,243',
    interval: 'Total Enrolled',
    trend: 'up',
    data: [1150, 1160, 1175, 1190, 1205, 1215, 1220, 1225, 1230, 1235, 1240, 1243]
  },
  {
    title: 'Educational Leadership',
    value: '862',
    interval: 'Total Enrolled',
    trend: 'neutral',
    data: [860, 858, 859, 860, 861, 862, 862, 861, 860, 861, 862, 862]
  },
  {
    title: 'Counseling Psychology',
    value: '495',
    interval: 'Total Enrolled',
    trend: 'up',
    data: [465, 470, 473, 475, 478, 480, 483, 485, 488, 490, 493, 495]
  },
  {
    title: 'Educational Technology',
    value: '254',
    interval: 'Total Enrolled',
    trend: 'down',
    data: [280, 278, 275, 272, 270, 268, 265, 262, 260, 258, 256, 254]
  }
];

const TrendsPage = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admissions Dashboard
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Key metrics and trends for School of Education & Human Development
      </Typography>
      
      <Divider sx={{ my: 3 }} />
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Admissions Overview
        </Typography>
        <Grid container spacing={3}>
          {dashboardStats.map((stat, index) => (
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
      
      <Divider sx={{ my: 3 }} />
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Program Enrollment
        </Typography>
        <Grid container spacing={3}>
          {programStats.map((stat, index) => (
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
      
    </Box>
  );
};

export default TrendsPage;