import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DatasetIcon from '@mui/icons-material/Dataset';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import SchoolIcon from '@mui/icons-material/School';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import StatCardLayout from '../../visualizations/layouts/StatCardLayout';
import AdmissionsTabsLayout from '../../admissions/layouts/AdmissionsTabsLayout';
import GaugeLayout from '../../visualizations/layouts/GaugeLayout';
import AnalysisLayout from '../../visualizations/layouts/AnalysisLayout';

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
        <AdmissionsTabsLayout />
      ) : pathname === '/dashboards/trends' ? (
        <StatCardLayout />
      ) : pathname === '/dashboards/analysis' ? (
        <AnalysisLayout/>
      ) : pathname === '/dashboards/goals' ? (
        <GaugeLayout />
      ): (
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
        logo: <img src="/src/assets/UM.png" alt="UM logo" />,
        title: 'SEHD Dashboard',
        homeUrl: '/home',
      }}
      navigation={[
        {
          kind: 'header',
          title: 'SEHD Admissions',
        },
        {
          segment: 'dashboards',
          title: 'Dashboards',
          icon: <DashboardIcon />,
          children: [
            {
              segment: 'goals',
              title: 'Goals',
              icon: <SchoolIcon />
            },
            {
              segment: 'trends',
              title: 'Trends',
              icon: <SsidChartIcon />
            },
            {
              segment: 'analysis',
              title: 'Analysis',
              icon: <AnalyticsIcon/>
            },
          ],
        },
        {
          segment: 'data',
          title: 'Data',
          icon: <DatasetIcon />,
        },
        {
          kind: 'divider'
        },
        {
          kind: 'header',
          title: 'Research & Grants'
        },
        {
          kind: 'divider'
        },
        {
          kind: 'header',
          title: 'Marketing Campaign'
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