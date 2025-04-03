const cols = [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 90 
    },
    {
        field: 'academicCareer',
        headerName: 'Academic Career',
        width: 150
    },
    {
        field: 'academicPlanCode',
        headerName: 'Academic Plan Code',
        width: 150
    },
    {
        field: 'AcademicPlanDescript',
        headerName: 'Academic Plan',
        width: 150
    },
    {
        field: 'admitType',
        headerName: 'Admit Type',
        width: 150
    },
    {
        field: 'applied',
        headerName: 'Total Applied',
        type: 'number',
        width: 150
    },
    {
        field: 'admitted',
        headerName: 'Total Admitted',
        type: 'number',
        width: 150
    },
    {
        field: 'denied',
        headerName: 'Total Denied',
        type: 'number',
        width: 150
    },
    {
        field: 'grossDep',
        headerName: 'Total Gross Deposited',
        type: 'number',
        width: 150
    },
    {
        field: 'netDep',
        headerName: 'Total Net Deposited',
        type: 'number',
        width: 150
    },
];

const rows = [
  {
    id: 1,
    academicCareer: "Graduate",
    academicPlanCode: "APPH_MSED",
    AcademicPlanDescript: "Applied Physiology",
    admitType: "New Student",
    applied: 3,
    admitted: 2,
    denied: 0,
    grossDep: 2,
    netDep: 2
  },
  {
    id: 2,
    academicCareer: "Graduate",
    academicPlanCode: "ATHT_MSAT",
    AcademicPlanDescript: "Athletic Training",
    admitType: "New Student",
    applied: 54,
    admitted: 42,
    denied: 8,
    grossDep: 21,
    netDep: 15
  },
  {
    id: 3,
    academicCareer: "Graduate",
    academicPlanCode: "OAPLS_EDD",
    AcademicPlanDescript: "Applied Learning Sciences",
    admitType: "New Student",
    applied: 55,
    admitted: 37,
    denied: 3,
    grossDep: 35,
    netDep: 29
  },
  {
    id: 4,
    academicCareer: "Graduate",
    academicPlanCode: "OAPLS_MSED",
    AcademicPlanDescript: "Applied Learning Sciences",
    admitType: "New Student",
    applied: 4,
    admitted: 1,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 5,
    academicCareer: "Graduate",
    academicPlanCode: "OSADM_MSED",
    AcademicPlanDescript: "UOnline-LE MSED Online SADM",
    admitType: "New Student",
    applied: 28,
    admitted: 19,
    denied: 1,
    grossDep: 16,
    netDep: 9
  },
  {
    id: 6,
    academicCareer: "Undergraduate",
    academicPlanCode: "ED_BSED_UN",
    AcademicPlanDescript: "Undeclared Education",
    admitType: "New Student",
    applied: 3,
    admitted: 3,
    denied: 0,
    grossDep: 3,
    netDep: 3
  },
  {
    id: 7,
    academicCareer: "Undergraduate",
    academicPlanCode: "EXPS_BSEXP",
    AcademicPlanDescript: "Exercise Physiology",
    admitType: "New Student",
    applied: 2,
    admitted: 2,
    denied: 0,
    grossDep: 2,
    netDep: 2
  },
  {
    id: 8,
    academicCareer: "Undergraduate",
    academicPlanCode: "SADM_BSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "New Student",
    applied: 5,
    admitted: 5,
    denied: 0,
    grossDep: 5,
    netDep: 5
  },
  {
    id: 9,
    academicCareer: "Undergraduate",
    academicPlanCode: "SADM_BSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "Transfer Student",
    applied: 3,
    admitted: 3,
    denied: 0,
    grossDep: 3,
    netDep: 3
  }
];

export { cols, rows };