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
    applied: 5,
    admitted: 5,
    denied: 0,
    grossDep: 5,
    netDep: 4
  },
  {
    id: 2,
    academicCareer: "Graduate",
    academicPlanCode: "ESOC_MSED",
    AcademicPlanDescript: "Education and Social Change",
    admitType: "New Student",
    applied: 2,
    admitted: 2,
    denied: 0,
    grossDep: 2,
    netDep: 1
  },
  {
    id: 3,
    academicCareer: "Graduate",
    academicPlanCode: "HEEM_MSED",
    AcademicPlanDescript: "Higher Ed/Enrollment Mgt",
    admitType: "New Student",
    applied: 2,
    admitted: 2,
    denied: 0,
    grossDep: 2,
    netDep: 2
  },
  {
    id: 4,
    academicCareer: "Graduate",
    academicPlanCode: "LMHC_CEDB",
    AcademicPlanDescript: "Latino Mental Health Cert",
    admitType: "New Student",
    applied: 1,
    admitted: 0,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 5,
    academicCareer: "Graduate",
    academicPlanCode: "OAPLS_EDD",
    AcademicPlanDescript: "Applied Learning Sciences",
    admitType: "New Student",
    applied: 59,
    admitted: 45,
    denied: 0,
    grossDep: 44,
    netDep: 34
  },
  {
    id: 6,
    academicCareer: "Graduate",
    academicPlanCode: "OAPLS_MSED",
    AcademicPlanDescript: "Applied Learning Sciences",
    admitType: "New Student",
    applied: 6,
    admitted: 4,
    denied: 0,
    grossDep: 3,
    netDep: 3
  },
  {
    id: 7,
    academicCareer: "Graduate",
    academicPlanCode: "ODMSA_CEDB",
    AcademicPlanDescript: "Data Mgt & Stat Analysis",
    admitType: "New Student",
    applied: 6,
    admitted: 4,
    denied: 0,
    grossDep: 4,
    netDep: 0
  },
  {
    id: 8,
    academicCareer: "Graduate",
    academicPlanCode: "OSADM_MSED",
    AcademicPlanDescript: "UOnline-LE MSED Online SADM",
    admitType: "New Student",
    applied: 28,
    admitted: 15,
    denied: 7,
    grossDep: 14,
    netDep: 10
  },
  {
    id: 9,
    academicCareer: "Graduate",
    academicPlanCode: "SADM_MSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "New Student",
    applied: 13,
    admitted: 7,
    denied: 4,
    grossDep: 7,
    netDep: 6
  },
  {
    id: 10,
    academicCareer: "Undergraduate",
    academicPlanCode: "CAPS_BSED",
    AcademicPlanDescript: "Community&AppliedPsych Studies",
    admitType: "New Student",
    applied: 14,
    admitted: 10,
    denied: 0,
    grossDep: 2,
    netDep: 2
  },
  {
    id: 11,
    academicCareer: "Undergraduate",
    academicPlanCode: "CAPS_BSED",
    AcademicPlanDescript: "Community&AppliedPsych Studies",
    admitType: "Transfer Student",
    applied: 4,
    admitted: 1,
    denied: 2,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 12,
    academicCareer: "Undergraduate",
    academicPlanCode: "ED_BSED_UN",
    AcademicPlanDescript: "Undeclared Education",
    admitType: "New Student",
    applied: 7,
    admitted: 6,
    denied: 0,
    grossDep: 3,
    netDep: 2
  },
  {
    id: 13,
    academicCareer: "Undergraduate",
    academicPlanCode: "ELEDS_BSED",
    AcademicPlanDescript: "Elementary Ed Special Ed",
    admitType: "New Student",
    applied: 25,
    admitted: 21,
    denied: 0,
    grossDep: 5,
    netDep: 4
  },
  {
    id: 14,
    academicCareer: "Undergraduate",
    academicPlanCode: "ELEDS_BSED",
    AcademicPlanDescript: "Elementary Ed Special Ed",
    admitType: "Transfer Student",
    applied: 4,
    admitted: 0,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 15,
    academicCareer: "Undergraduate",
    academicPlanCode: "EXPS_BSEXP",
    AcademicPlanDescript: "Exercise Physiology",
    admitType: "New Student",
    applied: 24,
    admitted: 19,
    denied: 2,
    grossDep: 6,
    netDep: 5
  },
  {
    id: 16,
    academicCareer: "Undergraduate",
    academicPlanCode: "EXPS_BSEXP",
    AcademicPlanDescript: "Exercise Physiology",
    admitType: "Transfer Student",
    applied: 10,
    admitted: 0,
    denied: 1,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 17,
    academicCareer: "Undergraduate",
    academicPlanCode: "SADM_BSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "New Student",
    applied: 35,
    admitted: 26,
    denied: 0,
    grossDep: 9,
    netDep: 7
  },
  {
    id: 18,
    academicCareer: "Undergraduate",
    academicPlanCode: "SADM_BSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "Transfer Student",
    applied: 5,
    admitted: 0,
    denied: 0,
    grossDep: 0,
    netDep: 0
  }
];

export { cols, rows };