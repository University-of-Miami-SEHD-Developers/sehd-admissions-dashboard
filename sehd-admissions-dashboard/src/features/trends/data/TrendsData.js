// All programs by department
const programData = {
    // Bachelor's programs
    bachelor: {
      ALL: [
        {
          title: 'Community and Applied Psychological Studies, B.S.Ed. ',
          value: '421',
          interval: 'Total Enrolled',
          trend: 'up',
          data: [380, 385, 390, 395, 400, 405, 410, 415, 418, 420, 421, 421],
          department: 'EPS'
        },
        {
          title: 'Data Analytics & Intelligence for Social Impact B.S.Ed. (DAISI)',
          value: '356',
          interval: 'Total Enrolled',
          trend: 'up',
          data: [320, 325, 330, 335, 340, 345, 350, 352, 354, 355, 356, 356],
          department: 'EPS'
        },
        {
          title: 'Exercise Physiology, B.S.',
          value: '287',
          interval: 'Total Enrolled',
          trend: 'neutral',
          data: [285, 284, 285, 286, 287, 287, 287, 287, 287, 287, 287, 287],
          department: 'KIN'
        },
        {
          title: 'Sport Administration, B.S.Ed.',
          value: '179',
          interval: 'Total Enrolled',
          trend: 'down',
          data: [195, 193, 190, 188, 186, 184, 183, 182, 181, 180, 180, 179],
          department: 'KIN'
        },
        {
          title: 'Elementary Education/Exceptional Student Education, B.S.Ed.',
          value: '215',
          interval: 'Total Enrolled',
          trend: 'up',
          data: [195, 198, 200, 203, 205, 207, 210, 212, 213, 214, 215, 215],
          department: 'TAL'
        },
      ],
      KIN: [
        {
          title: 'Exercise Physiology, B.S.',
          value: '287',
          interval: 'Total Enrolled',
          trend: 'neutral',
          data: [285, 284, 285, 286, 287, 287, 287, 287, 287, 287, 287, 287]
        },
        {
          title: 'Sport Administration, B.S.Ed.',
          value: '179',
          interval: 'Total Enrolled',
          trend: 'down',
          data: [195, 193, 190, 188, 186, 184, 183, 182, 181, 180, 180, 179]
        }
      ],
      TAL: [
        {
          title: 'Elementary Education/Exceptional Student Education, B.S.Ed.',
          value: '215',
          interval: 'Total Enrolled',
          trend: 'up',
          data: [195, 198, 200, 203, 205, 207, 210, 212, 213, 214, 215, 215]
        }
      ],
      EPS: [
        {
          title: 'Community and Applied Psychological Studies, B.S.Ed. ',
          value: '421',
          interval: 'Total Enrolled',
          trend: 'up',
          data: [380, 385, 390, 395, 400, 405, 410, 415, 418, 420, 421, 421]
        },
        {
          title: 'Data Analytics & Intelligence for Social Impact B.S.Ed. (DAISI)',
          value: '356',
          interval: 'Total Enrolled',
          trend: 'up',
          data: [320, 325, 330, 335, 340, 345, 350, 352, 354, 355, 356, 356]
        }
      ]
    },
    
    // Master's programs
    master: {
      ALL: [
        {
          title: 'Higher Education Administration, M.S.Ed.',
          value: '165',
          interval: 'Total Enrolled',
          trend: 'up',
          data: [145, 148, 150, 152, 154, 156, 158, 160, 162, 163, 164, 165],
          department: 'EPS'
        },
        {
          title: 'Counseling, M.S.Ed.',
          value: '132',
          interval: 'Total Enrolled',
          trend: 'up',
          data: [120, 122, 124, 125, 126, 127, 128, 129, 130, 131, 132, 132],
          department: 'EPS'
        },
        {
          title: 'Applied Physiology, M.S.Ed. ',
          value: '117',
          interval: 'Total Enrolled',
          trend: 'neutral',
          data: [115, 115, 116, 116, 116, 117, 117, 117, 117, 117, 117, 117],
          department: 'KIN'
        },
        {
          title: 'Athletic Training, M.S.AT.',
          value: '95',
          interval: 'Total Enrolled',
          trend: 'down',
          data: [110, 108, 106, 104, 102, 100, 99, 98, 97, 96, 95, 95],
          department: 'KIN'
        },
        {
          title: 'Sport Administration, M.S.Ed.',
          value: '95',
          interval: 'Total Enrolled',
          trend: 'down',
          data: [110, 108, 106, 104, 102, 100, 99, 98, 97, 96, 95, 95],
          department: 'KIN'
        },
        {
          title: 'Education and Social Change, M.S.Ed.',
          value: '95',
          interval: 'Total Enrolled',
          trend: 'down',
          data: [110, 108, 106, 104, 102, 100, 99, 98, 97, 96, 95, 95],
          department: 'TAL'
        },
        {
          title: 'Special Education, M.S.Ed.',
          value: '95',
          interval: 'Total Enrolled',
          trend: 'down',
          data: [110, 108, 106, 104, 102, 100, 99, 98, 97, 96, 95, 95],
          department: 'TAL'
        }
      ],
      KIN: [
        {
          title: 'Applied Physiology, M.S.Ed. ',
          value: '117',
          interval: 'Total Enrolled',
          trend: 'neutral',
          data: [115, 115, 116, 116, 116, 117, 117, 117, 117, 117, 117, 117]
        },
        {
          title: 'Athletic Training, M.S.AT.',
          value: '95',
          interval: 'Total Enrolled',
          trend: 'down',
          data: [110, 108, 106, 104, 102, 100, 99, 98, 97, 96, 95, 95]
        },
        {
          title: 'Sport Administration, M.S.Ed.',
          value: '95',
          interval: 'Total Enrolled',
          trend: 'down',
          data: [110, 108, 106, 104, 102, 100, 99, 98, 97, 96, 95, 95]
        }
      ],
      TAL: [
        {
          title: 'Education and Social Change, M.S.Ed.',
          value: '95',
          interval: 'Total Enrolled',
          trend: 'down',
          data: [110, 108, 106, 104, 102, 100, 99, 98, 97, 96, 95, 95]
        },
        {
          title: 'Special Education, M.S.Ed.',
          value: '95',
          interval: 'Total Enrolled',
          trend: 'down',
          data: [110, 108, 106, 104, 102, 100, 99, 98, 97, 96, 95, 95]
        }
      ],
      EPS: [
        {
          title: 'Higher Education Administration, M.S.Ed.',
          value: '165',
          interval: 'Total Enrolled',
          trend: 'up',
          data: [145, 148, 150, 152, 154, 156, 158, 160, 162, 163, 164, 165]
        },
        {
          title: 'Counseling, M.S.Ed.',
          value: '132',
          interval: 'Total Enrolled',
          trend: 'up',
          data: [120, 122, 124, 125, 126, 127, 128, 129, 130, 131, 132, 132]
        }
      ]
    },
    
    // Doctoral programs
    doctoral: {
      ALL: [
        {
          title: 'Counseling Psychology, Ph.D.',
          value: '112',
          interval: 'Total Enrolled',
          trend: 'up',
          data: [95, 97, 99, 101, 103, 105, 107, 108, 109, 110, 111, 112],
          department: 'EPS'
        },
        {
          title: 'Community Well-Being, Ph.D.',
          value: '87',
          interval: 'Total Enrolled',
          trend: 'up',
          data: [75, 77, 79, 80, 81, 82, 83, 84, 85, 86, 87, 87],
          department: 'EPS'
        },
        {
          title: 'Executive Ed.D. in Higher Education Leadership',
          value: '62',
          interval: 'Total Enrolled',
          trend: 'neutral',
          data: [60, 60, 60, 61, 61, 61, 62, 62, 62, 62, 62, 62],
          department: 'EPS'
        },
        {
          title: 'Research, Measurement & Evaluation, Ph.D.',
          value: '34',
          interval: 'Total Enrolled',
          trend: 'down',
          data: [42, 41, 40, 39, 38, 37, 37, 36, 35, 35, 34, 34],
          department: 'EPS'
        },
        {
          title: 'Exercise Physiology, Ph.D.',
          value: '34',
          interval: 'Total Enrolled',
          trend: 'down',
          data: [42, 41, 40, 39, 38, 37, 37, 36, 35, 35, 34, 34],
          department: 'KIN'
        },
        {
          title: 'Teaching and Learning, Ph.D.',
          value: '34',
          interval: 'Total Enrolled',
          trend: 'down',
          data: [42, 41, 40, 39, 38, 37, 37, 36, 35, 35, 34, 34],
          department: 'TAL'
        }
      ],
      KIN: [
        {
          title: 'Exercise Physiology, Ph.D.',
          value: '34',
          interval: 'Total Enrolled',
          trend: 'down',
          data: [42, 41, 40, 39, 38, 37, 37, 36, 35, 35, 34, 34]
        }
      ],
      TAL: [
        {
          title: 'Teaching and Learning, Ph.D.',
          value: '34',
          interval: 'Total Enrolled',
          trend: 'down',
          data: [42, 41, 40, 39, 38, 37, 37, 36, 35, 35, 34, 34]
        }
      ],
      EPS: [
        {
          title: 'Counseling Psychology, Ph.D.',
          value: '112',
          interval: 'Total Enrolled',
          trend: 'up',
          data: [95, 97, 99, 101, 103, 105, 107, 108, 109, 110, 111, 112]
        },
        {
          title: 'Community Well-Being, Ph.D.',
          value: '87',
          interval: 'Total Enrolled',
          trend: 'up',
          data: [75, 77, 79, 80, 81, 82, 83, 84, 85, 86, 87, 87]
        },
        {
          title: 'Executive Ed.D. in Higher Education Leadership',
          value: '62',
          interval: 'Total Enrolled',
          trend: 'neutral',
          data: [60, 60, 60, 61, 61, 61, 62, 62, 62, 62, 62, 62]
        },
        {
          title: 'Research, Measurement & Evaluation, Ph.D.',
          value: '34',
          interval: 'Total Enrolled',
          trend: 'down',
          data: [42, 41, 40, 39, 38, 37, 37, 36, 35, 35, 34, 34]
        }
      ]
    }
  };

  export default programData;