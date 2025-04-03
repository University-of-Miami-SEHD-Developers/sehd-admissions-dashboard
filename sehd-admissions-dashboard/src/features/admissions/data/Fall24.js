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
    applied: 2,
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
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 3,
    academicCareer: "Graduate",
    academicPlanCode: "APPH_MSED",
    AcademicPlanDescript: "Applied Physiology",
    admitType: "New Student",
    applied: 30,
    admitted: 23,
    denied: 3,
    grossDep: 10,
    netDep: 8
  },
  {
    id: 4,
    academicCareer: "Graduate",
    academicPlanCode: "ATHT_MSAT",
    AcademicPlanDescript: "Athletic Training",
    admitType: "New Student",
    applied: 46,
    admitted: 30,
    denied: 15,
    grossDep: 18,
    netDep: 17
  },
  {
    id: 5,
    academicCareer: "Graduate",
    academicPlanCode: "CSIP_PHD",
    AcademicPlanDescript: "Community & Social Change",
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
    academicPlanCode: "EXPH_MSED",
    AcademicPlanDescript: "Exercise Physiology",
    admitType: "New Student",
    applied: 1,
    admitted: 1,
    denied: 0,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 7,
    academicCareer: "Graduate",
    academicPlanCode: "GPPE_MSED",
    AcademicPlanDescript: "Global Public Policy & Ed",
    admitType: "New Student",
    applied: 10,
    admitted: 4,
    denied: 5,
    grossDep: 2,
    netDep: 2
  },
  {
    id: 8,
    academicCareer: "Graduate",
    academicPlanCode: "HEED_EDD",
    AcademicPlanDescript: "Higher Education Leadership",
    admitType: "New Student",
    applied: 1,
    admitted: 0,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 9,
    academicCareer: "Graduate",
    academicPlanCode: "HSPE_MSED",
    AcademicPlanDescript: "Health Studies",
    admitType: "New Student",
    applied: 1,
    admitted: 0,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 10,
    academicCareer: "Graduate",
    academicPlanCode: "OAPLS_EDD",
    AcademicPlanDescript: "Applied Learning Sciences",
    admitType: "New Student",
    applied: 4,
    admitted: 3,
    denied: 0,
    grossDep: 3,
    netDep: 2
  },
  {
    id: 11,
    academicCareer: "Graduate",
    academicPlanCode: "OAPLS_MSED",
    AcademicPlanDescript: "Applied Learning Sciences",
    admitType: "New Student",
    applied: 12,
    admitted: 5,
    denied: 6,
    grossDep: 5,
    netDep: 5
  },
  {
    id: 12,
    academicCareer: "Graduate",
    academicPlanCode: "ODAPE_MS",
    AcademicPlanDescript: "Data Analytics & Program Eval",
    admitType: "New Student",
    applied: 6,
    admitted: 2,
    denied: 3,
    grossDep: 2,
    netDep: 2
  },
  {
    id: 13,
    academicCareer: "Graduate",
    academicPlanCode: "ODMSA_CEDB",
    AcademicPlanDescript: "Data Mgt & Stat Analysis",
    admitType: "New Student",
    applied: 2,
    admitted: 1,
    denied: 0,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 14,
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
    id: 15,
    academicCareer: "Graduate",
    academicPlanCode: "OSADM_MSED",
    AcademicPlanDescript: "UOnline-LE MSED Online SADM",
    admitType: "New Student",
    applied: 19,
    admitted: 10,
    denied: 4,
    grossDep: 10,
    netDep: 10
  },
  {
    id: 16,
    academicCareer: "Graduate",
    academicPlanCode: "RSSS_PHD",
    AcademicPlanDescript: "Research, Measurement & Eval",
    admitType: "New Student",
    applied: 1,
    admitted: 0,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 17,
    academicCareer: "Graduate",
    academicPlanCode: "SADM_MSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "New Student",
    applied: 67,
    admitted: 42,
    denied: 14,
    grossDep: 20,
    netDep: 17
  },
  {
    id: 18,
    academicCareer: "Graduate",
    academicPlanCode: "SEMS_PHD",
    AcademicPlanDescript: "Science, Ed & Math-Teach & Lear",
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
    academicPlanCode: "TLCS_PHD",
    AcademicPlanDescript: "Teaching and Learning",
    admitType: "New Student",
    applied: 2,
    admitted: 0,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 20,
    academicCareer: "Graduate",
    academicPlanCode: "WKSP_NDG",
    AcademicPlanDescript: "Workshop",
    admitType: "New Student",
    applied: 8,
    admitted: 8,
    denied: 0,
    grossDep: 8,
    netDep: 8
  },
  {
    id: 21,
    academicCareer: "Undergraduate",
    academicPlanCode: "CSC_BSED",
    AcademicPlanDescript: "Community & Social Change",
    admitType: "New Student",
    applied: 60,
    admitted: 46,
    denied: 14,
    grossDep: 5,
    netDep: 4
  },
  {
    id: 22,
    academicCareer: "Undergraduate",
    academicPlanCode: "ECED_BSED",
    AcademicPlanDescript: "Early Childhood Education",
    admitType: "New Student",
    applied: 16,
    admitted: 14,
    denied: 1,
    grossDep: 3,
    netDep: 3
  },
  {
    id: 23,
    academicCareer: "Undergraduate",
    academicPlanCode: "ED_BSED_UN",
    AcademicPlanDescript: "Undeclared Education",
    admitType: "New Student",
    applied: 17,
    admitted: 13,
    denied: 4,
    grossDep: 3,
    netDep: 3
  },
  {
    id: 24,
    academicCareer: "Undergraduate",
    academicPlanCode: "ELCL_BSED",
    AcademicPlanDescript: "Elem Ed/TESOL/For Lang/SpecEd",
    admitType: "New Student",
    applied: 1,
    admitted: 1,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 25,
    academicCareer: "Undergraduate",
    academicPlanCode: "ELEM_BSED",
    AcademicPlanDescript: "Elementary Education",
    admitType: "New Student",
    applied: 23,
    admitted: 12,
    denied: 10,
    grossDep: 2,
    netDep: 2
  },
  {
    id: 26,
    academicCareer: "Undergraduate",
    academicPlanCode: "ELED_BSED",
    AcademicPlanDescript: "Elementary Education",
    admitType: "New Student",
    applied: 32,
    admitted: 21,
    denied: 10,
    grossDep: 4,
    netDep: 4
  },
  {
    id: 27,
    academicCareer: "Undergraduate",
    academicPlanCode: "ELEDS_BSED",
    AcademicPlanDescript: "Elementary Ed Special Ed",
    admitType: "New Student",
    applied: 33,
    admitted: 22,
    denied: 10,
    grossDep: 2,
    netDep: 2
  },
  {
    id: 28,
    academicCareer: "Undergraduate",
    academicPlanCode: "EXP_BSED_UN",
    AcademicPlanDescript: "Exercise Physiology Undeclared",
    admitType: "New Student",
    applied: 6,
    admitted: 5,
    denied: 1,
    grossDep: 1,
    netDep: 1
  },
  {
    id: 29,
    academicCareer: "Undergraduate",
    academicPlanCode: "EXPS_BSEXP",
    AcademicPlanDescript: "Exercise Physiology",
    admitType: "New Student",
    applied: 133,
    admitted: 98,
    denied: 35,
    grossDep: 14,
    netDep: 13
  },
  {
    id: 30,
    academicCareer: "Undergraduate",
    academicPlanCode: "HSCI_BSHS",
    AcademicPlanDescript: "Health Science",
    admitType: "New Student",
    applied: 126,
    admitted: 86,
    denied: 40,
    grossDep: 7,
    netDep: 6
  },
  {
    id: 31,
    academicCareer: "Undergraduate",
    academicPlanCode: "HWS_BSHS",
    AcademicPlanDescript: "Public Health",
    admitType: "New Student",
    applied: 60,
    admitted: 33,
    denied: 27,
    grossDep: 4,
    netDep: 4
  },
  {
    id: 32,
    academicCareer: "Undergraduate",
    academicPlanCode: "SA_BSED_UN",
    AcademicPlanDescript: "Sport Admin Undeclared",
    admitType: "New Student",
    applied: 1,
    admitted: 1,
    denied: 0,
    grossDep: 0,
    netDep: 0
  },
  {
    id: 33,
    academicCareer: "Undergraduate",
    academicPlanCode: "SADM_BSED",
    AcademicPlanDescript: "Sport Administration",
    admitType: "New Student",
    applied: 150,
    admitted: 108,
    denied: 41,
    grossDep: 15,
    netDep: 14
  }
];

export { cols, rows };