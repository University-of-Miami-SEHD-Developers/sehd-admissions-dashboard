# SEHD Admissions Dashboard

A comprehensive dashboard for monitoring admissions metrics, analyzing enrollment trends, and tracking program performance for the School of Education and Human Development at the University of Miami.

![Dashboard Preview](./public/dashboard-preview.png)

## 📚 Overview

The SEHD Admissions Dashboard is a React-based application that provides administrators and staff with real-time insights into admissions and enrollment data. The dashboard features four main sections:

1. **Enrollment Goals** - Track progress against program enrollment targets
2. **Enrollment Trends** - View historical enrollment data and trends
3. **Program Analysis** - Analyze program performance and distribution
4. **Admissions Data** - Explore detailed admissions data by term

## 🔧 Features

- **Secure Authentication** - Role-based access control for admin and staff users
- **Interactive Data Visualization** - Charts, gauges, and data grids for intuitive data exploration
- **Departmental Filtering** - Filter data by department (KIN, EPS, TAL)
- **Multi-level Analysis** - View data across Bachelor's, Master's, and Doctoral programs
- **Responsive Design** - Optimized for both desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sehd-admissions-dashboard.git
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

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Demo Login Credentials

For testing purposes, use these credentials:

- **Admin User**:
  - Email: admin@miami.edu
  - Password: admin123

- **Staff User**:
  - Email: staff@miami.edu
  - Password: staff123

## 🛠️ Technology Stack

- **Frontend Framework**: React with Vite
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router v6
- **State Management**: React Context API
- **Data Visualization**: Chart.js, Recharts
- **Data Grid**: MUI X-Data-Grid
- **Authentication**: Custom JWT implementation (mock service)

## 📁 Project Structure

```
sehd-admissions-dashboard/
├── public/                  # Static files
├── src/
│   ├── assets/              # Images, fonts, etc.
│   ├── features/            # Feature-based modules
│   │   ├── admissions/      # Admissions data feature
│   │   ├── analysis/        # Program analysis feature
│   │   ├── auth/            # Authentication feature
│   │   ├── dashboard/       # Dashboard layout and navigation
│   │   ├── goals/           # Enrollment goals feature
│   │   └── trends/          # Enrollment trends feature
│   ├── shared/              # Shared components
│   │   ├── components/      # Reusable UI components
│   │   └── utils/           # Utility functions
│   ├── styles/              # Global CSS files
│   ├── App.jsx              # Main application component
│   ├── App.css              # App-specific styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── .eslintrc.cjs            # ESLint configuration
├── .gitignore               # Git ignore file
├── package.json             # Project dependencies
├── README.md                # Project documentation
└── vite.config.js           # Vite configuration
```

## 📊 Data Sources

The dashboard currently uses mock data for demonstration purposes. In a production environment, this would connect to:

- Student Information System APIs
- CRM systems (for applicant data)
- Data warehouse or analytics platform

## 🛣️ Roadmap

- [ ] Add data export functionality
- [ ] Implement year-over-year comparison views
- [ ] Integrate with actual University of Miami data sources
- [ ] Add user management functionality
- [ ] Create custom reporting features

## 💼 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

For questions or support, please contact the project team at `sehd-dashboard@miami.edu`.