import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import StatCard from '../../shared/components/StatCard';
import TabPanel, { a11yProps } from '../../shared/components/TabPanel';
import programData from './data/TrendsData';

const TrendsPage = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [bachelorDept, setBachelorDept] = React.useState('ALL');
  const [masterDept, setMasterDept] = React.useState('ALL');
  const [doctoralDept, setDoctoralDept] = React.useState('ALL');

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

  // Configure a fixed card size in pixels for consistency
  const cardStyle = {
    minWidth: 275,
    height: 250, // Set a fixed height
    margin: 1
  };

  // Function to render the grid of cards with fixed sizes
  const renderStatCards = (deptData) => {
    return (
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 3,
        justifyContent: { xs: 'center', md: 'flex-start' } 
      }}>
        {deptData.map((stat, index) => (
          <Box key={index} sx={{ width: 275, height: 250 }}>
            <StatCard
              title={stat.title}
              value={stat.value}
              interval={stat.interval}
              trend={stat.trend}
              data={stat.data}
            />
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Program Enrollment Trends
      </Typography>
      
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
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
                <MenuItem value="KIN">Kinesiology (KIN)</MenuItem>
                <MenuItem value="TAL">Teaching & Learning (TAL)</MenuItem>
                <MenuItem value="EPS">Educational & Psychological Studies (EPS)</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {renderStatCards(programData.bachelor[bachelorDept])}
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
                <MenuItem value="KIN">Kinesiology (KIN)</MenuItem>
                <MenuItem value="TAL">Teaching & Learning (TAL)</MenuItem>
                <MenuItem value="EPS">Educational & Psychological Studies (EPS)</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {renderStatCards(programData.master[masterDept])}
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
                <MenuItem value="KIN">Kinesiology (KIN)</MenuItem>
                <MenuItem value="TAL">Teaching & Learning (TAL)</MenuItem>
                <MenuItem value="EPS">Educational & Psychological Studies (EPS)</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {renderStatCards(programData.doctoral[doctoralDept])}
        </TabPanel>
      </Box>
    </Box>
  );
};

export default TrendsPage;