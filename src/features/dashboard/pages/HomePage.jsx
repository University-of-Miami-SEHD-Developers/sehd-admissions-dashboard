// src/features/dashboard/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DatasetIcon from '@mui/icons-material/Dataset';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
  };

  const cards = [
    {
      title: 'Enrollment Goals',
      description: 'Track progress against program enrollment targets',
      icon: <SchoolIcon sx={{ fontSize: 56, color: '#005030' }} />,
      path: '/dashboard/goals',
      color: '#f5f5f5'
    },
    {
      title: 'Enrollment Trends',
      description: 'View historical enrollment data and trends',
      icon: <SsidChartIcon sx={{ fontSize: 56, color: '#f47321' }} />,
      path: '/dashboard/trends',
      color: '#f5f5f5'
    },
    {
      title: 'Program Analysis',
      description: 'Analyze program performance and distribution',
      icon: <AnalyticsIcon sx={{ fontSize: 56, color: '#005030' }} />,
      path: '/dashboard/analysis',
      color: '#f5f5f5'
    },
    {
      title: 'Admissions Data',
      description: 'Explore detailed admissions data by term',
      icon: <DatasetIcon sx={{ fontSize: 56, color: '#f47321' }} />,
      path: '/dashboard/data',
      color: '#f5f5f5'
    }
  ];

  return (
    <Box sx={{ 
      flexGrow: 1, 
      p: { xs: 2, sm: 4, md: 6 },
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      minHeight: '100vh'
    }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#005030', fontWeight: 'bold' }}>
          SEHD Admissions Dashboard
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto', color: '#4a4a4a' }}>
          Monitor admissions metrics, analyze enrollment trends, and track program performance for the School of Education and Human Development
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ maxWidth: 1200, mx: 'auto' }}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                boxShadow: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                },
                borderRadius: 2,
              }}
            >
              <CardActionArea 
                onClick={() => navigateToPage(card.path)}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'stretch'
                }}
              >
                <CardContent sx={{ 
                  flexGrow: 1, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  textAlign: 'center',
                  p: 4
                }}>
                  <Box sx={{ mb: 3 }}>
                    {card.icon}
                  </Box>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} University of Miami. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;