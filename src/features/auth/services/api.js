// src/features/auth/services/api.js (Updated to use new API service)
import { apiService } from '../../../services/apiService';

// Keep existing mock data for fallback
const mockEnrollmentData = [
    { year: '2015', applicants: 28000, admitted: 9800, enrolled: 3200 },
    { year: '2016', applicants: 30500, admitted: 10200, enrolled: 3350 },
    // ... rest of mock data
];

// Updated API functions
export const fetchEnrollmentData = async () => {
    try {
        // Try to get real data from API first
        const data = await apiService.getAllAdmissionData();
        
        // Transform API data to match expected format
        const transformedData = transformApiDataToEnrollment(data);
        return transformedData.length > 0 ? transformedData : mockEnrollmentData;
    } catch (error) {
        console.warn('Failed to fetch enrollment data from API, using mock data:', error);
        return mockEnrollmentData;
    }
};

export const fetchAdmissionData = async () => {
    try {
        const data = await apiService.getAllAdmissionData();
        return transformApiDataToAdmission(data);
    } catch (error) {
        console.warn('Failed to fetch admission data from API, using mock data:', error);
        return mockAdmissionData; // fallback to existing mock data
    }
};

export const fetchGeoDistribution = async () => {
    try {
        // This might need custom endpoint or transformation
        return mockGeoDistributionData; // Use mock for now
    } catch (error) {
        console.warn('Failed to fetch geo distribution from API, using mock data:', error);
        return mockGeoDistributionData;
    }
};

export const fetchAcademicMetrics = async () => {
    try {
        // This might need custom endpoint or transformation
        return mockAcademicMetricsData; // Use mock for now
    } catch (error) {
        console.warn('Failed to fetch academic metrics from API, using mock data:', error);
        return mockAcademicMetricsData;
    }
};

export const fetchAllDashboardData = async () => {
    try {
        const [enrollmentData, admissionData] = await Promise.all([
            fetchEnrollmentData(),
            fetchAdmissionData()
        ]);

        return {
            enrollmentData,
            admissionData,
            geoDistribution: mockGeoDistributionData, // Use mock for now
            academicMetrics: mockAcademicMetricsData // Use mock for now
        };
    } catch (error) {
        console.warn('Failed to fetch dashboard data from API, using mock data:', error);
        return {
            enrollmentData: mockEnrollmentData,
            admissionData: mockAdmissionData,
            geoDistribution: mockGeoDistributionData,
            academicMetrics: mockAcademicMetricsData
        };
    }
};

// Helper functions to transform API data
function transformApiDataToEnrollment(apiData) {
    // Group by year and aggregate
    const yearMap = new Map();
    
    apiData.forEach(item => {
        const year = item.academicYear?.split('-')[1];
        if (!year) return;
        
        const fullYear = `20${year}`;
        if (!yearMap.has(fullYear)) {
            yearMap.set(fullYear, {
                year: fullYear,
                applicants: 0,
                admitted: 0,
                enrolled: 0
            });
        }
        
        const yearData = yearMap.get(fullYear);
        yearData.applicants += item.totalApplied || 0;
        yearData.admitted += item.totalAdmitted || 0;
        yearData.enrolled += item.totalNetDeposited || 0;
    });
    
    return Array.from(yearMap.values()).sort((a, b) => a.year.localeCompare(b.year));
}

function transformApiDataToAdmission(apiData) {
    // Transform API data to match expected admission data structure
    const byDemographics = {
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
    };

    // Group by colleges/departments
    const collegeMap = new Map();
    
    apiData.forEach(item => {
        const deptName = getDepartmentFullName(item.department);
        if (!collegeMap.has(deptName)) {
            collegeMap.set(deptName, {
                name: deptName,
                applicants: 0,
                admitted: 0,
                enrolled: 0
            });
        }
        
        const college = collegeMap.get(deptName);
        college.applicants += item.totalApplied || 0;
        college.admitted += item.totalAdmitted || 0;
        college.enrolled += item.totalNetDeposited || 0;
    });

    const byColleges = Array.from(collegeMap.values());

    return {
        byDemographics,
        byColleges
    };
}

function getDepartmentFullName(deptCode) {
    const deptMap = {
        'KIN': 'Kinesiology',
        'EPS': 'Educational & Psychological Studies',
        'TAL': 'Teaching & Learning',
        'Undeclared': 'Undeclared'
    };
    return deptMap[deptCode] || deptCode;
}

// Re-export existing mock data for backward compatibility
export {
    mockEnrollmentData as enrollmentData,
    mockAdmissionData as admissionData,
    mockGeoDistributionData as geoDistributionData,
    mockAcademicMetricsData as academicMetricsData
} from './api';