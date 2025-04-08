import React, { useRef, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Chart from 'chart.js/auto';
import graphData from '../data/GraphData'; // Import your data here

const LineChartComponent = ({ title = 'Data Trends Over Time' }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const theme = useTheme();

  // Chart configuration
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: theme.palette.text.primary,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.secondary,
        borderColor: theme.palette.divider,
        borderWidth: 1
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: theme.palette.divider,
        },
        ticks: {
          color: theme.palette.text.secondary,
        }
      },
      x: {
        grid: {
          color: theme.palette.divider,
        },
        ticks: {
          color: theme.palette.text.secondary,
          maxRotation: 45,
          minRotation: 45
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  };

  useEffect(() => {
    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: graphData,
        options: options
      });
    }

    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [theme.palette.mode]); // Re-render chart when theme mode changes

  // Add window resize event listener to make chart responsive
  useEffect(() => {
    const handleResize = () => {
      if (chartInstance.current) {
        chartInstance.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        p: { xs: 2, md: 3 },
        bgcolor: theme.palette.background.paper,
        borderRadius: 2,
        boxShadow: 3,
        width: '100%',
        height: { xs: 300, sm: 350, md: 400 },
        mx: 'auto',
        mb: 4
      }}
    >
      <Typography variant="h6" component="h2" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ 
        height: 'calc(100% - 40px)', 
        width: '100%', 
        position: 'relative'
      }}>
        <canvas ref={chartRef} />
      </Box>
    </Box>
  );
};

export default LineChartComponent;