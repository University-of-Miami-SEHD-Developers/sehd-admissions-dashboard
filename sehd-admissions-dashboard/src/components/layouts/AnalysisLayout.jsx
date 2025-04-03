import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel, { a11yProps } from './TabPanel';
import AdmissionsDataGrid from '../grid/AdmissionsDataGrid';
import LineChartComponent from '../visualizations/LineGraph';
import DoughnutChart from '../visualizations/DoughnutChart';

// Import the data
import { rows as spring24Rows, cols as spring24Cols } from '../../data/Spring24';
import { rows as summer24Rows, cols as summer24Cols } from '../../data/Summer24';
import { rows as fall24Rows, cols as fall24Cols } from '../../data/Fall24';
import { rows as spring23Rows, cols as spring23Cols } from '../../data/Spring23';
import { rows as summer23Rows, cols as summer23Cols } from '../../data/Summer23';
import { rows as fall23Rows, cols as fall23Cols } from '../../data/Fall23';
import { rows as spring22Rows, cols as spring22Cols } from '../../data/Spring22';
import { rows as summer22Rows, cols as summer22Cols } from '../../data/Summer22';
import { rows as fall22Rows, cols as fall22Cols } from '../../data/Fall22';

const AnalysisLayout = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // TAL Program distribution data
  const talProgramData = {
    labels: ['Elementary Ed', 'Secondary Ed', 'Special Ed', 'Early Childhood', 'TESOL'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          '#3f51b5',
          '#2196f3',
          '#03a9f4',
          '#00bcd4',
          '#4caf50',
        ],
        borderColor: [
          '#303f9f',
          '#1976d2',
          '#0288d1',
          '#0097a7',
          '#388e3c',
        ],
        borderWidth: 1,
        hoverOffset: 4
      }
    ]
  };

  // KIN Program distribution data
  const kinProgramData = {
    labels: ['Physical Ed', 'Exercise Science', 'Sports Management', 'Health Science', 'Recreation'],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          '#f44336',
          '#ff9800',
          '#ffeb3b',
          '#9c27b0',
          '#607d8b',
        ],
        borderColor: [
          '#d32f2f',
          '#f57c00',
          '#fbc02d',
          '#7b1fa2',
          '#455a64',
        ],
        borderWidth: 1,
        hoverOffset: 4
      }
    ]
  };

  // EPS Program distribution data
  const epsProgramData = {
    labels: ['Educational Psychology', 'Research Methods', 'School Counseling', 'Leadership', 'Policy Studies'],
    datasets: [
      {
        data: [30, 20, 25, 15, 10],
        backgroundColor: [
          '#009688',
          '#4caf50',
          '#8bc34a',
          '#cddc39',
          '#ffc107',
        ],
        borderColor: [
          '#00796b',
          '#388e3c',
          '#689f38',
          '#afb42b',
          '#ffa000',
        ],
        borderWidth: 1,
        hoverOffset: 4
      }
    ]
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
          <Tab label="TAL" {...a11yProps(0)} />
          <Tab label="KIN" {...a11yProps(1)} />
          <Tab label="EPS" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0} style={{ width: '100%' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <LineChartComponent title="TAL Performance" />
          </Grid>
          <Grid item xs={12} md={4}>
            <DoughnutChart 
              title="TAL Program Distribution" 
              data={talProgramData}
              height={300}
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={tabValue} index={1} style={{ width: '100%' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <LineChartComponent title="KIN Performance" />
          </Grid>
          <Grid item xs={12} md={4}>
            <DoughnutChart 
              title="KIN Program Distribution" 
              data={kinProgramData}
              height={300}
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={tabValue} index={2} style={{ width: '100%' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <LineChartComponent title="EPS Performance" />
          </Grid>
          <Grid item xs={12} md={4}>
            <DoughnutChart 
              title="EPS Program Distribution" 
              data={epsProgramData}
              height={300}
            />
          </Grid>
        </Grid>
      </TabPanel>
    </>
  );
};

export default AnalysisLayout;