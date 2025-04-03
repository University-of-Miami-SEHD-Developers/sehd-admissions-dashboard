# SEHD Admissions Dashboard

A comprehensive dashboard application for the School of Education and Human Development (SEHD) to monitor and analyze admissions data across multiple academic terms.



## Overview

The SEHD Admissions Dashboard is a React-based web application that provides administrators and staff with real-time insights into admission trends, enrollment metrics, and program performance. The application features secure authentication, interactive data visualizations, and detailed data views across multiple academic terms.

## Features

- **Secure Authentication**: Login system with role-based access control (admin/staff)
- **Interactive Data Visualizations**:
  - Statistical cards with key performance metrics
  - Line charts for trend analysis
  - Doughnut charts for program distribution
  - Gradient gauges for goal tracking
- **Comprehensive Data Views**:
  - Tabbed interface for accessing data by term (Spring, Summer, Fall)
  - Detailed data grids with filtering and sorting capabilities
  - Admissions statistics by program and academic career
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices

## Project Structure

```
sehd-admissions-dashboard/
├── public/                  # Static files
├── src/
│   ├── assets/              # Images and icons
│   ├── components/
│   │   ├── auth/            # Authentication components
│   │   ├── grid/            # Data grid components
│   │   ├── layouts/         # Layout components
│   │   ├── visualizations/  # Visualization components
│   ├── context/             # React context providers
│   ├── data/                # Mock data files by term
│   ├── pages/               # Page components
│   ├── services/            # API and authentication services
│   ├── styles/              # CSS stylesheets
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── README.md                # Project documentation
```

## Technology Stack

- **Frontend Framework**: React with Vite
- **UI Libraries**: 
  - Material-UI (MUI) for components
  - Chart.js for data visualizations
  - Recharts for advanced charts
  - MUI X DataGrid for table displays
- **State Management**:
  - React Context API
  - React Hooks
- **Routing**:
  - React Router for navigation
- **Authentication**:
  - Context-based authentication

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm (v7.x or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-organization/sehd-admissions-dashboard.git
   cd sehd-admissions-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Login Credentials

For demonstration purposes, the following mock accounts are available:

- **Admin User**:
  - Email: admin@miami.edu
  - Password: admin123

- **Staff User**:
  - Email: staff@miami.edu
  - Password: staff123

## Application Sections

### Dashboards

1. **Goals**
   - Performance metrics displays using gauge visualizations
   - Tracks KPIs like admission rates, enrollment targets, and budget utilization

2. **Trends**
   - Statistical cards showing key metrics
   - Program enrollment breakdowns
   - Year-over-year comparison charts

3. **Analysis**
   - Detailed analysis by department (TAL, KIN, EPS)
   - Program distribution charts
   - Performance line charts

### Data

- Tabbed interface for viewing admissions data by term
- Interactive data grid with sorting, filtering, and pagination
- Comprehensive metrics including applied, admitted, denied, and deposited students

## Customization

### Theme

The application uses MUI's theming system with University of Miami brand colors:
- Primary Green: #005030
- Primary Orange: #f47321
- Light Gray: #e6e6e6
- Dark Gray: #4a4a4a

These can be modified in `src/styles/global.css`.

### Data Sources

Currently, the application uses mock data stored in the `src/data/` directory. In a production environment, these would be replaced with API calls to your backend services.

## Deployment

1. Build the production version:
   ```bash
   npm run build
   ```

2. The build artifacts will be stored in the `dist/` folder, ready to be deployed to your web server or hosting platform of choice.

## Future Enhancements

- Integration with real backend API
- Export functionality for reports (PDF, Excel)
- Advanced filtering and search capabilities
- User management interface for administrators
- Customizable dashboard layouts
- Email notification system for important metrics

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- University of Miami School of Education & Human Development
- Material-UI Team for the component library
- Chart.js and Recharts for the visualization libraries