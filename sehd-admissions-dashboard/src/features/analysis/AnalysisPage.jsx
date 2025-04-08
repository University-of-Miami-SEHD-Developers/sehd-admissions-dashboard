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
import { bachelorsData, mastersData, doctoralData } from './data/DonutData';
// Import the updated GraphData with three different datasets
import graphData from './data/GraphData';

const AnalysisPage = () => {
  const [tabValue, setTabValue] = React.useState(0);

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
              title="Distribution of Bachelor's Programs" 
              data={bachelorsData}
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
              title="Distribution of Master's Programs" 
              data={mastersData}
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
              title="Distribution of Doctoral Programs" 
              data={doctoralData}
              height={300}
            />
          </Grid>
        </Grid>
      </TabPanel>
    </>
  );
};

export default AnalysisPage;