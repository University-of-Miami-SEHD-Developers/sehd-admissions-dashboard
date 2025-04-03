// src/services/api.js

// Mock enrollment data with 10 years of history
const enrollmentData = [
    { year: '2015', applicants: 28000, admitted: 9800, enrolled: 3200 },
    { year: '2016', applicants: 30500, admitted: 10200, enrolled: 3350 },
    { year: '2017', applicants: 33000, admitted: 11000, enrolled: 3600 },
    { year: '2018', applicants: 34200, admitted: 11500, enrolled: 3700 },
    { year: '2019', applicants: 34800, admitted: 11700, enrolled: 3750 },
    { year: '2020', applicants: 33500, admitted: 12000, enrolled: 3650 },
    { year: '2021', applicants: 36500, admitted: 12500, enrolled: 3900 },
    { year: '2022', applicants: 42000, admitted: 13200, enrolled: 4100 },
    { year: '2023', applicants: 44500, admitted: 13800, enrolled: 4250 },
    { year: '2024', applicants: 48000, admitted: 14500, enrolled: 4380 },
  ];
  
  // Mock admission data with demographics and college breakdown
  const admissionData = {
    byDemographics: {
      gender: [
        { name: 'Female', value: 58 },
        { name: 'Male', value: 42 }
      ],
      ethnicity: [
        { name: 'White', value: 41 },
        { name: 'Hispanic/Latino', value: 27 },
        { name: 'Black', value: 10 },
        { name: 'Asian', value: 15 },
        { name: 'Other', value: 7 }
      ],
      residency: [
        { name: 'Florida', value: 30 },
        { name: 'Out of State', value: 60 },
        { name: 'International', value: 10 }
      ]
    },
    byColleges: [
      { name: 'Arts & Sciences', applicants: 12000, admitted: 4200, enrolled: 1300 },
      { name: 'Business', applicants: 9500, admitted: 2800, enrolled: 900 },
      { name: 'Engineering', applicants: 6500, admitted: 2000, enrolled: 650 },
      { name: 'Communication', applicants: 5200, admitted: 1800, enrolled: 580 },
      { name: 'Nursing', applicants: 4800, admitted: 1300, enrolled: 420 },
      { name: 'Architecture', applicants: 1800, admitted: 650, enrolled: 210 },
      { name: 'Music', applicants: 1200, admitted: 400, enrolled: 140 },
      { name: 'Education', applicants: 1000, admitted: 380, enrolled: 130 }
    ]
  };
  
  // Mock geographic distribution data for students
  const geoDistributionData = [
    { state: 'FL', count: 1300, percentage: 30 },
    { state: 'NY', count: 560, percentage: 12.8 },
    { state: 'NJ', count: 340, percentage: 7.8 },
    { state: 'CA', count: 310, percentage: 7.1 },
    { state: 'TX', count: 280, percentage: 6.4 },
    { state: 'MA', count: 210, percentage: 4.8 },
    { state: 'IL', count: 190, percentage: 4.3 },
    { state: 'PA', count: 170, percentage: 3.9 },
    { state: 'GA', count: 130, percentage: 3.0 },
    { state: 'CT', count: 110, percentage: 2.5 },
    { state: 'Other US', count: 340, percentage: 7.8 },
    { state: 'International', count: 440, percentage: 10.0 }
  ];
  
  // Mock academic metrics data
  const academicMetricsData = {
    gpaTrends: [
      { year: '2015', average: 4.0, median: 3.9 },
      { year: '2016', average: 4.0, median: 3.9 },
      { year: '2017', average: 4.1, median: 4.0 },
      { year: '2018', average: 4.1, median: 4.0 },
      { year: '2019', average: 4.2, median: 4.0 },
      { year: '2020', average: 4.2, median: 4.1 },
      { year: '2021', average: 4.3, median: 4.2 },
      { year: '2022', average: 4.3, median: 4.2 },
      { year: '2023', average: 4.4, median: 4.3 },
      { year: '2024', average: 4.4, median: 4.3 }
    ],
    satTrends: [
      { year: '2015', average: 1300, range25: 1220, range75: 1380 },
      { year: '2016', average: 1310, range25: 1230, range75: 1390 },
      { year: '2017', average: 1320, range25: 1240, range75: 1400 },
      { year: '2018', average: 1330, range25: 1250, range75: 1410 },
      { year: '2019', average: 1340, range25: 1260, range75: 1420 },
      { year: '2020', average: 1350, range25: 1270, range75: 1430 },
      { year: '2021', average: 1360, range25: 1280, range75: 1440 },
      { year: '2022', average: 1370, range25: 1290, range75: 1450 },
      { year: '2023', average: 1380, range25: 1300, range75: 1460 },
      { year: '2024', average: 1390, range25: 1310, range75: 1470 }
    ],
    actTrends: [
      { year: '2015', average: 29, range25: 27, range75: 31 },
      { year: '2016', average: 29, range25: 27, range75: 31 },
      { year: '2017', average: 30, range25: 28, range75: 32 },
      { year: '2018', average: 30, range25: 28, range75: 32 },
      { year: '2019', average: 30, range25: 28, range75: 32 },
      { year: '2020', average: 31, range25: 29, range75: 33 },
      { year: '2021', average: 31, range25: 29, range75: 33 },
      { year: '2022', average: 31, range25: 29, range75: 33 },
      { year: '2023', average: 32, range25: 30, range75: 34 },
      { year: '2024', average: 32, range25: 30, range75: 34 }
    ],
    byMajor: [
      { major: 'Business Administration', avgGPA: 4.2, avgSAT: 1380, avgACT: 31 },
      { major: 'Biology', avgGPA: 4.4, avgSAT: 1410, avgACT: 32 },
      { major: 'Computer Science', avgGPA: 4.3, avgSAT: 1400, avgACT: 32 },
      { major: 'Psychology', avgGPA: 4.2, avgSAT: 1370, avgACT: 31 },
      { major: 'Engineering', avgGPA: 4.3, avgSAT: 1420, avgACT: 33 },
      { major: 'Communications', avgGPA: 4.0, avgSAT: 1350, avgACT: 30 },
      { major: 'Nursing', avgGPA: 4.3, avgSAT: 1390, avgACT: 31 },
      { major: 'Political Science', avgGPA: 4.1, avgSAT: 1380, avgACT: 31 }
    ]
  };
  
  // Simulate API delay for a more realistic experience
  const simulateAPIDelay = () => {
    const delay = Math.floor(Math.random() * (1000 - 300 + 1) + 300); // 300-1000ms
    return new Promise(resolve => setTimeout(resolve, delay));
  };
  
  // Mock API functions to fetch data
  export const fetchEnrollmentData = async () => {
    await simulateAPIDelay();
    return [...enrollmentData];
  };
  
  export const fetchAdmissionData = async () => {
    await simulateAPIDelay();
    return JSON.parse(JSON.stringify(admissionData)); // Deep copy to avoid reference issues
  };
  
  export const fetchGeoDistribution = async () => {
    await simulateAPIDelay();
    return [...geoDistributionData];
  };
  
  export const fetchAcademicMetrics = async () => {
    await simulateAPIDelay();
    return JSON.parse(JSON.stringify(academicMetricsData)); // Deep copy to avoid reference issues
  };
  
  // Mock function to fetch all data at once (for initial dashboard load)
  export const fetchAllDashboardData = async () => {
    await simulateAPIDelay();
    
    return {
      enrollmentData: [...enrollmentData],
      admissionData: JSON.parse(JSON.stringify(admissionData)),
      geoDistribution: [...geoDistributionData],
      academicMetrics: JSON.parse(JSON.stringify(academicMetricsData))
    };
  };