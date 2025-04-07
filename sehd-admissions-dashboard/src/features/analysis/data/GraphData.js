// Sample data - replace with your actual data
const graphData = {
    labels: ['Spring 22', 'Summer 22', 'Fall 22', 'Spring 23', 'Summer 23', 'Fall 23', 'Spring 24'],
    datasets: [
      {
        label: 'KIN',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
      {
        label: 'EPS',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
      {
        label: 'TAL',
        data: [18, 48, 77, 9, 100, 27, 40],
        borderColor: 'rgb(255, 206, 86)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        tension: 0.4,
      },
    ]
  };

export default graphData;