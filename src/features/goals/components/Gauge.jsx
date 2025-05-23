import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const GradientGauge = ({ 
  value = 75, 
  maxValue = 100, 
  minValue = 0, 
  title = "Progress", 
  subtitle = "", 
  height = 200,
  width = "100%",
  colors = ['#ff6384', '#36a2eb', '#4bc0c0', '#ffcd56'],
  thickness = 0.15,
  showLegend = false,
  cardHeight = 375 // Added fixed card height prop with default
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  
  const calculatePercentage = () => {
    return ((value - minValue) / (maxValue - minValue)) * 100;
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      // Create gradient
      const gradientSegments = colors.length - 1;
      const angleStep = Math.PI / gradientSegments;
      
      // Create the gradient
      const createGradient = () => {
        const gradient = ctx.createLinearGradient(0, 0, 200, 0);
        colors.forEach((color, index) => {
          gradient.addColorStop(index / (colors.length - 1), color);
        });
        return gradient;
      };
      
      // Destroy previous chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      
      // Calculate remaining percentage
      const percentage = calculatePercentage();
      const remainingPercentage = 100 - percentage;
      
      // Create new chart
      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              data: [percentage, remainingPercentage],
              backgroundColor: [
                createGradient(),
                '#f5f5f5' // Light gray for remaining
              ],
              borderWidth: 0,
              circumference: 180,
              rotation: 270
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: `${85 - thickness * 100}%`,
          plugins: {
            tooltip: {
              enabled: false
            },
            legend: {
              display: showLegend
            }
          },
          layout: {
            padding: {
              bottom: 30
            }
          }
        }
      });
      
      // Clean up
      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }
  }, [value, maxValue, minValue, colors, thickness, showLegend]);

  return (
    <Card 
      variant='outlined'
      elevation={1} 
      sx={{ 
        width, 
        height: cardHeight, 
        overflow: 'hidden', 
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardContent sx={{ 
        height: '100%', 
        display: 'flex',
        flexDirection: 'column',
        padding: 2
      }}>
        {/* Fixed height title area with ellipsis for overflow */}
        <Box sx={{ height: 80, mb: 1 }}>
          <Typography 
            variant="h7" 
            component="div" 
            sx={{ 
              mb: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ 
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
        
        {/* Chart area takes remaining space */}
        <Box sx={{ 
          position: 'relative', 
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <canvas ref={chartRef} />
          <Box 
            sx={{ 
              position: 'absolute', 
              bottom: '15%', 
              left: '50%', 
              transform: 'translateX(-50%)',
              textAlign: 'center'
            }}
          >
            <Typography variant="h4" component="div">
              {value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              out of {maxValue}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

GradientGauge.propTypes = {
  value: PropTypes.number,
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.string),
  thickness: PropTypes.number,
  showLegend: PropTypes.bool,
  cardHeight: PropTypes.number
};

export default GradientGauge;