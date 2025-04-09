// src/shared/utils/dataExtractUtils.js
import Spring24Data from '../data/Spring24.json';
import Summer24Data from '../data/Summer24.json';
import Fall24Data from '../data/Fall24.json';
import Spring23Data from '../data/Spring23.json';
import Summer23Data from '../data/Summer23.json';
import Fall23Data from '../data/Fall23.json';
import Spring22Data from '../data/Spring22.json';
import Summer22Data from '../data/Summer22.json';
import Fall22Data from '../data/Fall22.json';

/**
 * Data structure containing all JSON files with proper naming
 */
export const allDataSets = {
  Spring24: Spring24Data,
  Summer24: Summer24Data,
  Fall24: Fall24Data,
  Spring23: Spring23Data,
  Summer23: Summer23Data,
  Fall23: Fall23Data,
  Spring22: Spring22Data,
  Summer22: Summer22Data,
  Fall22: Fall22Data
};

/**
 * Organized data structure by academic year
 */
export const academicYears = {
  '2023-24': [...Fall23Data, ...Spring24Data, ...Summer24Data],
  '2022-23': [...Fall22Data, ...Spring23Data, ...Summer23Data],
  '2021-22': [...Fall22Data, ...Spring22Data, ...Summer22Data] // Using Fall22 as placeholder
};

/**
 * Organized data structure by term
 */
export const termData = {
  'Fall 2024': Fall24Data,
  'Spring 2024': Spring24Data,
  'Summer 2024': Summer24Data,
  'Fall 2023': Fall23Data,
  'Spring 2023': Spring23Data,
  'Summer 2023': Summer23Data,
  'Fall 2022': Fall22Data,
  'Spring 2022': Spring22Data,
  'Summer 2022': Summer22Data
};

/**
 * Combined data from all terms
 */
export const allData = Object.values(allDataSets).flat();

/**
 * Extracts unique departments from the data
 * @returns {string[]} Array of department names
 */
export const getDepartments = () => {
  const departments = new Set();
  allData.forEach(item => {
    if (item.Department && item.Department !== 'Undeclared') {
      departments.add(item.Department);
    }
  });
  return Array.from(departments);
};

/**
 * Extracts unique programs from the data
 * @returns {string[]} Array of program types
 */
export const getPrograms = () => {
  const programs = new Set();
  allData.forEach(item => {
    if (item.Program) {
      programs.add(item.Program);
    }
  });
  return Array.from(programs);
};

/**
 * Extracts unique academic plans from the data
 * @returns {Object[]} Array of plan objects with code and description
 */
export const getAcademicPlans = () => {
  const plansMap = new Map();
  allData.forEach(item => {
    if (item['Academic Plan Code'] && item['Academic Plan Description']) {
      plansMap.set(item['Academic Plan Code'], {
        code: item['Academic Plan Code'],
        description: item['Academic Plan Description'],
        department: item.Department || 'Undeclared',
        program: item.Program
      });
    }
  });
  return Array.from(plansMap.values());
};

/**
 * Get enrollment trends by term
 * @param {string} department - Optional department filter
 * @param {string} program - Optional program filter
 * @returns {Object} Object with term labels and enrollment data
 */
export const getEnrollmentTrendsByTerm = (department = null, program = null) => {
  const terms = [
    'Spring 2022', 'Summer 2022', 'Fall 2022',
    'Spring 2023', 'Summer 2023', 'Fall 2023',
    'Spring 2024', 'Summer 2024', 'Fall 2024'
  ];
  
  const termValues = terms.map(term => {
    const termLabel = term.split(' ')[0].toLowerCase() + term.split(' ')[1].substring(2);
    const data = allDataSets[termLabel] || [];
    let filteredData = data;
    
    if (department) {
      filteredData = filteredData.filter(item => item.Department === department);
    }
    
    if (program) {
      filteredData = filteredData.filter(item => item.Program === program);
    }
    
    return {
      term,
      applied: filteredData.reduce((sum, item) => sum + item['Total Applied'], 0),
      admitted: filteredData.reduce((sum, item) => sum + item['Total Admitted'], 0),
      enrolled: filteredData.reduce((sum, item) => sum + item['Total Net Deposited'], 0)
    };
  });
  
  return {
    labels: terms,
    values: termValues
  };
};

