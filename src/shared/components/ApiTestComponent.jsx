// src/shared/components/ApiTestComponent.jsx
import React, { useState, useEffect } from 'react';
import { apiService } from '../../services/apiService';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Alert,
  CircularProgress,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';

const ApiTestComponent = () => {
  const [testResults, setTestResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    // Check if we have an auth token
    setAuthToken(apiService.getAuthToken());
  }, []);

  const tests = [
    {
      name: 'Connection Test',
      key: 'connection',
      description: 'Test if API server is reachable',
      requiresAuth: false,
      test: () => apiService.testConnection()
    },
    {
      name: 'Login Test',
      key: 'login',
      description: 'Test authentication with test credentials',
      requiresAuth: false,
      test: () => apiService.login('admin@miami.edu', 'admin123')
    },
    {
      name: 'Get Current User',
      key: 'currentUser',
      description: 'Get current authenticated user profile',
      requiresAuth: true,
      test: () => apiService.getCurrentUser()
    },
    {
      name: 'Get Departments',
      key: 'departments',
      description: 'Fetch all departments',
      requiresAuth: true,
      test: () => apiService.getDepartments()
    },
    {
      name: 'Get Terms',
      key: 'terms',
      description: 'Fetch all academic terms',
      requiresAuth: true,
      test: () => apiService.getTerms()
    },
    {
      name: 'Get Programs',
      key: 'programs',
      description: 'Fetch all academic programs',
      requiresAuth: true,
      test: () => apiService.getPrograms()
    },
    {
      name: 'Get All Admission Data',
      key: 'admissionData',
      description: 'Fetch all admission data',
      requiresAuth: true,
      test: () => apiService.getAllAdmissionData()
    },
    {
      name: 'Get Admission Data by Term',
      key: 'admissionByTerm',
      description: 'Fetch admission data for Fall24',
      requiresAuth: true,
      test: () => apiService.getAdmissionDataByTerm('Fall24')
    },
    {
      name: 'Filter Admission Data',
      key: 'filterAdmission',
      description: 'Filter admission data by department',
      requiresAuth: true,
      test: () => apiService.filterAdmissionData({ department: 'KIN' })
    }
  ];

  const runSingleTest = async (test) => {
    if (test.requiresAuth && !authToken && test.key !== 'login') {
      setTestResults(prev => ({
        ...prev,
        [test.key]: {
          success: false,
          error: 'Authentication required. Please run login test first.',
          skipped: true
        }
      }));
      return;
    }

    try {
      setTestResults(prev => ({
        ...prev,
        [test.key]: { loading: true }
      }));

      const result = await test.test();
      
      setTestResults(prev => ({
        ...prev,
        [test.key]: {
          success: true,
          data: result,
          timestamp: new Date().toLocaleTimeString()
        }
      }));

      // If login was successful, update auth token state
      if (test.key === 'login' && result.token) {
        setAuthToken(result.token);
      }

    } catch (error) {
      setTestResults(prev => ({
        ...prev,
        [test.key]: {
          success: false,
          error: error.message,
          timestamp: new Date().toLocaleTimeString()
        }
      }));
    }
  };

  const runAllTests = async () => {
    setLoading(true);
    setTestResults({});
    
    for (const test of tests) {
      await runSingleTest(test);
      // Small delay between tests
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    setLoading(false);
  };

  const renderTestResult = (test) => {
    const result = testResults[test.key];
    
    if (!result) return null;

    const getStatusColor = () => {
      if (result.loading) return 'info';
      if (result.skipped) return 'warning';
      return result.success ? 'success' : 'error';
    };

    const getStatusIcon = () => {
      if (result.loading) return <CircularProgress size={16} />;
      if (result.skipped) return <InfoIcon />;
      return result.success ? <CheckCircleIcon /> : <ErrorIcon />;
    };

    return (
      <Card sx={{ mb: 2 }} key={test.key}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">{test.name}</Typography>
            <Chip 
              icon={getStatusIcon()}
              label={result.loading ? 'Running...' : result.skipped ? 'Skipped' : result.success ? 'Success' : 'Failed'}
              color={getStatusColor()}
              variant="outlined"
            />
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {test.description}
          </Typography>

          {result.timestamp && (
            <Typography variant="caption" color="text.secondary">
              Last run: {result.timestamp}
            </Typography>
          )}

          {result.error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {result.error}
            </Alert>
          )}

          {result.success && result.data && (
            <Accordion sx={{ mt: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body2">View Response Data</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ maxHeight: 300, overflow: 'auto' }}>
                  <pre style={{ fontSize: '12px', whiteSpace: 'pre-wrap' }}>
                    {JSON.stringify(result.data, null, 2)}
                  </pre>
                </Box>
              </AccordionDetails>
            </Accordion>
          )}

          <Button 
            size="small" 
            onClick={() => runSingleTest(test)}
            disabled={result.loading}
            sx={{ mt: 2 }}
          >
            Run Test
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        API Connection Tests
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        <Typography variant="body2">
          This component tests the connection between your React frontend and .NET API backend.
          Make sure your API server is running on the configured port (default: http://localhost:5145).
        </Typography>
      </Alert>

      <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
        <Button 
          variant="contained" 
          onClick={runAllTests}
          disabled={loading}
          size="large"
        >
          {loading ? 'Running All Tests...' : 'Run All Tests'}
        </Button>
        
        <Chip 
          label={`API Base URL: ${apiService.baseURL}`}
          color="primary"
          variant="outlined"
        />
        
        {authToken && (
          <Chip 
            label="Authenticated"
            color="success"
            variant="outlined"
          />
        )}
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Test Results
          </Typography>
          
          {tests.map(test => renderTestResult(test))}
          
          {Object.keys(testResults).length === 0 && !loading && (
            <Alert severity="info">
              Click "Run All Tests" to start testing your API connections.
            </Alert>
          )}
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h6" gutterBottom>
          Quick Debugging Tips
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="API Server Not Running"
              secondary="Make sure your .NET API is running. Start it with 'dotnet run' in the SEHD.API directory."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="CORS Issues"
              secondary="Check that your API CORS policy includes your React app's URL (usually http://localhost:5173)."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Authentication Failures"
              secondary="The default test credentials are admin@miami.edu / admin123. These should be seeded automatically."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Port Conflicts"
              secondary="Default API port is 5145. Check your launchSettings.json if the connection fails."
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ApiTestComponent;