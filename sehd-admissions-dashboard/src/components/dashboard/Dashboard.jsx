import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DatasetIcon from '@mui/icons-material/Dataset';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import AdmissionsDataGrid from '../grid/AdmissionsDataGrid';

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
      }}
    >
      {pathname === '/data' ? <AdmissionsDataGrid /> : <Typography>Dashboard content for {pathname}</Typography>}
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
