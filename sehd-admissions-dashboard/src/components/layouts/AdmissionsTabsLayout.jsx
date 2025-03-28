import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel, { a11yProps } from './TabPanel';
import AdmissionsDataGrid from '../grid/AdmissionsDataGrid';

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

const AdmissionsTabsLayout = () => {
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
          <Tab label="Spring 2024" {...a11yProps(0)} />
          <Tab label="Summer 2024" {...a11yProps(1)} />
          <Tab label="Fall 2024" {...a11yProps(2)} />
          <Tab label="Spring 2023" {...a11yProps(3)} />
          <Tab label="Summer 2023" {...a11yProps(4)} />
          <Tab label="Fall 2023" {...a11yProps(5)} />
          <Tab label="Spring 2022" {...a11yProps(6)} />
          <Tab label="Summer 2022" {...a11yProps(7)} />
          <Tab label="Fall 2022" {...a11yProps(8)} />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0} style={{ width: '100%' }}>
        <AdmissionsDataGrid rows={spring24Rows} cols={spring24Cols} />
      </TabPanel>
      <TabPanel value={tabValue} index={1} style={{ width: '100%' }}>
        <AdmissionsDataGrid rows={summer24Rows} cols={summer24Cols} />
      </TabPanel>
      <TabPanel value={tabValue} index={2} style={{ width: '100%' }}>
        <AdmissionsDataGrid rows={fall24Rows} cols={fall24Cols} />
      </TabPanel>
      <TabPanel value={tabValue} index={3} style={{ width: '100%' }}>
        <AdmissionsDataGrid rows={spring23Rows} cols={spring23Cols} />
      </TabPanel>
      <TabPanel value={tabValue} index={4} style={{ width: '100%' }}>
        <AdmissionsDataGrid rows={summer23Rows} cols={summer23Cols} />
      </TabPanel>
      <TabPanel value={tabValue} index={5} style={{ width: '100%' }}>
        <AdmissionsDataGrid rows={fall23Rows} cols={fall23Cols} />
      </TabPanel>
      <TabPanel value={tabValue} index={6} style={{ width: '100%' }}>
        <AdmissionsDataGrid rows={spring22Rows} cols={spring22Cols} />
      </TabPanel>
      <TabPanel value={tabValue} index={7} style={{ width: '100%' }}>
        <AdmissionsDataGrid rows={summer22Rows} cols={summer22Cols} />
      </TabPanel>
      <TabPanel value={tabValue} index={8} style={{ width: '100%' }}>
        <AdmissionsDataGrid rows={fall22Rows} cols={fall22Cols} />
      </TabPanel>
    </>
  );
};

export default AdmissionsTabsLayout;