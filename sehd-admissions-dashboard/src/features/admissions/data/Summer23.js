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
    admitted: 3,
    denied: 0,
    grossDep: 3,
    netDep: 2
  },
  {
    id: 2,
    academicCareer: "Graduate",
    academicPlanCode: "ATHT_MSAT",
    AcademicPlanDescript: "Athletic Training",
    admitType: "New Student",
    applied: 40,
    admitted: 33,
    denied: 5,
    grossDep: 15,
    netDep: 14
  },
  {
    id: 3,
    academicCareer: "Graduate",
    academicPlanCode: "CNSM_MSED",
    AcademicPlanDescript: "Counseling Mental Health",
    admitType: "New Student",
    applied: 35,
    admitted: 14,
    denied: 20,
    grossDep: 12,
    netDep: 12
  },
  {
    id: 4,
    academicCareer: "Graduate",
    academicPlanCode: "ESOC_MSED",
    AcademicPlanDescript: "Education and Social Change",
    admitType: "New Student",
    applied: 1,
    admitted: 1,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 5,
    academicCareer: "Graduate",
    academicPlanCode: "HEEM_MSED",
    AcademicPlanDescript: "Higher Ed/Enrollment Mgt",
    admitType: "New Student",
    applied: 1,
    admitted: 0,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 6,
    academicCareer: "Graduate",
    academicPlanCode: "OAPLS_EDD",
    AcademicPlanDescript: "Applied Learning Sciences",
    admitType: "New Student",
    applied: 52,
    admitted: 37,
    denied: 0,
    grossDep: 34,
    netDep: 29
  },
  {
    id: 7,
    academicCareer: "Graduate",
    academicPlanCode: "OAPLS_MSED",
    AcademicPlanDescript: "Applied Learning Sciences",
    admitType: "New Student",
    applied: 4,
    admitted: 1,
    denied: 1,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 8,
    academicCareer: "Graduate",
    academicPlanCode: "ODAPE_MS",
    AcademicPlanDescript: "Data Analytics & Program Eval",
    admitType: "New Student",
    applied: 1,
    admitted: 1,
    denied: 0,
    grossDep: 1,
    netDep: 0
  },
  {
    id: 9,
    academicCareer: "Graduate",
    academicPlanCode: "ODMSA_CEDB",
    AcademicPlanDescript: "Data Mgt & Stat Analysis",
    admitType: "New Student",
    applied: 2,
    admitted: 1,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 10,
    academicCareer: "Graduate",
    academicPlanCode: "OSADM_MSED",
    AcademicPlanDescript: "UOnline-LE MSED Online SADM",
    admitType: "New Student",
    applied: 24,
    admitted: 11,
    denied: 4,
    grossDep: 9,
    netDep: 7
  },
  {
    id: 11,
    academicCareer: "Graduate",
    academicPlanCode: "SADM_MSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "New Student",
    applied: 3,
    admitted: 0,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 12,
    academicCareer: "Undergraduate",
    academicPlanCode: "ED_BSED_UN",
    AcademicPlanDescript: "Undeclared Education",
    admitType: "Transfer Student",
    applied: 1,
    admitted: 1,
    denied: 0,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 13,
    academicCareer: "Undergraduate",
    academicPlanCode: "EXPS_BSEXP",
    AcademicPlanDescript: "Exercise Physiology",
    admitType: "New Student",
    applied: 3,
    admitted: 3,
    denied: 0,
    grossDep: 3,
    netDep: 3
  },
  {
    id: 14,
    academicCareer: "Undergraduate",
    academicPlanCode: "SADM_BSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "New Student",
    applied: 6,
    admitted: 6,
    denied: 0,
    grossDep: 6,
    netDep: 5
  }
];

export { cols, rows };