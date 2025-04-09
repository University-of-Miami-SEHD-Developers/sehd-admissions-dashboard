import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TabPanel, { a11yProps } from '../../shared/components/TabPanel';
import GradientGauge from './components/Gauge';
import goalsData from './data/GoalsData';

const GoalsPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [bachelorDept, setBachelorDept] = useState('ALL');
  const [masterDept, setMasterDept] = useState('ALL');
  const [doctoralDept, setDoctoralDept] = useState('ALL');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleBachelorDeptChange = (event) => {
    setBachelorDept(event.target.value);
  };

  const handleMasterDeptChange = (event) => {
    setMasterDept(event.target.value);
  };

  const handleDoctoralDeptChange = (event) => {
    setDoctoralDept(event.target.value);
  };

  // Calculate percentage value for gauge (value/maxValue * 100)
  const calculatePercentage = (value, maxValue) => {
    return Math.round((parseInt(value) / parseInt(maxValue)) * 100);
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
          <Tab label="Bachelor's" {...a11yProps(0)} />
          <Tab label="Master's" {...a11yProps(1)} />
          <Tab label="Doctoral" {...a11yProps(2)} />
        </Tabs>
      </Box>
      
      <TabPanel value={tabValue} index={0}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="bachelor-department-label">Department</InputLabel>
            <Select
              labelId="bachelor-department-label"
              id="bachelor-department-select"
              value={bachelorDept}
              label="Department"
              onChange={handleBachelorDeptChange}
            >
              <MenuItem value="ALL">All Departments</MenuItem>
              <MenuItem value="EPS">Educational & Psychological Studies (EPS)</MenuItem>
              <MenuItem value="TAL">Teaching & Learning (TAL)</MenuItem>
              <MenuItem value="KIN">Kinesiology (KIN)</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <Grid container spacing={3}>
          {goalsData.bachelor[bachelorDept].map((program, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <GradientGauge 
                value={program.value} 
                maxValue={program.maxValue} 
                title={program.title} 
                subtitle="2025 Enrollment Target"
                colors={['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0']}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      
      <TabPanel value={tabValue} index={1}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="master-department-label">Department</InputLabel>
            <Select
              labelId="master-department-label"
              id="master-department-select"
              value={masterDept}
              label="Department"
              onChange={handleMasterDeptChange}
            >
              <MenuItem value="ALL">All Departments</MenuItem>
              <MenuItem value="EPS">Educational & Psychological Studies (EPS)</MenuItem>
              <MenuItem value="TAL">Teaching & Learning (TAL)</MenuItem>
              <MenuItem value="KIN">Kinesiology (KIN)</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <Grid container spacing={3}>
          {goalsData.master[masterDept].map((program, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <GradientGauge 
                value={(program.value)} 
                maxValue={program.maxValue} 
                title={program.title} 
                subtitle="2025 Enrollment Target"
                colors={['#36a2eb', '#4bc0c0', '#4caf50', '#8bc34a']}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      
      <TabPanel value={tabValue} index={2}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="doctoral-department-label">Department</InputLabel>
            <Select
              labelId="doctoral-department-label"
              id="doctoral-department-select"
              value={doctoralDept}
              label="Department"
              onChange={handleDoctoralDeptChange}
            >
              <MenuItem value="ALL">All Departments</MenuItem>
              <MenuItem value="EPS">Educational & Psychological Studies (EPS)</MenuItem>
              <MenuItem value="TAL">Teaching & Learning (TAL)</MenuItem>
              <MenuItem value="KIN">Kinesiology (KIN)</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <Grid container spacing={3}>
          {goalsData.doctoral[doctoralDept].map((program, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <GradientGauge 
                value={program.value} 
                maxValue={program.maxValue} 
                title={program.title} 
                subtitle="2025 Enrollment Target"
                colors={['#9966ff', '#c9cbff', '#ff9f7f', '#fb5607']}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Box>
  );
};

export default GoalsPage;