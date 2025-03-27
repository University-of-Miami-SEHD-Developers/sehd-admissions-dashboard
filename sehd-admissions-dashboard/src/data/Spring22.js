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
    admitted: 3,
    denied: 1,
    grossDep: 2,
    netDep: 2
  },
  {
    id: 2,
    academicCareer: "Graduate",
    academicPlanCode: "ATHT_MSAT",
    AcademicPlanDescript: "Athletic Training",
    admitType: "New Student",
    applied: 1,
    admitted: 0,
    denied: 1,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 3,
    academicCareer: "Graduate",
    academicPlanCode: "CNSM_MSED",
    AcademicPlanDescript: "Counseling Mental Health",
    admitType: "New Student",
    applied: 1,
    admitted: 1,
    denied: 0,
    grossDep: 1,
    netDep: 0
  },
  {
    id: 4,
    academicCareer: "Graduate",
    academicPlanCode: "CNSS_MSED",
    AcademicPlanDescript: "School Counseling",
    admitType: "New Student",
    applied: 1,
    admitted: 1,
    denied: 0,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 5,
    academicCareer: "Graduate",
    academicPlanCode: "ESOC_MSED",
    AcademicPlanDescript: "Education and Social Change",
    admitType: "New Student",
    applied: 3,
    admitted: 3,
    denied: 0,
    grossDep: 3,
    netDep: 3
  },
  {
    id: 6,
    academicCareer: "Graduate",
    academicPlanCode: "OAPLS_EDD",
    AcademicPlanDescript: "Applied Learning Sciences",
    admitType: "New Student",
    applied: 64,
    admitted: 37,
    denied: 0,
    grossDep: 36,
    netDep: 34
  },
  {
    id: 7,
    academicCareer: "Graduate",
    academicPlanCode: "OSADM_MSED",
    AcademicPlanDescript: "UOnline-LE MSED Online SADM",
    admitType: "New Student",
    applied: 25,
    admitted: 13,
    denied: 7,
    grossDep: 12,
    netDep: 8
  },
  {
    id: 8,
    academicCareer: "Graduate",
    academicPlanCode: "SADM_MSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "New Student",
    applied: 9,
    admitted: 6,
    denied: 3,
    grossDep: 3,
    netDep: 3
  },
  {
    id: 9,
    academicCareer: "Graduate",
    academicPlanCode: "WKSP_NDG",
    AcademicPlanDescript: "Workshop",
    admitType: "New Student",
    applied: 1,
    admitted: 1,
    denied: 0,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 10,
    academicCareer: "Undergraduate",
    academicPlanCode: "CAPS_BSED",
    AcademicPlanDescript: "Community&AppliedPsych Studies",
    admitType: "New Student",
    applied: 9,
    admitted: 8,
    denied: 1,
    grossDep: 5,
    netDep: 4
  },
  {
    id: 11,
    academicCareer: "Undergraduate",
    academicPlanCode: "CAPS_BSED",
    AcademicPlanDescript: "Community&AppliedPsych Studies",
    admitType: "Transfer Student",
    applied: 5,
    admitted: 4,
    denied: 1,
    grossDep: 4,
    netDep: 4
  },
  {
    id: 12,
    academicCareer: "Undergraduate",
    academicPlanCode: "ED_BSED_UN",
    AcademicPlanDescript: "Undeclared Education",
    admitType: "New Student",
    applied: 3,
    admitted: 3,
    denied: 0,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 13,
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
    id: 14,
    academicCareer: "Undergraduate",
    academicPlanCode: "ELEDS_BSED",
    AcademicPlanDescript: "Elementary Ed Special Ed",
    admitType: "New Student",
    applied: 24,
    admitted: 19,
    denied: 5,
    grossDep: 12,
    netDep: 10
  },
  {
    id: 15,
    academicCareer: "Undergraduate",
    academicPlanCode: "ELEDS_BSED",
    AcademicPlanDescript: "Elementary Ed Special Ed",
    admitType: "Transfer Student",
    applied: 2,
    admitted: 1,
    denied: 1,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 16,
    academicCareer: "Undergraduate",
    academicPlanCode: "EXPS_BSEXP",
    AcademicPlanDescript: "Exercise Physiology",
    admitType: "New Student",
    applied: 28,
    admitted: 26,
    denied: 2,
    grossDep: 20,
    netDep: 19
  },
  {
    id: 17,
    academicCareer: "Undergraduate",
    academicPlanCode: "EXPS_BSEXP",
    AcademicPlanDescript: "Exercise Physiology",
    admitType: "Transfer Student",
    applied: 2,
    admitted: 2,
    denied: 0,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 18,
    academicCareer: "Undergraduate",
    academicPlanCode: "HSCI_BSHS",
    AcademicPlanDescript: "Health Science",
    admitType: "New Student",
    applied: 12,
    admitted: 9,
    denied: 3,
    grossDep: 5,
    netDep: 5
  },
  {
    id: 19,
    academicCareer: "Undergraduate",
    academicPlanCode: "HSCI_BSHS",
    AcademicPlanDescript: "Health Science",
    admitType: "Transfer Student",
    applied: 4,
    admitted: 3,
    denied: 1,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 20,
    academicCareer: "Undergraduate",
    academicPlanCode: "HWS_BSHS",
    AcademicPlanDescript: "Public Health",
    admitType: "New Student",
    applied: 4,
    admitted: 2,
    denied: 2,
    grossDep: 2,
    netDep: 2
  },
  {
    id: 21,
    academicCareer: "Undergraduate",
    academicPlanCode: "SADM_BSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "New Student",
    applied: 42,
    admitted: 38,
    denied: 4,
    grossDep: 33,
    netDep: 28
  },
  {
    id: 22,
    academicCareer: "Undergraduate",
    academicPlanCode: "SADM_BSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "Transfer Student",
    applied: 2,
    admitted: 1,
    denied: 1,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 23,
    academicCareer: "Undergraduate",
    academicPlanCode: "SMED_BSED",
    AcademicPlanDescript: "Science Education",
    admitType: "New Student",
    applied: 1,
    admitted: 1,
    denied: 0,
    grossDep: 1,
    netDep: 1
  }
];

export { cols, rows };