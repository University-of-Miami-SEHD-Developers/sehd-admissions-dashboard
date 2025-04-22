import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { DataGrid } from '@mui/x-data-grid';
import TabPanel, { a11yProps } from '../../shared/components/TabPanel';
import AdmissionsSummary from './components/AdmissionsSummary';

// Import all the JSON data
import Spring24Data from '../../shared/data/Spring24.json';
import Summer24Data from '../../shared/data/Summer24.json';
import Fall24Data from '../../shared/data/Fall24.json';
import Spring23Data from '../../shared/data/Spring23.json';
import Summer23Data from '../../shared/data/Summer23.json';
import Fall23Data from '../../shared/data/Fall23.json';
import Spring22Data from '../../shared/data/Spring22.json';
import Summer22Data from '../../shared/data/Summer22.json';
import Fall22Data from '../../shared/data/Fall22.json';

// Define columns for the DataGrid
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Department', headerName: 'Department', width: 130 },
  { field: 'Program', headerName: 'Program', width: 150 },
  { field: 'Academic Career Description', headerName: 'Academic Career', width: 150 },
  { field: 'Academic Plan Code', headerName: 'Plan Code', width: 120 },
  { field: 'Academic Plan Description', headerName: 'Plan Description', width: 220 },
  { field: 'Admit Type Description', headerName: 'Admit Type', width: 150 },
  { field: 'Total Applied', headerName: 'Applied', type: 'number', width: 100 },
  { field: 'Total Admitted', headerName: 'Admitted', type: 'number', width: 100 },
  { field: 'Total Denied', headerName: 'Denied', type: 'number', width: 100 },
  { field: 'Total Gross Deposited', headerName: 'Gross Deposited', type: 'number', width: 150 },
  { field: 'Matriculated', headerName: 'Matriculated', type: 'number', width: 150 }
];

// Row transformation function
function transformRows(data) {
  return data.map((row, index) => ({
    id: index + 1,
    ...row
  }));
}

// Dataset mapping
const datasets = {
  spring24: {
    label: 'Spring 2024',
    data: Spring24Data
  },
  summer24: {
    label: 'Summer 2024',
    data: Summer24Data
  },
  fall24: {
    label: 'Fall 2024',
    data: Fall24Data
  },
  spring23: {
    label: 'Spring 2023',
    data: Spring23Data
  },
  summer23: {
    label: 'Summer 2023',
    data: Summer23Data
  },
  fall23: {
    label: 'Fall 2023',
    data: Fall23Data
  },
  spring22: {
    label: 'Spring 2022',
    data: Spring22Data
  },
  summer22: {
    label: 'Summer 2022',
    data: Summer22Data
  },
  fall22: {
    label: 'Fall 2022',
    data: Fall22Data
  }
};

// Filter options
const departmentOptions = ["All", "KIN", "EPS", "TAL", "Undeclared"];
const programOptions = ["All", "Bachelor's", "Master's", "Doctoral", "Certificate"];
const careerOptions = ["All", "Undergraduate", "Graduate"];
const admitTypeOptions = ["All", "New Student", "Transfer Student"];

const AdmissionsDataPage = () => {
  // State for the dataset selection
  const [selectedDataset, setSelectedDataset] = React.useState('spring24');
  
  // State for filters
  const [department, setDepartment] = React.useState("All");
  const [program, setProgram] = React.useState("All");
  const [career, setCareer] = React.useState("All");
  const [admitType, setAdmitType] = React.useState("All");

  // Handle dataset change
  const handleDatasetChange = (event) => {
    setSelectedDataset(event.target.value);
  };

  // Handle filter changes
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleProgramChange = (event) => {
    setProgram(event.target.value);
  };

  const handleCareerChange = (event) => {
    setCareer(event.target.value);
  };

  const handleAdmitTypeChange = (event) => {
    setAdmitType(event.target.value);
  };

  // Get the current dataset and apply filters
  const currentData = datasets[selectedDataset].data;
  
  // Apply filters
  const filteredData = currentData.filter(item => {
    return (
      (department === "All" || item.Department === department) &&
      (program === "All" || item.Program === program) &&
      (career === "All" || item["Academic Career Description"] === career) &&
      (admitType === "All" || item["Admit Type Description"] === admitType)
    );
  });

  // Transform the data for DataGrid
  const rows = transformRows(filteredData);

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admissions Data
      </Typography>
      
      {/* Dataset Selection */}
      <Box sx={{ mb: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="dataset-select-label">Select Term</InputLabel>
          <Select
            labelId="dataset-select-label"
            id="dataset-select"
            value={selectedDataset}
            label="Select Term"
            onChange={handleDatasetChange}
          >
            {Object.entries(datasets).map(([key, { label }]) => (
              <MenuItem key={key} value={key}>{label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      
      {/* Filters */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="department-filter-label">Department</InputLabel>
          <Select
            labelId="department-filter-label"
            id="department-filter"
            value={department}
            label="Department"
            onChange={handleDepartmentChange}
          >
            {departmentOptions.map(option => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="program-filter-label">Program</InputLabel>
          <Select
            labelId="program-filter-label"
            id="program-filter"
            value={program}
            label="Program"
            onChange={handleProgramChange}
          >
            {programOptions.map(option => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="career-filter-label">Academic Career</InputLabel>
          <Select
            labelId="career-filter-label"
            id="career-filter"
            value={career}
            label="Academic Career"
            onChange={handleCareerChange}
          >
            {careerOptions.map(option => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="admit-type-filter-label">Admit Type</InputLabel>
          <Select
            labelId="admit-type-filter-label"
            id="admit-type-filter"
            value={admitType}
            label="Admit Type"
            onChange={handleAdmitTypeChange}
          >
            {admitTypeOptions.map(option => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Summary Cards */}
      <AdmissionsSummary data={filteredData} />
      
      <Divider sx={{ my: 4 }} />
      
      <Typography variant="h6" gutterBottom>
        Detailed Admissions Data
      </Typography>
      
      {/* Data Grid */}
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
            sorting: {
              sortModel: [{ field: 'Total Applied', sort: 'desc' }],
            },
          }}
          pageSizeOptions={[10, 25, 50, 100]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default AdmissionsDataPage;