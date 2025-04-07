import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel, { a11yProps } from '../../shared/components/TabPanel';
import GradientGauge from './components/Gauge';

const GoalsPage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        SEHD Performance Metrics
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          aria-label="degree level tabs"
          centered
        >
          <Tab label="Bachelors" {...a11yProps(0)} />
          <Tab label="Masters" {...a11yProps(1)} />
          <Tab label="Doctoral" {...a11yProps(2)} />
        </Tabs>
      </Box>
      
      <TabPanel value={tabValue} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={82} 
              maxValue={100} 
              title="Community and Applied Psychological Studies, B.S.Ed. " 
              subtitle="Enrollment Target"
              colors={['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0']}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={68} 
              maxValue={100} 
              title="Data Analytics & Intelligence for Social Impact B.S.Ed. (DAISI)" 
              subtitle="Enrollment Target"
              colors={['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0']}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={93} 
              maxValue={100} 
              title="Exercise Physiology, B.S." 
              subtitle="Enrollment Target"
              colors={['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0']}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={45} 
              maxValue={100} 
              title="Sport Administration, B.S.Ed." 
              subtitle="Enrollment Target"
              colors={['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0']}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={45} 
              maxValue={100} 
              title="Elementary Education/Exceptional Student Education, B.S.Ed." 
              subtitle="Enrollment Target"
              colors={['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0']}
            />
          </Grid>
        </Grid>
      </TabPanel>
      
      <TabPanel value={tabValue} index={1}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={75} 
              maxValue={100} 
              title="Counseling, M.S.Ed. " 
              subtitle="Enrollment Target"
              colors={['#36a2eb', '#4bc0c0', '#4caf50', '#8bc34a']}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={62} 
              maxValue={100} 
              title="Higher Education Administration, M.S.Ed." 
              subtitle="Enrollment Target"
              colors={['#36a2eb', '#4bc0c0', '#4caf50', '#8bc34a']}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={88} 
              maxValue={100} 
              title="Applied Physiology, M.S.Ed. " 
              subtitle="Enrollment Target"
              colors={['#36a2eb', '#4bc0c0', '#4caf50', '#8bc34a']}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={52} 
              maxValue={100} 
              title="Athletic Training, M.S.AT." 
              subtitle="Enrollment Target"
              colors={['#36a2eb', '#4bc0c0', '#4caf50', '#8bc34a']}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={52} 
              maxValue={100} 
              title="Sport Administration, M.S.Ed." 
              subtitle="Enrollment Target"
              colors={['#36a2eb', '#4bc0c0', '#4caf50', '#8bc34a']}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={52} 
              maxValue={100} 
              title="Education and Social Change, M.S.Ed." 
              subtitle="Enrollment Target"
              colors={['#36a2eb', '#4bc0c0', '#4caf50', '#8bc34a']}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={52} 
              maxValue={100} 
              title="Special Education, M.S.Ed." 
              subtitle="Enrollment Target"
              colors={['#36a2eb', '#4bc0c0', '#4caf50', '#8bc34a']}
            />
          </Grid>
        </Grid>
      </TabPanel>
      
      <TabPanel value={tabValue} index={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={65} 
              maxValue={100} 
              title="Counseling Psychology, Ph.D. " 
              subtitle="Enrollment Target"
              colors={['#9966ff', '#c9cbff', '#ff9f7f', '#fb5607']}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={58} 
              maxValue={100} 
              title="Community Well-Being, Ph.D. " 
              subtitle="Enrollment Target"
              colors={['#9966ff', '#c9cbff', '#ff9f7f', '#fb5607']}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={95} 
              maxValue={100} 
              title="Executive Ed.D. in Higher Education Leadership " 
              subtitle="Enrollment Target"
              colors={['#9966ff', '#c9cbff', '#ff9f7f', '#fb5607']}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={40} 
              maxValue={100} 
              title="Research, Measurement & Evaluation, Ph.D." 
              subtitle="Enrollment Target"
              colors={['#9966ff', '#c9cbff', '#ff9f7f', '#fb5607']}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={40} 
              maxValue={100} 
              title="Exercise Physiology, Ph.D." 
              subtitle="Enrollment Target"
              colors={['#9966ff', '#c9cbff', '#ff9f7f', '#fb5607']}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <GradientGauge 
              value={40} 
              maxValue={100} 
              title="Teaching and Learning, Ph.D." 
              subtitle="Enrollment Target"
              colors={['#9966ff', '#c9cbff', '#ff9f7f', '#fb5607']}
            />
          </Grid>
        </Grid>
      </TabPanel>
    </Box>
  );
};

export default GoalsPage;