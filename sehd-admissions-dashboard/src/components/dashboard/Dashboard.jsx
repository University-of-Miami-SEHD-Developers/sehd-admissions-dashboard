import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DatasetIcon from '@mui/icons-material/Dataset';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import AdmissionsDataGrid from '../grid/AdmissionsDataGrid';
import DashboardContent from './DashboardContent'; // Import the new DashboardContent component
import { rows as spring24Rows, cols as spring24Cols } from '../../data/Spring24';
import { rows as summer24Rows, cols as summer24Cols } from '../../data/Summer24';
import { rows as fall24Rows, cols as fall24Cols } from '../../data/Fall24';
import { rows as spring23Rows, cols as spring23Cols } from '../../data/Spring23';
import { rows as summer23Rows, cols as summer23Cols } from '../../data/Summer23';
import { rows as fall23Rows, cols as fall23Cols } from '../../data/Fall23';
import { rows as spring22Rows, cols as spring22Cols } from '../../data/Spring22';
import { rows as summer22Rows, cols as summer22Cols } from '../../data/Summer22';
import { rows as fall22Rows, cols as fall22Cols } from '../../data/Fall22';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%'
      }}
    >
      {pathname === '/data' ? (
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
      ) : pathname === '/dashboard' ? (
        // Use the DashboardContent component for the dashboard path
        <DashboardContent />
      ) : (
        <Typography>Other content for {pathname}</Typography>
      )}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const Dashboard = (props) => {
  const { window } = props;
  const router = useDemoRouter('/dashboard');

  return (
    <AppProvider 
      branding={{
        logo: <img src="/UM.png" alt="UM logo" />,
        title: 'SEHD Dashboard',
        homeUrl: '/home',
      }}
      navigation={[
        {
          segment: 'dashboard',
          title: 'Dashboard',
          icon: <DashboardIcon />,
        },
        {
          segment: 'data',
          title: 'Data',
          icon: <DatasetIcon />,
        },
      ]}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
};

export default Dashboard;