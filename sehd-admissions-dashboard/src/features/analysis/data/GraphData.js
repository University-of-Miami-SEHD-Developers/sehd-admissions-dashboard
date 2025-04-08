// Sample data - replace with your actual data
const bachelorsData = {
    labels: ['Spring \'22', 'Summer \'22', 'Fall \'22', 'Spring \'23', 'Summer \'23', 'Fall \'23', 'Spring \'24', 'Fall \'24', 'Spring \'25'],
    datasets: [
      {
        label: 'KIN',
        data: [24, 10, 87, 15, 9, 104, 21, 6, 112],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
      {
        label: 'EPS',
        data: [4, 0, 6, 3, 0, 11, 7, 1, 23],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
      {
        label: 'TAL',
        data: [5, 0, 20, 5, 0, 11, 1, 1, 17],
        borderColor: 'rgb(255, 206, 86)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        tension: 0.4,
      },
    ]
  };

  const mastersData = {
    labels: ['Spring \'22', 'Summer \'22', 'Fall \'22', 'Spring \'23', 'Summer \'23', 'Fall \'23', 'Spring \'24', 'Fall \'24', 'Spring \'25'],
    datasets: [
      {
        label: 'KIN',
        data: [18, 39, 79, 26, 27, 97, 27, 41, 76],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
      {
        label: 'EPS',
        data: [3, 0, 32, 2, 13, 42, 13, 7, 70],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
      {
        label: 'TAL',
        data: [1, 0, 15, 5, 1, 13, 0, 1, 9],
        borderColor: 'rgb(255, 206, 86)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        tension: 0.4,
      },
    ]
  };

  const doctoralData = {
    labels: ['Spring \'22', 'Summer \'22', 'Fall \'22', 'Spring \'23', 'Summer \'23', 'Fall \'23', 'Spring \'24', 'Fall \'24', 'Spring \'25'],
    datasets: [
      {
        label: 'KIN',
        data: [0, 0, 4, 0, 0, 5, 0, 0, 3],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
      {
        label: 'EPS',
        data: [2, 0, 17, 0, 0, 20, 7, 1, 24],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
      {
        label: 'TAL',
        data: [33, 35, 66, 44, 34, 66, 32, 34, 83],
        borderColor: 'rgb(255, 206, 86)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        tension: 0.4,
      },
    ]
  };

export default { bachelorsData, mastersData, doctoralData };