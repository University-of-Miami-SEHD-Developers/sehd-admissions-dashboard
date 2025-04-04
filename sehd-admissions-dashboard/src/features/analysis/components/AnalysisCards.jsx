import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import StatCard from '../../../shared/components/StatCard';

// Program-specific statistics
const programStats = {
  TAL: [
    {
      title: 'Applied',
      value: '186',
      interval: 'Academic Year 2023-24',
      trend: 'up',
      data: [150, 155, 160, 165, 170, 172, 175, 178, 180, 183, 185, 186]
    },
    {
      title: 'Admitted',
      value: '142',
      interval: 'Academic Year 2023-24',
      trend: 'up',
      data: [120, 122, 125, 128, 130, 133, 135, 137, 138, 140, 141, 142]
    },
    {
      title: 'Yield Rate',
      value: '68.3%',
      interval: 'Academic Year 2023-24',
      trend: 'neutral',
      data: [68, 68.1, 68.2, 68.2, 68.3, 68.3, 68.3, 68.3, 68.3, 68.3, 68.3, 68.3]
    },
    {
      title: 'Net Deposited',
      value: '97',
      interval: 'Academic Year 2023-24',
      trend: 'up',
      data: [85, 87, 89, 90, 92, 93, 94, 95, 96, 96, 97, 97]
    }
  ],
  KIN: [
    {
      title: 'Applied',
      value: '321',
      interval: 'Academic Year 2023-24',
      trend: 'up',
      data: [280, 285, 290, 295, 300, 305, 308, 312, 315, 318, 320, 321]
    },
    {
      title: 'Admitted',
      value: '254',
      interval: 'Academic Year 2023-24',
      trend: 'up',
      data: [220, 225, 230, 235, 238, 240, 243, 245, 248, 250, 252, 254]
    },
    {
      title: 'Yield Rate',
      value: '76.4%',
      interval: 'Academic Year 2023-24',
      trend: 'up',
      data: [72, 72.5, 73, 73.5, 74, 74.5, 75, 75.3, 75.6, 76, 76.2, 76.4]
    },
    {
      title: 'Net Deposited',
      value: '194',
      interval: 'Academic Year 2023-24',
      trend: 'up',
      data: [170, 172, 175, 178, 180, 182, 185, 187, 190, 191, 193, 194]
    }
  ],
  EPS: [
    {
      title: 'Applied',
      value: '231',
      interval: 'Academic Year 2023-24',
      trend: 'down',
      data: [250, 248, 245, 243, 240, 238, 236, 235, 234, 233, 232, 231]
    },
    {
      title: 'Admitted',
      value: '175',
      interval: 'Academic Year 2023-24',
      trend: 'down',
      data: [190, 188, 185, 183, 180, 178, 177, 176, 175, 175, 175, 175]
    },
    {
      title: 'Yield Rate',
      value: '72.1%',
      interval: 'Academic Year 2023-24',
      trend: 'neutral',
      data: [72, 72, 72, 72.1, 72.1, 72.1, 72.1, 72.1, 72.1, 72.1, 72.1, 72.1]
    },
    {
      title: 'Net Deposited',
      value: '126',
      interval: 'Academic Year 2023-24',
      trend: 'down',
      data: [135, 134, 133, 132, 131, 130, 129, 128, 127, 127, 126, 126]
    }
  ]
};

const AnalysisCards = ({ programTab }) => {
  // Get the stats for the current program tab
  const currentStats = programStats[programTab] || programStats.TAL;

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