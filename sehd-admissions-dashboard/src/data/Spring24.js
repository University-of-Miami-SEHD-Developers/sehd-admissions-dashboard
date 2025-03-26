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
      applied: 2,
      admitted: 2,
      denied: 0,
      grossDep: 1,
      netDep: 1
    },
    {
      id: 2,
      academicCareer: "Graduate",
      academicPlanCode: "CNSM_MSED",
      AcademicPlanDescript: "Counseling Mental Health",
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
      academicPlanCode: "ESOC_MSED",
      AcademicPlanDescript: "Education and Social Change",
      admitType: "New Student",
      applied: 2,
      admitted: 1,
      denied: 0,
      grossDep: 0,
      netDep: 0
    },
    {
      id: 4,
      academicCareer: "Graduate",
      academicPlanCode: "HELD_EDD",
      AcademicPlanDescript: "Higher Education Leadership",
      admitType: "New Student",
      applied: 9,
      admitted: 7,
      denied: 0,
      grossDep: 7,
      netDep: 7
    },
    {
      id: 5,
      academicCareer: "Graduate",
      academicPlanCode: "HESD_MSED",
      AcademicPlanDescript: "Higher Ed/Stdnt Life & Dvlpmnt",
      admitType: "New Student",
      applied: 2,
      admitted: 2,
      denied: 0,
      grossDep: 2,
      netDep: 2
    },
    {
      id: 6,
      academicCareer: "Graduate",
      academicPlanCode: "OAPLS_EDD",
      AcademicPlanDescript: "Applied Learning Sciences",
      admitType: "New Student",
      applied: 52,
      admitted: 35,
      denied: 7,
      grossDep: 32,
      netDep: 26
    },
    {
      id: 7,
      academicCareer: "Graduate",
      academicPlanCode: "ODAPE_MS",
      AcademicPlanDescript: "Data Analytics & Program Eval",
      admitType: "New Student",
      applied: 26,
      admitted: 18,
      denied: 0,
      grossDep: 11,
      netDep: 11
    },
    {
      id: 8,
      academicCareer: "Graduate",
      academicPlanCode: "ODMSA_CEDB",
      AcademicPlanDescript: "Data Mgt & Stat Analysis",
      admitType: "New Student",
      applied: 4,
      admitted: 1,
      denied: 0,
      grossDep: 1,
      netDep: 1
    },
    {
      id: 9,
      academicCareer: "Graduate",
      academicPlanCode: "OEVAL_CEDB",
      AcademicPlanDescript: "Program Evaluation",
      admitType: "New Student",
      applied: 8,
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
      applied: 51,
      admitted: 27,
      denied: 9,
      grossDep: 19,
      netDep: 13
    },
    {
      id: 11,
      academicCareer: "Graduate",
      academicPlanCode: "SADM_MSED",
      AcademicPlanDescript: "Sport Administration",
      admitType: "New Student",
      applied: 15,
      admitted: 12,
      denied: 0,
      grossDep: 7,
      netDep: 5
    },
    {
      id: 12,
      academicCareer: "UnderacademicCareer",
      academicPlanCode: "CAPS_BSED",
      AcademicPlanDescript: "Community&AppliedPsych Studies",
      admitType: "New Student",
      applied: 19,
      admitted: 13,
      denied: 1,
      grossDep: 7,
      netDep: 6
    },
    {
      id: 13,
      academicCareer: "UnderacademicCareer",
      academicPlanCode: "CAPS_BSED",
      AcademicPlanDescript: "Community&AppliedPsych Studies",
      admitType: "Transfer Student",
      applied: 3,
      admitted: 0,
      denied: 0,
      grossDep: 0,
      netDep: 0
    },
    {
      id: 14,
      academicCareer: "UnderacademicCareer",
      academicPlanCode: "DASI_BS",
      AcademicPlanDescript: "Data Analytics Social Impact",
      admitType: "New Student",
      applied: 1,
      admitted: 0,
      denied: 0,
      grossDep: 0,
      netDep: 0
    },
    {
      id: 15,
      academicCareer: "UnderacademicCareer",
      academicPlanCode: "DASI_BS",
      AcademicPlanDescript: "Data Analytics Social Impact",
      admitType: "Transfer Student",
      applied: 1,
      admitted: 0,
      denied: 0,
      grossDep: 0,
      netDep: 0
    },
    {
      id: 16,
      academicCareer: "UnderacademicCareer",
      academicPlanCode: "ED_BSED_UN",
      AcademicPlanDescript: "Undeclared Education",
      admitType: "New Student",
      applied: 4,
      admitted: 3,
      denied: 0,
      grossDep: 1,
      netDep: 1
    },
    {
      id: 17,
      academicCareer: "UnderacademicCareer",
      academicPlanCode: "ED_BSED_UN",
      AcademicPlanDescript: "Undeclared Education",
      admitType: "Transfer Student",
      applied: 3,
      admitted: 1,
      denied: 0,
      grossDep: 1,
      netDep: 1
    },
    {
      id: 18,
      academicCareer: "UnderacademicCareer",
      academicPlanCode: "ELEDS_BSED",
      AcademicPlanDescript: "Elementary Ed Special Ed",
      admitType: "New Student",
      applied: 14,
      admitted: 8,
      denied: 1,
      grossDep: 1,
      netDep: 0
    },
    {
      id: 19,
      academicCareer: "UnderacademicCareer",
      academicPlanCode: "ELEDS_BSED",
      AcademicPlanDescript: "Elementary Ed Special Ed",
      admitType: "Transfer Student",
      applied: 6,
      admitted: 0,
      denied: 0,
      grossDep: 0,
      netDep: 0
    },
    {
      id: 20,
      academicCareer: "UnderacademicCareer",
      academicPlanCode: "EXPS_BSEXP",
      AcademicPlanDescript: "Exercise Physiology",
      admitType: "New Student",
      applied: 27,
      admitted: 25,
      denied: 2,
      grossDep: 10,
      netDep: 10
    },
    {
      id: 21,
      academicCareer: "UnderacademicCareer",
      academicPlanCode: "EXPS_BSEXP",
      AcademicPlanDescript: "Exercise Physiology",
      admitType: "Transfer Student",
      applied: 8,
      admitted: 1,
      denied: 0,
      grossDep: 1,
      netDep: 1
    },
    {
      id: 22,
      academicCareer: "UnderacademicCareer",
      academicPlanCode: "SADM_BSED",
      AcademicPlanDescript: "Sport Administration",
      admitType: "New Student",
      applied: 34,
      admitted: 28,
      denied: 0,
      grossDep: 9,
      netDep: 6
    },
    {
      id: 23,
      academicCareer: "UnderacademicCareer",
      academicPlanCode: "SADM_BSED",
      AcademicPlanDescript: "Sport Administration",
      admitType: "Transfer Student",
      applied: 13,
      admitted: 3,
      denied: 1,
      grossDep: 1,
      netDep: 1
    }
  ];

  export { cols, rows };