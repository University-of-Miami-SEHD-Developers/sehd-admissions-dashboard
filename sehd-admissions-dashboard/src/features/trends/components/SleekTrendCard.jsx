import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

// Styled components
const StyledCard = styled(Card)(({ theme, trend }) => ({
  position: 'relative',
  height: '100%',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: 
      trend === 'up' 
        ? theme.palette.success.main 
        : trend === 'down' 
          ? theme.palette.error.main 
          : theme.palette.grey[400]
  }
}));

const CardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(2),
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  fontWeight: 500,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(0.5),
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  height: '42px', // approximately 2 lines
}));

const ValueWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1),
}));

const ValueDisplay = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  lineHeight: 1.2,
  color: theme.palette.text.primary,
}));

const IntervalLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  color: theme.palette.text.secondary,
  fontWeight: 400,
}));

const TrendWrapper = styled(Box)(({ theme, trend }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 
    trend === 'up' 
      ? theme.palette.success.light 
      : trend === 'down' 
        ? theme.palette.error.light 
        : theme.palette.grey[200],
  color: 
    trend === 'up' 
      ? theme.palette.success.dark 
      : trend === 'down' 
        ? theme.palette.error.dark 
        : theme.palette.grey[700],
  width: 'fit-content',
}));

const ChartContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginTop: theme.spacing(2),
  height: '60px',
}));

/**
 * SleekTrendCard - A sleek, modern card that displays trends with spark line visualization
 * 
 * @param {Object} props
 * @param {string} props.title - The card title 
 * @param {string|number} props.value - The main value to display
 * @param {string} props.interval - The time interval or context for the value
 * @param {string} props.trend - The trend direction: 'up', 'down', or 'neutral'
 * @param {Array} props.data - Array of data points for the sparkline chart
 * @param {number} props.change - Optional percentage change value
 */
const SleekTrendCard = ({ title, value, interval, trend, data, change }) => {
  const theme = useTheme();

  // Trend icon and gradient color based on trend direction
  const getTrendIcon = () => {
    switch(trend) {
      case 'up':
        return <TrendingUpIcon fontSize="small" sx={{ mr: 0.5 }} />;
      case 'down':
        return <TrendingDownIcon fontSize="small" sx={{ mr: 0.5 }} />;
      default:
        return <TrendingFlatIcon fontSize="small" sx={{ mr: 0.5 }} />;
    }
  };

  // Format the change value with a plus sign for positive values
  const formattedChange = change 
    ? `${change > 0 ? '+' : ''}${change}%` 
    : trend === 'up' 
      ? '+25%' 
      : trend === 'down' 
        ? '-20%' 
        : '0%';

  // Chart color based on trend
  const chartColor = 
    trend === 'up' 
      ? theme.palette.success.main 
      : trend === 'down' 
        ? theme.palette.error.main 
        : theme.palette.grey[500];

  // Make sure data is an array with at least two values for the chart
  const chartData = Array.isArray(data) && data.length >= 2 
    ? data 
    : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <StyledCard trend={trend}>
      <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardHeader>
          <CardTitle variant="subtitle2">
            {title}
          </CardTitle>
        </CardHeader>
        
        <ValueWrapper>
          <ValueDisplay variant="h4">
            {value}
          </ValueDisplay>
          
          <TrendWrapper trend={trend}>
            {getTrendIcon()}
            <Typography variant="caption" fontWeight="bold">
              {formattedChange}
            </Typography>
          </TrendWrapper>
        </ValueWrapper>
        
        <IntervalLabel>
          {interval}
        </IntervalLabel>
        
        <ChartContainer>
          <SparkLineChart
            data={chartData}
            height={60}
            colors={[chartColor]}
            showTooltip
            showHighlight
            curve="natural"
            area
            sx={{
              // Apply gradient fill to the area under the line
              '& .MuiAreaElement-root': {
                fill: `url(#${trend}-gradient)`,
                opacity: 0.2
              },
              '& .MuiLineElement-root': {
                strokeWidth: 2
              }
            }}
          >
            {/* Define gradient for chart area */}
            <defs>
              <linearGradient id={`${trend}-gradient`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={chartColor} stopOpacity={0.7} />
                <stop offset="100%" stopColor={chartColor} stopOpacity={0.1} />
              </linearGradient>
            </defs>
          </SparkLineChart>
        </ChartContainer>
      </CardContent>
    </StyledCard>
  );
};

export default SleekTrendCard;