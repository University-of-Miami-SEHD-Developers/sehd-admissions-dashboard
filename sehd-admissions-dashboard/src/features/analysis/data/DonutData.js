// Bachelor's Program distribution data
const bachelorsData = {
    labels: ['KIN', 'EPS', 'TAL'],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: [
          '#3f51b5',
          '#2196f3',
          '#03a9f4',
          '#00bcd4',
          '#4caf50',
        ],
        borderColor: [
          '#303f9f',
          '#1976d2',
          '#0288d1',
          '#0097a7',
          '#388e3c',
        ],
        borderWidth: 1,
        hoverOffset: 4
      }
    ]
  };

  // Master's Program distribution data
  const mastersData = {
    labels: ['KIN', 'EPS', 'TAL'],
    datasets: [
      {
        data: [72, 18, 10],
        backgroundColor: [
          '#f44336',
          '#ff9800',
          '#ffeb3b',
          '#9c27b0',
          '#607d8b',
        ],
        borderColor: [
          '#d32f2f',
          '#f57c00',
          '#fbc02d',
          '#7b1fa2',
          '#455a64',
        ],
        borderWidth: 1,
        hoverOffset: 4
      }
    ]
  };

  // Doctoral Program distribution data
  const doctoralData = {
    labels: ['KIN', 'EPS', 'TAL'],
    datasets: [
      {
        data: [50, 35, 15],
        backgroundColor: [
          '#009688',
          '#4caf50',
          '#8bc34a',
          '#cddc39',
          '#ffc107',
        ],
        borderColor: [
          '#00796b',
          '#388e3c',
          '#689f38',
          '#afb42b',
          '#ffa000',
        ],
        borderWidth: 1,
        hoverOffset: 4
      }
    ]
};

export { bachelorsData, mastersData, doctoralData };