/**
 * Get department-specific enrollment data
 * @param {string} academicYear - Academic year to filter by
 * @returns {Object} Object with department-specific enrollment data
 */
export const getDepartmentEnrollmentData = (academicYear = '2023-24') => {
  const departments = getDepartments();
  const yearData = academicYears[academicYear] || academicYears['2023-24'];
  
  const departmentData = departments.map(dept => {
    const deptData = yearData.filter(item => item.Department === dept);
    
    return {
      department: dept,
      applied: deptData.reduce((sum, item) => sum + item['Total Applied'], 0),
      admitted: deptData.reduce((sum, item) => sum + item['Total Admitted'], 0),
      enrolled: deptData.reduce((sum, item) => sum + item['Total Net Deposited'], 0),
      admissionRate: calculateRate(
        deptData.reduce((sum, item) => sum + item['Total Admitted'], 0),
        deptData.reduce((sum, item) => sum + item['Total Applied'], 0)
      ),
      yieldRate: calculateRate(
        deptData.reduce((sum, item) => sum + item['Total Net Deposited'], 0),
        deptData.reduce((sum, item) => sum + item['Total Admitted'], 0)
      )
    };
  });
  
  return departmentData;
};

/**
 * Get program-specific enrollment data
 * @param {string} academicYear - Academic year to filter by
 * @returns {Object} Object with program-specific enrollment data
 */
export const getProgramEnrollmentData = (academicYear = '2023-24') => {
  const programs = getPrograms();
  const yearData = academicYears[academicYear] || academicYears['2023-24'];
  
  const programData = programs.map(prog => {
    const progData = yearData.filter(item => item.Program === prog);
    
    return {
      program: prog,
      applied: progData.reduce((sum, item) => sum + item['Total Applied'], 0),
      admitted: progData.reduce((sum, item) => sum + item['Total Admitted'], 0),
      enrolled: progData.reduce((sum, item) => sum + item['Total Net Deposited'], 0),
      admissionRate: calculateRate(
        progData.reduce((sum, item) => sum + item['Total Admitted'], 0),
        progData.reduce((sum, item) => sum + item['Total Applied'], 0)
      ),
      yieldRate: calculateRate(
        progData.reduce((sum, item) => sum + item['Total Net Deposited'], 0),
        progData.reduce((sum, item) => sum + item['Total Admitted'], 0)
      )
    };
  });
  
  return programData;
};

/**
 * Get detailed academic plan data
 * @param {string} academicYear - Academic year to filter by
 * @returns {Object[]} Array of academic plan data objects
 */
export const getAcademicPlanData = (academicYear = '2023-24') => {
  const plans = getAcademicPlans();
  const yearData = academicYears[academicYear] || academicYears['2023-24'];
  
  return plans.map(plan => {
    const planData = yearData.filter(item => 
      item['Academic Plan Code'] === plan.code
    );
    
    return {
      ...plan,
      applied: planData.reduce((sum, item) => sum + item['Total Applied'], 0),
      admitted: planData.reduce((sum, item) => sum + item['Total Admitted'], 0),
      enrolled: planData.reduce((sum, item) => sum + item['Total Net Deposited'], 0),
      admissionRate: calculateRate(
        planData.reduce((sum, item) => sum + item['Total Admitted'], 0),
        planData.reduce((sum, item) => sum + item['Total Applied'], 0)
      ),
      yieldRate: calculateRate(
        planData.reduce((sum, item) => sum + item['Total Net Deposited'], 0),
        planData.reduce((sum, item) => sum + item['Total Admitted'], 0)
      )
    };
  });
};

/**
 * Get annual enrollment by department and program
 * @returns {Object} Formatted data for visualization
 */
export const getAnnualEnrollmentByDeptProgram = () => {
  const departments = getDepartments();
  const programs = getPrograms();
  const result = {};
  
  Object.keys(academicYears).forEach(year => {
    result[year] = {};
    
    departments.forEach(dept => {
      result[year][dept] = {};
      
      programs.forEach(prog => {
        const filteredData = academicYears[year].filter(
          item => item.Department === dept && item.Program === prog
        );
        
        result[year][dept][prog] = {
          applied: filteredData.reduce((sum, item) => sum + item['Total Applied'], 0),
          admitted: filteredData.reduce((sum, item) => sum + item['Total Admitted'], 0),
          enrolled: filteredData.reduce((sum, item) => sum + item['Total Net Deposited'], 0)
        };
      });
    });
  });
  
  return result;
};

