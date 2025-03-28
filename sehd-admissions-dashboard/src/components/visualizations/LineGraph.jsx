import React, { useRef, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Chart from 'chart.js/auto';

const LineChartComponent = ({ title = 'Data Trends Over Time' }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const theme = useTheme();

  // Sample data - replace with your actual data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      }
    ]
  };

  // Chart configuration
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: theme.palette.text.primary
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
        data: data,
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

  return (
    <Box
      sx={{
        p: 3,
        bgcolor: theme.palette.background.paper,
        borderRadius: 2,
        boxShadow: 3,
        width: '100%',
        maxWidth: 800,
        height: 400,
        mx: 'auto',
        mb: 4
      }}
    >
      <Typography variant="h6" component="h2" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ height: 'calc(100% - 40px)', position: 'relative' }}>
        <canvas ref={chartRef} />
      </Box>
    </Box>
  );
};

export default LineChartComponent;

// Usage example:
// import LineChartComponent from './LineChartComponent';
// 
// function Dashboard() {
//   return (
//     <Container>
//       <LineChartComponent title="Monthly Sales Performance" />
//     </Container>
//   );
// }