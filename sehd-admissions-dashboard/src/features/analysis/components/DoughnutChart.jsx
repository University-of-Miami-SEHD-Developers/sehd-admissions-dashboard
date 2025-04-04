import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ 
  title, 
  data, 
  height = 300, 
  width = '100%',
  options = {},
  legendPosition = 'top',
  cutout = '70%'
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Clean up previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    
    // Default options for the doughnut chart
    const defaultOptions = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: cutout,
      plugins: {
        legend: {
          position: legendPosition,
          labels: {
            usePointStyle: true,
            padding: 20,
            font: {
              size: 12
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.formattedValue;
              const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
              const percentage = Math.round((context.raw / total) * 100);
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
      }
    };

    // Create new chart
    chartInstance.current = new ChartJS(ctx, {
      type: 'doughnut',
      data: data,
      options: { ...defaultOptions, ...options }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, options, legendPosition, cutout]);

  return (
    <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {title && (
          <Typography variant="h6" gutterBottom component="div" sx={{ mb: 2 }}>
            {title}
          </Typography>
        )}
        <Box sx={{ position: 'relative', height, width }}>
          <canvas ref={chartRef} />
        </Box>
      </CardContent>
    </Card>
  );
};

DoughnutChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.shape({
    labels: PropTypes.array.isRequired,
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        data: PropTypes.array.isRequired,
        backgroundColor: PropTypes.array,
        borderColor: PropTypes.array,
        borderWidth: PropTypes.number,
        hoverBackgroundColor: PropTypes.array,
        hoverBorderColor: PropTypes.array,
      })
    ).isRequired,
  }).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  options: PropTypes.object,
  legendPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  cutout: PropTypes.string
};

export default DoughnutChart;