/**
 * Get enrollment comparison between two academic years
 * @param {string} currentYear - Current academic year
 * @param {string} previousYear - Previous academic year to compare against
 * @returns {Object} Object with comparison data
 */
export const getYearOverYearComparison = (
  currentYear = '2023-24', 
  previousYear = '2022-23'
) => {
  const currentData = academicYears[currentYear] || [];
  const previousData = academicYears[previousYear] || [];
  
  const current = {
    applied: currentData.reduce((sum, item) => sum + item['Total Applied'], 0),
    admitted: currentData.reduce((sum, item) => sum + item['Total Admitted'], 0),
    enrolled: currentData.reduce((sum, item) => sum + item['Total Net Deposited'], 0)
  };
  
  const previous = {
    applied: previousData.reduce((sum, item) => sum + item['Total Applied'], 0),
    admitted: previousData.reduce((sum, item) => sum + item['Total Admitted'], 0),
    enrolled: previousData.reduce((sum, item) => sum + item['Total Net Deposited'], 0)
  };
  
  return {
    current,
    previous,
    changes: {
      applied: calculatePercentChange(current.applied, previous.applied),
      admitted: calculatePercentChange(current.admitted, previous.admitted),
      enrolled: calculatePercentChange(current.enrolled, previous.enrolled),
      admissionRate: calculatePercentChange(
        calculateRate(current.admitted, current.applied),
        calculateRate(previous.admitted, previous.applied)
      ),
      yieldRate: calculatePercentChange(
        calculateRate(current.enrolled, current.admitted),
        calculateRate(previous.enrolled, previous.admitted)
      )
    }
  };
};

/**
 * Get new vs transfer student data
 * @param {string} academicYear - Academic year to filter by
 * @returns {Object} Object with new vs transfer student data
 */
export const getNewVsTransferData = (academicYear = '2023-24') => {
  const yearData = academicYears[academicYear] || academicYears['2023-24'];
  
  const newStudentData = yearData.filter(
    item => item['Admit Type Description'] === 'New Student'
  );
  
  const transferStudentData = yearData.filter(
    item => item['Admit Type Description'] === 'Transfer Student'
  );
  
  return {
    new: {
      applied: newStudentData.reduce((sum, item) => sum + item['Total Applied'], 0),
      admitted: newStudentData.reduce((sum, item) => sum + item['Total Admitted'], 0),
      enrolled: newStudentData.reduce((sum, item) => sum + item['Total Net Deposited'], 0),
      admissionRate: calculateRate(
        newStudentData.reduce((sum, item) => sum + item['Total Admitted'], 0),
        newStudentData.reduce((sum, item) => sum + item['Total Applied'], 0)
      ),
      yieldRate: calculateRate(
        newStudentData.reduce((sum, item) => sum + item['Total Net Deposited'], 0),
        newStudentData.reduce((sum, item) => sum + item['Total Admitted'], 0)
      )
    },
    transfer: {
      applied: transferStudentData.reduce((sum, item) => sum + item['Total Applied'], 0),
      admitted: transferStudentData.reduce((sum, item) => sum + item['Total Admitted'], 0),
      enrolled: transferStudentData.reduce((sum, item) => sum + item['Total Net Deposited'], 0),
      admissionRate: calculateRate(
        transferStudentData.reduce((sum, item) => sum + item['Total Admitted'], 0),
        transferStudentData.reduce((sum, item) => sum + item['Total Applied'], 0)
      ),
      yieldRate: calculateRate(
        transferStudentData.reduce((sum, item) => sum + item['Total Net Deposited'], 0),
        transferStudentData.reduce((sum, item) => sum + item['Total Admitted'], 0)
      )
    }
  };
};

/**
 * Get detailed data for a specific department
 * @param {string} department - Department to filter by
 * @param {string} academicYear - Academic year to filter by
 * @returns {Object} Object with department-specific data
 */
