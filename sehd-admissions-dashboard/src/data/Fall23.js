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
    academicPlanCode: "APLS_EDD",
    AcademicPlanDescript: "Applied Learning Sciences",
    admitType: "New Student",
    applied: 1,
    admitted: 0,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 2,
    academicCareer: "Graduate",
    academicPlanCode: "APLS_MSED",
    AcademicPlanDescript: "Applied Learning Sciences",
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
    academicPlanCode: "APPH_MSED",
    AcademicPlanDescript: "Applied Physiology",
    admitType: "New Student",
    applied: 31,
    admitted: 24,
    denied: 1,
    grossDep: 20,
    netDep: 15
  },
  {
    id: 4,
    academicCareer: "Graduate",
    academicPlanCode: "ATHT_MSAT",
    AcademicPlanDescript: "Athletic Training",
    admitType: "New Student",
    applied: 51,
    admitted: 33,
    denied: 18,
    grossDep: 24,
    netDep: 24
  },
  {
    id: 5,
    academicCareer: "Graduate",
    academicPlanCode: "CNSM_MSED",
    AcademicPlanDescript: "Counseling Mental Health",
    admitType: "New Student",
    applied: 122,
    admitted: 79,
    denied: 17,
    grossDep: 44,
    netDep: 42
  },
  {
    id: 6,
    academicCareer: "Graduate",
    academicPlanCode: "CNSS_MSED",
    AcademicPlanDescript: "School Counseling",
    admitType: "New Student",
    applied: 14,
    admitted: 8,
    denied: 1,
    grossDep: 5,
    netDep: 5
  },
  {
    id: 7,
    academicCareer: "Graduate",
    academicPlanCode: "CSPP_PHD",
    AcademicPlanDescript: "Counseling Psychology",
    admitType: "New Student",
    applied: 54,
    admitted: 34,
    denied: 20,
    grossDep: 8,
    netDep: 8
  },
  {
    id: 8,
    academicCareer: "Graduate",
    academicPlanCode: "EXPH_MSED",
    AcademicPlanDescript: "Exercise Physiology",
    admitType: "New Student",
    applied: 3,
    admitted: 2,
    denied: 0,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 9,
    academicCareer: "Graduate",
    academicPlanCode: "GPPE_MSED",
    AcademicPlanDescript: "Global Public Policy & Ed",
    admitType: "New Student",
    applied: 13,
    admitted: 6,
    denied: 7,
    grossDep: 3,
    netDep: 3
  },
  {
    id: 10,
    academicCareer: "Graduate",
    academicPlanCode: "HEEM_MSED",
    AcademicPlanDescript: "Higher Ed/Enrollment Mgt",
    admitType: "New Student",
    applied: 5,
    admitted: 4,
    denied: 0,
    grossDep: 4,
    netDep: 4
  },
  {
    id: 11,
    academicCareer: "Graduate",
    academicPlanCode: "HSCE_PHD",
    AcademicPlanDescript: "Cnslg & Counselor Education",
    admitType: "New Student",
    applied: 5,
    admitted: 2,
    denied: 3,
    grossDep: 2,
    netDep: 2
  },
  {
    id: 12,
    academicCareer: "Graduate",
    academicPlanCode: "HSPE_MSED",
    AcademicPlanDescript: "Health Studies",
    admitType: "New Student",
    applied: 2,
    admitted: 2,
    denied: 0,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 13,
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
    id: 14,
    academicCareer: "Graduate",
    academicPlanCode: "OAPLS_EDD",
    AcademicPlanDescript: "Applied Learning Sciences",
    admitType: "New Student",
    applied: 4,
    admitted: 1,
    denied: 0,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 15,
    academicCareer: "Graduate",
    academicPlanCode: "OAPLS_MSED",
    AcademicPlanDescript: "Applied Learning Sciences",
    admitType: "New Student",
    applied: 9,
    admitted: 3,
    denied: 1,
    grossDep: 2,
    netDep: 2
  },
  {
    id: 16,
    academicCareer: "Graduate",
    academicPlanCode: "ODAPE_MS",
    AcademicPlanDescript: "Data Analytics & Program Eval",
    admitType: "New Student",
    applied: 12,
    admitted: 10,
    denied: 0,
    grossDep: 8,
    netDep: 7
  },
  {
    id: 17,
    academicCareer: "Graduate",
    academicPlanCode: "ODMSA_CEDB",
    AcademicPlanDescript: "Data Mgt & Stat Analysis",
    admitType: "New Student",
    applied: 3,
    admitted: 2,
    denied: 0,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 18,
    academicCareer: "Graduate",
    academicPlanCode: "OEVAL_CEDB",
    AcademicPlanDescript: "Program Evaluation",
    admitType: "New Student",
    applied: 1,
    admitted: 0,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 19,
    academicCareer: "Graduate",
    academicPlanCode: "OSADM_MSED",
    AcademicPlanDescript: "UOnline-LE MSED Online SADM",
    admitType: "New Student",
    applied: 30,
    admitted: 16,
    denied: 4,
    grossDep: 16,
    netDep: 16
  },
  {
    id: 20,
    academicCareer: "Graduate",
    academicPlanCode: "RSSS_PHD",
    AcademicPlanDescript: "Research, Measurement & Eval",
    admitType: "New Student",
    applied: 3,
    admitted: 2,
    denied: 0,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 21,
    academicCareer: "Graduate",
    academicPlanCode: "SADM_MSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "New Student",
    applied: 65,
    admitted: 44,
    denied: 19,
    grossDep: 28,
    netDep: 23
  },
  {
    id: 22,
    academicCareer: "Graduate",
    academicPlanCode: "SEMS_PHD",
    AcademicPlanDescript: "Science, Ed & Math-Teach & Lear",
    admitType: "New Student",
    applied: 3,
    admitted: 0,
    denied: 1,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 23,
    academicCareer: "Graduate",
    academicPlanCode: "TLSE_PHD",
    AcademicPlanDescript: "Tchng & Lrng Sp Pops",
    admitType: "New Student",
    applied: 1,
    admitted: 0,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 24,
    academicCareer: "Undergraduate",
    academicPlanCode: "CAPS_BSED",
    AcademicPlanDescript: "Community&AppliedPsych Studies",
    admitType: "New Student",
    applied: 39,
    admitted: 33,
    denied: 6,
    grossDep: 11,
    netDep: 11
  },
  {
    id: 25,
    academicCareer: "Undergraduate",
    academicPlanCode: "ECED_BSED",
    AcademicPlanDescript: "Early Childhood Education",
    admitType: "New Student",
    applied: 20,
    admitted: 17,
    denied: 3,
    grossDep: 9,
    netDep: 9
  },
  {
    id: 26,
    academicCareer: "Undergraduate",
    academicPlanCode: "ED_BSED_UN",
    AcademicPlanDescript: "Undeclared Education",
    admitType: "New Student",
    applied: 21,
    admitted: 18,
    denied: 3,
    grossDep: 11,
    netDep: 11
  },
  {
    id: 27,
    academicCareer: "Undergraduate",
    academicPlanCode: "ELEM_BSED",
    AcademicPlanDescript: "Elementary Education",
    admitType: "New Student",
    applied: 20,
    admitted: 17,
    denied: 3,
    grossDep: 7,
    netDep: 7
  },
  {
    id: 28,
    academicCareer: "Undergraduate",
    academicPlanCode: "ELED_BSED",
    AcademicPlanDescript: "Elementary Education",
    admitType: "New Student",
    applied: 14,
    admitted: 11,
    denied: 3,
    grossDep: 5,
    netDep: 5
  },
  {
    id: 29,
    academicCareer: "Undergraduate",
    academicPlanCode: "ELEDS_BSED",
    AcademicPlanDescript: "Elementary Ed Special Ed",
    admitType: "New Student",
    applied: 24,
    admitted: 20,
    denied: 4,
    grossDep: 12,
    netDep: 12
  },
  {
    id: 30,
    academicCareer: "Undergraduate",
    academicPlanCode: "EXP_BSED_UN",
    AcademicPlanDescript: "Exercise Physiology Undeclared",
    admitType: "New Student",
    applied: 3,
    admitted: 3,
    denied: 0,
    grossDep: 3,
    netDep: 3
  },
  {
    id: 31,
    academicCareer: "Undergraduate",
    academicPlanCode: "EXPS_BSEXP",
    AcademicPlanDescript: "Exercise Physiology",
    admitType: "New Student",
    applied: 130,
    admitted: 108,
    denied: 22,
    grossDep: 65,
    netDep: 64
  },
  {
    id: 32,
    academicCareer: "Undergraduate",
    academicPlanCode: "HSCI_BSHS",
    AcademicPlanDescript: "Health Science",
    admitType: "New Student",
    applied: 101,
    admitted: 86,
    denied: 15,
    grossDep: 51,
    netDep: 49
  },
  {
    id: 33,
    academicCareer: "Undergraduate",
    academicPlanCode: "HWS_BSHS",
    AcademicPlanDescript: "Public Health",
    admitType: "New Student",
    applied: 45,
    admitted: 38,
    denied: 7,
    grossDep: 20,
    netDep: 20
  },
  {
    id: 34,
    academicCareer: "Undergraduate",
    academicPlanCode: "SADM_BSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "New Student",
    applied: 117,
    admitted: 99,
    denied: 18,
    grossDep: 54,
    netDep: 53
  }
];

export { cols, rows };