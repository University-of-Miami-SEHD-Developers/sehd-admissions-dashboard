import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DatasetIcon from '@mui/icons-material/Dataset';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import SchoolIcon from '@mui/icons-material/School';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import TrendsPage from '../../trends/TrendsPage';
import AdmissionsDataPage from '../../admissions/AdmissionsDataPage';
import GoalsPage from '../../goals/GoalsPage';
import AnalysisPage from '../../analysis/AnalysisPage';
import HomePage from './HomePage';

const Theme = createTheme({
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

const Dashboard = () => {
  return (
    <ReactRouterAppProvider
      theme={Theme}
      branding={{
        logo: <img src="/src/assets/UM.png" alt="UM logo" />,
        title: 'SEHD Dashboard',
        homeUrl: '/dashboard'
      }}
      navigation={[
        {
          kind: 'header',
          title: 'SEHD Admissions',
        },
        {
          segment: 'dashboard',
          title: 'Dashboard',
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
    >
      <DashboardLayout>
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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/goals" element={<GoalsPage />} />
            <Route path="/trends" element={<TrendsPage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/data" element={<AdmissionsDataPage />} />
            <Route path="*" element={<Typography>Page not found</Typography>} />
          </Routes>
        </Box>
      </DashboardLayout>
    </ReactRouterAppProvider>
  );
};

export default Dashboard;