export const getDepartmentDetailedData = (department, academicYear = '2023-24') => {
  if (!department) return null;
  
  const yearData = academicYears[academicYear] || academicYears['2023-24'];
  const deptData = yearData.filter(item => item.Department === department);
  
  const programs = {};
  const plans = {};
  
  // Group by program
  deptData.forEach(item => {
    const program = item.Program;
    if (!programs[program]) {
      programs[program] = {
        applied: 0,
        admitted: 0,
        enrolled: 0,
        plans: []
      };
    }
    
    programs[program].applied += item['Total Applied'];
    programs[program].admitted += item['Total Admitted'];
    programs[program].enrolled += item['Total Net Deposited'];
    
    // Group by academic plan
    const planCode = item['Academic Plan Code'];
    if (!plans[planCode]) {
      plans[planCode] = {
        code: planCode,
        description: item['Academic Plan Description'],
        program: item.Program,
        applied: 0,
        admitted: 0,
        enrolled: 0
      };
    }
    
    plans[planCode].applied += item['Total Applied'];
    plans[planCode].admitted += item['Total Admitted'];
    plans[planCode].enrolled += item['Total Net Deposited'];
  });
  
  // Add plans to their respective programs
  Object.values(plans).forEach(plan => {
    if (programs[plan.program]) {
      programs[plan.program].plans.push(plan);
    }
  });
  
  // Calculate rates
  Object.keys(programs).forEach(prog => {
    programs[prog].admissionRate = calculateRate(
      programs[prog].admitted,
      programs[prog].applied
    );
    
    programs[prog].yieldRate = calculateRate(
      programs[prog].enrolled,
      programs[prog].admitted
    );
  });
  
  return {
    department,
    academicYear,
    applied: deptData.reduce((sum, item) => sum + item['Total Applied'], 0),
    admitted: deptData.reduce((sum, item) => sum + item['Total Admitted'], 0),
    enrolled: deptData.reduce((sum, item) => sum + item['Total Net Deposited'], 0),
    admissionRate: calculateRate(
      deptData.reduce((sum, item) => sum + item['Total Admitted'], 0),
      deptData.reduce((sum, item) => sum + item['Total Applied'], 0)
    ),
    yieldRate: calculateRate(
      deptData.reduce((sum, item) => sum + item['Total Net Deposited'], 0),
      deptData.reduce((sum, item) => sum + item['Total Admitted'], 0)
    ),
    programs,
    plans: Object.values(plans)
  };
};

/**
 * Get term-by-term comparison data
 * @param {string} term1 - First term to compare
 * @param {string} term2 - Second term to compare
 * @returns {Object} Object with comparison data
 */
export const getTermComparison = (term1, term2) => {
  if (!term1 || !term2) return null;
  
  const term1Data = termData[term1] || [];
  const term2Data = termData[term2] || [];
  
  const term1Stats = {
    applied: term1Data.reduce((sum, item) => sum + item['Total Applied'], 0),
    admitted: term1Data.reduce((sum, item) => sum + item['Total Admitted'], 0),
    enrolled: term1Data.reduce((sum, item) => sum + item['Total Net Deposited'], 0)
  };
  
  const term2Stats = {
    applied: term2Data.reduce((sum, item) => sum + item['Total Applied'], 0),
    admitted: term2Data.reduce((sum, item) => sum + item['Total Admitted'], 0),
    enrolled: term2Data.reduce((sum, item) => sum + item['Total Net Deposited'], 0)
  };
  
  return {
    term1: {
      name: term1,
      ...term1Stats,
      admissionRate: calculateRate(term1Stats.admitted, term1Stats.applied),
      yieldRate: calculateRate(term1Stats.enrolled, term1Stats.admitted)
    },
    term2: {
      name: term2,
      ...term2Stats,
      admissionRate: calculateRate(term2Stats.admitted, term2Stats.applied),
      yieldRate: calculateRate(term2Stats.enrolled, term2Stats.admitted)
    },
    changes: {
      applied: calculatePercentChange(term1Stats.applied, term2Stats.applied),
      admitted: calculatePercentChange(term1Stats.admitted, term2Stats.admitted),
      enrolled: calculatePercentChange(term1Stats.enrolled, term2Stats.enrolled),
      admissionRate: calculatePercentChange(
        calculateRate(term1Stats.admitted, term1Stats.applied),
        calculateRate(term2Stats.admitted, term2Stats.applied)
      ),
      yieldRate: calculatePercentChange(
        calculateRate(term1Stats.enrolled, term1Stats.admitted),
        calculateRate(term2Stats.enrolled, term2Stats.admitted)
      )
    }
  };
};

