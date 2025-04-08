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
  colorSchemes: { 
    light: {
      palette: {
        primary: {
          main: '#005030', // Miami green for light mode
        },
        secondary: {
          main: '#f47321', // Miami orange for light mode
        },
        brandTitle: '#005030', // Title color in light mode (green)
        themeToggle: '#005030', // Theme toggle color in light mode (green)
      },
    }, 
    dark: {
      palette: {
        primary: {
          main: '#f47321', // Miami orange for dark mode
        },
        secondary: {
          main: '#005030', // Miami green for dark mode
        },
        brandTitle: '#f47321', // Title color in dark mode (orange)
        themeToggle: '#f47321', // Theme toggle color in dark mode (orange)
      },
    }
  },
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
  // Use a React hook to detect the current color mode
  const [mode, setMode] = React.useState('light');

  // Effect to detect dark mode changes
  React.useEffect(() => {
    const handleColorSchemeChange = () => {
      const isDarkMode = document.documentElement.getAttribute('data-toolpad-color-scheme') === 'dark';
      setMode(isDarkMode ? 'dark' : 'light');
    };

    // Initial check
    handleColorSchemeChange();

    // Create an observer to watch for attribute changes on the document element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-toolpad-color-scheme') {
          handleColorSchemeChange();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <ReactRouterAppProvider
      theme={Theme}
      branding={{
        logo: <img src={"/UM.png"} alt="UM logo" />,
        title: 'SEHD Datahub',
        homeUrl: '/dashboard',
        // Custom styles for the title with dynamic color based on mode
        titleStyle: { 
          color: mode === 'dark' ? '#f47321' : '#005030', // Orange in dark mode, Green in light mode
          fontWeight: 'bold' 
        },
        // Theme toggle button props with dynamic color based on mode
        themeToggleProps: {
          sx: { 
            color: mode === 'dark' ? '#f47321' : '#005030', // Orange in dark mode, Green in light mode
            '&:hover': {
              bgcolor: mode === 'dark' 
                ? 'rgba(244, 115, 33, 0.08)' // Light orange hover in dark mode
                : 'rgba(0, 80, 48, 0.08)'    // Light green hover in light mode
            }
          }
        }
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
            {
              segment: 'data',
              title: 'Data',
              icon: <DatasetIcon />,
            },
          ],
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