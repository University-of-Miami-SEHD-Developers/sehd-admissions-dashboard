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
    academicPlanCode: "APLS_MSED",
    AcademicPlanDescript: "Applied Learning Sciences",
    admitType: "New Student",
    applied: 2,
    admitted: 0,
    denied: 2,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 2,
    academicCareer: "Graduate",
    academicPlanCode: "APPH_MSED",
    AcademicPlanDescript: "Applied Physiology",
    admitType: "New Student",
    applied: 32,
    admitted: 22,
    denied: 3,
    grossDep: 13,
    netDep: 11
  },
  {
    id: 3,
    academicCareer: "Graduate",
    academicPlanCode: "CNSF_MSED",
    AcademicPlanDescript: "Coun Marriage & Family Therapy",
    admitType: "New Student",
    applied: 11,
    admitted: 3,
    denied: 7,
    grossDep: 3,
    netDep: 2
  },
  {
    id: 4,
    academicCareer: "Graduate",
    academicPlanCode: "CNSM_MSED",
    AcademicPlanDescript: "Counseling Mental Health",
    admitType: "New Student",
    applied: 129,
    admitted: 82,
    denied: 30,
    grossDep: 37,
    netDep: 31
  },
  {
    id: 5,
    academicCareer: "Graduate",
    academicPlanCode: "CNSS_MSED",
    AcademicPlanDescript: "School Counseling",
    admitType: "New Student",
    applied: 33,
    admitted: 28,
    denied: 3,
    grossDep: 11,
    netDep: 9
  },
  {
    id: 6,
    academicCareer: "Graduate",
    academicPlanCode: "CSIP_PHD",
    AcademicPlanDescript: "Community & Social Change",
    admitType: "New Student",
    applied: 7,
    admitted: 0,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 7,
    academicCareer: "Graduate",
    academicPlanCode: "CSPP_PHD",
    AcademicPlanDescript: "Counseling Psychology",
    admitType: "New Student",
    applied: 70,
    admitted: 33,
    denied: 37,
    grossDep: 4,
    netDep: 4
  },
  {
    id: 8,
    academicCareer: "Graduate",
    academicPlanCode: "ESOC_MSED",
    AcademicPlanDescript: "Education and Social Change",
    admitType: "New Student",
    applied: 3,
    admitted: 3,
    denied: 0,
    grossDep: 2,
    netDep: 2
  },
  {
    id: 9,
    academicCareer: "Graduate",
    academicPlanCode: "HEEM_MSED",
    AcademicPlanDescript: "Higher Ed/Enrollment Mgt",
    admitType: "New Student",
    applied: 15,
    admitted: 11,
    denied: 3,
    grossDep: 7,
    netDep: 7
  },
  {
    id: 10,
    academicCareer: "Graduate",
    academicPlanCode: "HSCE_PHD",
    AcademicPlanDescript: "Cnslg & Counselor Education",
    admitType: "New Student",
    applied: 2,
    admitted: 0,
    denied: 2,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 11,
    academicCareer: "Graduate",
    academicPlanCode: "INHP_PHD",
    AcademicPlanDescript: "Human & Social Development",
    admitType: "New Student",
    applied: 1,
    admitted: 0,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 12,
    academicCareer: "Graduate",
    academicPlanCode: "OAPLS_EDD",
    AcademicPlanDescript: "Applied Learning Sciences",
    admitType: "New Student",
    applied: 1,
    admitted: 0,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 13,
    academicCareer: "Graduate",
    academicPlanCode: "OAPLS_MSED",
    AcademicPlanDescript: "Applied Learning Sciences",
    admitType: "New Student",
    applied: 13,
    admitted: 7,
    denied: 2,
    grossDep: 4,
    netDep: 3
  },
  {
    id: 14,
    academicCareer: "Graduate",
    academicPlanCode: "ODAPE_MS",
    AcademicPlanDescript: "Data Analytics & Program Eval",
    admitType: "New Student",
    applied: 12,
    admitted: 9,
    denied: 0,
    grossDep: 5,
    netDep: 4
  },
  {
    id: 15,
    academicCareer: "Graduate",
    academicPlanCode: "ODMSA_CEDB",
    AcademicPlanDescript: "Data Mgt & Stat Analysis",
    admitType: "New Student",
    applied: 4,
    admitted: 3,
    denied: 0,
    grossDep: 2,
    netDep: 2
  },
  {
    id: 16,
    academicCareer: "Graduate",
    academicPlanCode: "OEVAL_CEDB",
    AcademicPlanDescript: "Program Evaluation",
    admitType: "New Student",
    applied: 5,
    admitted: 4,
    denied: 0,
    grossDep: 2,
    netDep: 1
  },
  {
    id: 17,
    academicCareer: "Graduate",
    academicPlanCode: "OSADM_MSED",
    AcademicPlanDescript: "UOnline-LE MSED Online SADM",
    admitType: "New Student",
    applied: 41,
    admitted: 23,
    denied: 14,
    grossDep: 21,
    netDep: 20
  },
  {
    id: 18,
    academicCareer: "Graduate",
    academicPlanCode: "RSSS_PHD",
    AcademicPlanDescript: "Research, Measurement & Eval",
    admitType: "New Student",
    applied: 3,
    admitted: 0,
    denied: 1,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 19,
    academicCareer: "Graduate",
    academicPlanCode: "SADM_MSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "New Student",
    applied: 90,
    admitted: 62,
    denied: 16,
    grossDep: 27,
    netDep: 19
  },
  {
    id: 20,
    academicCareer: "Graduate",
    academicPlanCode: "TLCS_PHD",
    AcademicPlanDescript: "Teaching and Learning",
    admitType: "New Student",
    applied: 3,
    admitted: 0,
    denied: 1,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 21,
    academicCareer: "Graduate",
    academicPlanCode: "WKSP_NDG",
    AcademicPlanDescript: "Workshop",
    admitType: "New Student",
    applied: 2,
    admitted: 2,
    denied: 0,
    grossDep: 2,
    netDep: 2
  },
  {
    id: 22,
    academicCareer: "Undergraduate",
    academicPlanCode: "CAPS_BSED",
    AcademicPlanDescript: "Community&AppliedPsych Studies",
    admitType: "New Student",
    applied: 36,
    admitted: 30,
    denied: 6,
    grossDep: 17,
    netDep: 17
  },
  {
    id: 23,
    academicCareer: "Undergraduate",
    academicPlanCode: "CAPS_BSED",
    AcademicPlanDescript: "Community&AppliedPsych Studies",
    admitType: "Transfer Student",
    applied: 8,
    admitted: 6,
    denied: 2,
    grossDep: 4,
    netDep: 4
  },
  {
    id: 24,
    academicCareer: "Undergraduate",
    academicPlanCode: "ED_BSED_UN",
    AcademicPlanDescript: "Undeclared Education",
    admitType: "New Student",
    applied: 21,
    admitted: 17,
    denied: 4,
    grossDep: 14,
    netDep: 14
  },
  {
    id: 25,
    academicCareer: "Undergraduate",
    academicPlanCode: "ED_BSED_UN",
    AcademicPlanDescript: "Undeclared Education",
    admitType: "Transfer Student",
    applied: 2,
    admitted: 2,
    denied: 0,
    grossDep: 2,
    netDep: 2
  },
  {
    id: 26,
    academicCareer: "Undergraduate",
    academicPlanCode: "ELEM_BSED",
    AcademicPlanDescript: "Elementary Education",
    admitType: "New Student",
    applied: 30,
    admitted: 25,
    denied: 5,
    grossDep: 15,
    netDep: 15
  },
  {
    id: 27,
    academicCareer: "Undergraduate",
    academicPlanCode: "ELEM_BSED",
    AcademicPlanDescript: "Elementary Education",
    admitType: "Transfer Student",
    applied: 3,
    admitted: 1,
    denied: 2,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 28,
    academicCareer: "Undergraduate",
    academicPlanCode: "ELEDS_BSED",
    AcademicPlanDescript: "Elementary Ed Special Ed",
    admitType: "New Student",
    applied: 42,
    admitted: 36,
    denied: 6,
    grossDep: 26,
    netDep: 26
  },
  {
    id: 29,
    academicCareer: "Undergraduate",
    academicPlanCode: "ELEDS_BSED",
    AcademicPlanDescript: "Elementary Ed Special Ed",
    admitType: "Transfer Student",
    applied: 3,
    admitted: 1,
    denied: 2,
    grossDep: 1,
    netDep: 0
  },
  {
    id: 30,
    academicCareer: "Undergraduate",
    academicPlanCode: "EXPS_BSEXP",
    AcademicPlanDescript: "Exercise Physiology",
    admitType: "New Student",
    applied: 149,
    admitted: 133,
    denied: 16,
    grossDep: 89,
    netDep: 87
  },
  {
    id: 31,
    academicCareer: "Undergraduate",
    academicPlanCode: "EXPS_BSEXP",
    AcademicPlanDescript: "Exercise Physiology",
    admitType: "Transfer Student",
    applied: 12,
    admitted: 6,
    denied: 6,
    grossDep: 4,
    netDep: 4
  },
  {
    id: 32,
    academicCareer: "Undergraduate",
    academicPlanCode: "HSCI_BSHS",
    AcademicPlanDescript: "Health Science",
    admitType: "New Student",
    applied: 83,
    admitted: 60,
    denied: 23,
    grossDep: 40,
    netDep: 40
  },
  {
    id: 33,
    academicCareer: "Undergraduate",
    academicPlanCode: "HWS_BSHS",
    AcademicPlanDescript: "Public Health",
    admitType: "New Student",
    applied: 40,
    admitted: 30,
    denied: 10,
    grossDep: 21,
    netDep: 21
  },
  {
    id: 34,
    academicCareer: "Undergraduate",
    academicPlanCode: "SADM_BSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "New Student",
    applied: 134,
    admitted: 113,
    denied: 21,
    grossDep: 66,
    netDep: 66
  },
  {
    id: 35,
    academicCareer: "Undergraduate",
    academicPlanCode: "SADM_BSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "Transfer Student",
    applied: 7,
    admitted: 2,
    denied: 5,
    grossDep: 2,
    netDep: 1
  }
];

export { cols, rows };