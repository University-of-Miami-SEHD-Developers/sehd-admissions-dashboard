import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Styled components
const SummaryCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const ValueTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  fontSize: '2rem',
}));

const LabelTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'medium',
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(1),
}));

const AdmissionsSummary = ({ data }) => {
  // Calculate summary statistics
  const totalApplied = data.reduce((sum, item) => sum + item['Total Applied'], 0);
  const totalAdmitted = data.reduce((sum, item) => sum + item['Total Admitted'], 0);
  const totalDenied = data.reduce((sum, item) => sum + item['Total Denied'], 0);
  const totalGrossDeposited = data.reduce((sum, item) => sum + item['Total Gross Deposited'], 0);
  const matriculated = data.reduce((sum, item) => sum + item['Matriculated'], 0);
  
  // Calculate percentages
  const admissionRate = totalApplied > 0 ? ((totalAdmitted / totalApplied) * 100).toFixed(1) : 0;
  const denialRate = totalApplied > 0 ? ((totalDenied / totalApplied) * 100).toFixed(1) : 0;
  const depositRate = totalAdmitted > 0 ? ((matriculated / totalAdmitted) * 100).toFixed(1) : 0;
  
  // Calculate by program type
  const byProgram = {
    'Bachelor\'s': {
      applied: data.filter(item => item.Program === 'Bachelor\'s').reduce((sum, item) => sum + item['Total Applied'], 0),
      admitted: data.filter(item => item.Program === 'Bachelor\'s').reduce((sum, item) => sum + item['Total Admitted'], 0),
      net: data.filter(item => item.Program === 'Bachelor\'s').reduce((sum, item) => sum + item['Matriculated'], 0)
    },
    'Master\'s': {
      applied: data.filter(item => item.Program === 'Master\'s').reduce((sum, item) => sum + item['Total Applied'], 0),
      admitted: data.filter(item => item.Program === 'Master\'s').reduce((sum, item) => sum + item['Total Admitted'], 0),
      net: data.filter(item => item.Program === 'Master\'s').reduce((sum, item) => sum + item['Matriculated'], 0)
    },
    'Doctoral': {
      applied: data.filter(item => item.Program === 'Doctoral').reduce((sum, item) => sum + item['Total Applied'], 0),
      admitted: data.filter(item => item.Program === 'Doctoral').reduce((sum, item) => sum + item['Total Admitted'], 0),
      net: data.filter(item => item.Program === 'Doctoral').reduce((sum, item) => sum + item['Matriculated'], 0)
    },
    'Certificate': {
      applied: data.filter(item => item.Program === 'Certificate').reduce((sum, item) => sum + item['Total Applied'], 0),
      admitted: data.filter(item => item.Program === 'Certificate').reduce((sum, item) => sum + item['Total Admitted'], 0),
      net: data.filter(item => item.Program === 'Certificate').reduce((sum, item) => sum + item['Matriculated'], 0)
    }
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Summary Statistics
      </Typography>
      
      <Grid container spacing={3}>
        {/* Total Numbers */}
        <Grid item xs={12} sm={6} md={2.4}>
          <SummaryCard elevation={3}>
            <ValueTypography variant="h4">
              {totalApplied}
            </ValueTypography>
            <LabelTypography variant="subtitle1">
              Total Applied
            </LabelTypography>
          </SummaryCard>
        </Grid>
        
        <Grid item xs={12} sm={6} md={2.4}>
          <SummaryCard elevation={3}>
            <ValueTypography variant="h4">
              {totalAdmitted}
            </ValueTypography>
            <LabelTypography variant="subtitle1">
              Total Admitted
            </LabelTypography>
          </SummaryCard>
        </Grid>
        
        <Grid item xs={12} sm={6} md={2.4}>
          <SummaryCard elevation={3}>
            <ValueTypography variant="h4">
              {admissionRate}%
            </ValueTypography>
            <LabelTypography variant="subtitle1">
              Admission Rate
            </LabelTypography>
          </SummaryCard>
        </Grid>
        
        <Grid item xs={12} sm={6} md={2.4}>
          <SummaryCard elevation={3}>
            <ValueTypography variant="h4">
              {matriculated}
            </ValueTypography>
            <LabelTypography variant="subtitle1">
            Matriculated
            </LabelTypography>
          </SummaryCard>
        </Grid>
        
        <Grid item xs={12} sm={6} md={2.4}>
          <SummaryCard elevation={3}>
            <ValueTypography variant="h4">
              {depositRate}%
            </ValueTypography>
            <LabelTypography variant="subtitle1">
              Deposit Rate
            </LabelTypography>
          </SummaryCard>
        </Grid>
      </Grid>

      {/* Program-specific statistics */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        By Program Type
      </Typography>
      
      <Grid container spacing={3}>
        {Object.entries(byProgram).map(([program, stats]) => (
          <Grid item xs={12} sm={6} md={3} key={program}>
            <SummaryCard elevation={3}>
              <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                {program}
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Applied:</Typography>
                <Typography variant="body1" fontWeight="bold">{stats.applied}</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Admitted:</Typography>
                <Typography variant="body1" fontWeight="bold">{stats.admitted}</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">Enrolled:</Typography>
                <Typography variant="body1" fontWeight="bold">{stats.net}</Typography>
              </Box>
              
              <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid #eee' }}>
                <Typography variant="body2" fontWeight="bold">
                  Yield Rate: {stats.admitted > 0 ? ((stats.net / stats.admitted) * 100).toFixed(1) : 0}%
                </Typography>
              </Box>
            </SummaryCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdmissionsSummary;