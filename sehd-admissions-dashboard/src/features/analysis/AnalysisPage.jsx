import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel, { a11yProps } from '../../shared/components/TabPanel';
import LineChartComponent from './components/LineGraph';
import DonutChart from './components/DonutChart';
import AnalysisCards from './components/AnalysisCards';
import Divider from '@mui/material/Divider';

// Import GraphData with three different datasets
import graphData from './data/GraphData';

// Import utility functions for getting distribution data
import { programTypes, getProgramDistribution } from '../../shared/utils/dataUtils';

const AnalysisPage = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [donutData, setDonutData] = React.useState({
    bachelors: null,
    masters: null,
    doctoral: null
  });

  React.useEffect(() => {
    // Generate real distribution data from JSON files
    setDonutData({
      bachelors: getProgramDistribution(programTypes['Bachelors']),
      masters: getProgramDistribution(programTypes['Masters']),
      doctoral: getProgramDistribution(programTypes['Doctoral'])
    });
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          aria-label="admissions data tabs"
          centered
        >
          <Tab label="Bachelor's" {...a11yProps(0)} />
          <Tab label="Master's" {...a11yProps(1)} />
          <Tab label="Doctoral" {...a11yProps(2)} />
        </Tabs>
      </Box>
      
      <TabPanel value={tabValue} index={0} style={{ width: '100%' }}>
        {/* Line Chart with bachelorsData */}
        <Box sx={{ width: '100%', mb: 3 }}>
          <LineChartComponent 
            title="Bachelor's Program Enrollments" 
            data={graphData.bachelorsData} 
          />
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        {/* Analysis Cards and Donut Chart below */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <AnalysisCards programTab="Bachelors" />
          </Grid>
          <Grid item xs={12} md={4}>
            <DonutChart 
              title="Distribution of Bachelor's Programs by Department" 
              data={donutData.bachelors}
              height={300}
            />
          </Grid>
        </Grid>
      </TabPanel>
      
      <TabPanel value={tabValue} index={1} style={{ width: '100%' }}>
        {/* Line Chart with mastersData */}
        <Box sx={{ width: '100%', mb: 3 }}>
          <LineChartComponent 
            title="Master's Program Enrollments" 
            data={graphData.mastersData} 
          />
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        {/* Analysis Cards and Donut Chart below */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <AnalysisCards programTab="Masters" />
          </Grid>
          <Grid item xs={12} md={4}>
            <DonutChart 
              title="Distribution of Master's Programs by Department" 
              data={donutData.masters}
              height={300}
            />
          </Grid>
        </Grid>
      </TabPanel>
      
      <TabPanel value={tabValue} index={2} style={{ width: '100%' }}>
        {/* Line Chart with doctoralData */}
        <Box sx={{ width: '100%', mb: 3 }}>
          <LineChartComponent 
            title="Doctoral Program Enrollments" 
            data={graphData.doctoralData} 
          />
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        {/* Analysis Cards and Donut Chart below */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <AnalysisCards programTab="Doctoral" />
          </Grid>
          <Grid item xs={12} md={4}>
            <DonutChart 
              title="Distribution of Doctoral Programs by Department" 
              data={donutData.doctoral}
              height={300}
            />
          </Grid>
        </Grid>
      </TabPanel>
    </>
  );
};

export default AnalysisPage;