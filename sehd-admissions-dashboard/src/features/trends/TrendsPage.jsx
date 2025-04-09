import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// Import the new SleekTrendCard instead of StatCard
import SleekTrendCard from './components/SleekTrendCard';
import TabPanel, { a11yProps } from '../../shared/components/TabPanel';

// Import data utilities
import dataUtils from '../../shared/utils/dataExtractUtils';

// Styled components for better UI
const PageContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  background: theme.palette.background.default
}));

const PageHeader = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main
}));

const TabContainer = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(4)
}));

const FilterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3)
}));

const CardsContainer = styled(Grid)(({ theme }) => ({
  margin: 0
}));

const CardGridItem = styled(Grid)(({ theme }) => ({
  height: '300px',
  padding: theme.spacing(2)
}));

const TrendsPage = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [bachelorDept, setBachelorDept] = React.useState('ALL');
  const [masterDept, setMasterDept] = React.useState('ALL');
  const [doctoralDept, setDoctoralDept] = React.useState('ALL');
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [trendsData, setTrendsData] = React.useState({
    bachelors: {
      ALL: [],
      KIN: [],
      EPS: [],
      TAL: []
    },
    masters: {
      ALL: [],
      KIN: [],
      EPS: [],
      TAL: []
    },
    doctoral: {
      ALL: [],
      KIN: [],
      EPS: [],
      TAL: []
    }
  });

  React.useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Get list of departments
        const departments = dataUtils.getDepartments();
        
        // Create data structure
        const data = {
          bachelors: {
            ALL: []
          },
          masters: {
            ALL: []
          },
          doctoral: {
            ALL: []
          }
        };
        
        // Initialize department keys
        departments.forEach(dept => {
          data.bachelors[dept] = [];
          data.masters[dept] = [];
          data.doctoral[dept] = [];
        });

        // Get academic plans with detailed data
        const academicPlans = dataUtils.getAcademicPlanData('2023-24');
        
        // Get enrollment trends data to calculate changes
        const prev = dataUtils.getAcademicPlanData('2022-23');
        const planMap = new Map();
        
        // Create a map of previous year data for comparison
        prev.forEach(plan => {
          planMap.set(plan.code, plan);
        });
        
        // Process each academic plan
        academicPlans.forEach(plan => {
          if (!plan.program || !plan.department) return;
          
          const programKey = plan.program === "Bachelor's" ? 'bachelors' : 
                            plan.program === "Master's" ? 'masters' : 
                            plan.program === "Doctoral" ? 'doctoral' : null;
          
          if (!programKey) return;
          
          // Calculate trend and change
          const prevPlan = planMap.get(plan.code);
          let changePercent = 0;
          
          if (prevPlan && prevPlan.enrolled > 0) {
            changePercent = ((plan.enrolled - prevPlan.enrolled) / prevPlan.enrolled) * 100;
          }
          
          // Determine trend direction based on change
          const trendDirection = dataUtils.determineTrend(changePercent);
          
          // Use the utility to create trend data
          const trendData = dataUtils.createTrendData(plan.enrolled);
          
          const cardData = {
            title: plan.description,
            value: String(plan.enrolled),
            interval: 'Total Enrolled',
            trend: trendDirection,
            data: trendData,
            change: changePercent.toFixed(1),
            department: plan.department
          };
          
          // Add to ALL collection
          data[programKey].ALL.push(cardData);
          
          // Add to department-specific collection
          if (data[programKey][plan.department]) {
            data[programKey][plan.department].push(cardData);
          }
        });
        
        setTrendsData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error loading enrollment trends data:", err);
        setError("Failed to load enrollment trends data. Please try again later.");
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleBachelorDeptChange = (event) => {
    setBachelorDept(event.target.value);
  };

  const handleMasterDeptChange = (event) => {
    setMasterDept(event.target.value);
  };

  const handleDoctoralDeptChange = (event) => {
    setDoctoralDept(event.target.value);
  };

  // Render cards based on selected program and department
  const renderTrendCards = (deptData) => {
    if (loading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4, width: '100%' }}>
          <CircularProgress />
        </Box>
      );
    }

    if (error) {
      return (
        <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
          {error}
        </Alert>
      );
    }

    if (!deptData || deptData.length === 0) {
      return (
        <Alert severity="info" sx={{ width: '100%', mb: 2 }}>
          No data available for the selected department.
        </Alert>
      );
    }

    return (
      <CardsContainer container spacing={0}>
        {deptData.map((stat, index) => (
          <CardGridItem item xs={12} sm={6} md={4} lg={3} key={index}>
            <SleekTrendCard
              title={stat.title}
              value={stat.value}
              interval={stat.interval}
              trend={stat.trend}
              data={stat.data}
              change={parseFloat(stat.change)}
            />
          </CardGridItem>
        ))}
      </CardsContainer>
    );
  };

  // Get the appropriate tab data based on the selected tab
  const getTabData = () => {
    switch(tabValue) {
      case 0:
        return {
          title: "Bachelor's Programs",
          department: bachelorDept,
          handleChange: handleBachelorDeptChange,
          data: trendsData.bachelors[bachelorDept]
        };
      case 1:
        return {
          title: "Master's Programs",
          department: masterDept,
          handleChange: handleMasterDeptChange,
          data: trendsData.masters[masterDept]
        };
      case 2:
        return {
          title: "Doctoral Programs",
          department: doctoralDept,
          handleChange: handleDoctoralDeptChange,
          data: trendsData.doctoral[doctoralDept]
        };
      default:
        return {
          title: "Bachelor's Programs",
          department: bachelorDept,
          handleChange: handleBachelorDeptChange,
          data: trendsData.bachelors[bachelorDept]
        };
    }
  };

  const tabData = getTabData();

  return (
    <PageContainer>
      <PageHeader variant="h4" component="h1">
        Program Enrollment Trends
      </PageHeader>
      
      <TabContainer>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          aria-label="degree level tabs"
          centered
          variant="fullWidth"
          sx={{ 
            '& .MuiTab-root': { fontWeight: 600 },
            mb: 1
          }}
        >
          <Tab label="Bachelor's" {...a11yProps(0)} />
          <Tab label="Master's" {...a11yProps(1)} />
          <Tab label="Doctoral" {...a11yProps(2)} />
        </Tabs>
      </TabContainer>
      
      <FilterContainer>
        <Typography variant="h6" component="h2">
          {tabData.title}
        </Typography>
        
        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel id="department-select-label">Department</InputLabel>
          <Select
            labelId="department-select-label"
            id="department-select"
            value={tabData.department}
            label="Department"
            onChange={tabData.handleChange}
            sx={{ borderRadius: 2 }}
          >
            <MenuItem value="ALL">All Departments</MenuItem>
            <MenuItem value="KIN">Kinesiology (KIN)</MenuItem>
            <MenuItem value="TAL">Teaching & Learning (TAL)</MenuItem>
            <MenuItem value="EPS">Educational & Psychological Studies (EPS)</MenuItem>
          </Select>
        </FormControl>
      </FilterContainer>
      
      {renderTrendCards(tabData.data)}
    </PageContainer>
  );
};

export default TrendsPage;