/**
 * Format data for line chart visualization
 * @param {string} programType - Program type to filter by 
 * @returns {Object} Formatted data for line chart
 */
export const getLineChartData = (programType = 'Bachelor\'s') => {
  const departments = getDepartments();
  const terms = Object.keys(termData);
  
  const datasets = departments.map((dept, index) => {
    const colors = [
      {
        border: 'rgb(75, 192, 192)',
        background: 'rgba(75, 192, 192, 0.2)'
      },
      {
        border: 'rgb(255, 99, 132)',
        background: 'rgba(255, 99, 132, 0.2)'
      },
      {
        border: 'rgb(255, 206, 86)',
        background: 'rgba(255, 206, 86, 0.2)'
      }
    ];
    
    const color = colors[index % colors.length];
    
    const data = terms.map(term => {
      const termRawData = termData[term] || [];
      const filteredData = termRawData.filter(
        item => item.Department === dept && item.Program === programType
      );
      
      return filteredData.reduce((sum, item) => sum + item['Total Net Deposited'], 0);
    });
    
    return {
      label: dept,
      data,
      borderColor: color.border,
      backgroundColor: color.background,
      tension: 0.4
    };
  });
  
  return {
    labels: terms,
    datasets
  };
};

/**
 * Format data for donut chart visualization
 * @param {string} programType - Program type to filter by
 * @param {string} academicYear - Academic year to filter by
 * @returns {Object} Formatted data for donut chart
 */
export const getDonutChartData = (programType = 'Bachelor\'s', academicYear = '2023-24') => {
  const departments = getDepartments();
  const yearData = academicYears[academicYear] || academicYears['2023-24'];
  
  const departmentValues = departments.map(dept => {
    const filteredData = yearData.filter(
      item => item.Department === dept && item.Program === programType
    );
    
    return filteredData.reduce((sum, item) => sum + item['Total Applied'], 0);
  });
  
  const colors = [
    '#00bcd4',
    '#f44336',
    '#ffc107'
  ];
  
  const borderColors = [
    '#0097a7',
    '#d32f2f',
    '#ffa000'
  ];
  
  return {
    labels: departments,
    datasets: [
      {
        data: departmentValues,
        backgroundColor: colors,
        borderColor: borderColors,
        borderWidth: 1,
        hoverOffset: 4
      }
    ]
  };
};

/**
 * Calculate rate (percentage)
 * @param {number} numerator - Numerator value
 * @param {number} denominator - Denominator value
 * @returns {number} Calculated rate as percentage
 */
function calculateRate(numerator, denominator) {
  if (!denominator) return 0;
  return parseFloat(((numerator / denominator) * 100).toFixed(1));
}

/**
 * Calculate percentage change between two values
 * @param {number} current - Current value
 * @param {number} previous - Previous value
 * @returns {number} Percentage change
 */
function calculatePercentChange(current, previous) {
  if (!previous) return 0;
  return parseFloat(((current - previous) / previous * 100).toFixed(1));
}

/**
 * Format data for chart.js spark line
 * @param {number} value - Final value
 * @param {number} steps - Number of data points
 * @returns {number[]} Array of trending values
 */
export function createTrendData(value, steps = 9) {
  const startValue = Math.round(value * 0.85); // Start at 85% of final value
  const step = (value - startValue) / (steps - 1);
  
  return Array.from({ length: steps }, (_, i) => 
    Math.round(startValue + step * i)
  );
}

/**
 * Determine trend direction based on percentage change
 * @param {number} changePercent - Percentage change value
 * @param {number} threshold - Threshold for determining significant change
 * @returns {string} Trend direction ('up', 'down', or 'neutral')
 */
export function determineTrend(changePercent, threshold = 2) {
  if (changePercent >= threshold) return 'up';
  if (changePercent <= -threshold) return 'down';
  return 'neutral';
}

export default {
  allData,
  academicYears,
  termData,
  getDepartments,
  getPrograms,
  getAcademicPlans,
  getEnrollmentTrendsByTerm,
  getDepartmentEnrollmentData,
  getProgramEnrollmentData,
  getAcademicPlanData,
  getAnnualEnrollmentByDeptProgram,
  getYearOverYearComparison,
  getNewVsTransferData,
  getDepartmentDetailedData,
  getTermComparison,
  getLineChartData,
  getDonutChartData,
  createTrendData,
  determineTrend
};