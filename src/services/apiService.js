// src/services/apiService.js
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://localhost:7013/api';

class ApiService {
    constructor() {
        this.baseURL = API_BASE_URL;
    }

    // Get auth token from localStorage
    getAuthToken() {
        return localStorage.getItem('auth_token');
    }

    // Set auth token
    setAuthToken(token) {
        localStorage.setItem('auth_token', token);
    }

    // Remove auth token
    removeAuthToken() {
        localStorage.removeItem('auth_token');
    }

    // Common headers
    getHeaders(includeAuth = true) {
        const headers = {
            'Content-Type': 'application/json',
        };

        if (includeAuth) {
            const token = this.getAuthToken();
            if (token) {
                headers.Authorization = `Bearer ${token}`;
            }
        }

        return headers;
    }

    // Generic request method
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: this.getHeaders(options.includeAuth !== false),
            ...options,
        };

        try {
            const response = await fetch(url, config);
            
            if (response.status === 401) {
                // Token expired or invalid
                this.removeAuthToken();
                window.location.href = '/login';
                return;
            }

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            // Handle empty responses
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return await response.json();
            }
            
            return response;
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    // GET request
    async get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    }

    // POST request
    async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    // PUT request
    async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    // DELETE request
    async delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    }

    // Authentication methods
    async login(email, password) {
        const response = await this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            includeAuth: false,
        });

        if (response.token) {
            this.setAuthToken(response.token);
        }

        return response;
    }

    async logout() {
        this.removeAuthToken();
        return Promise.resolve();
    }

    async getCurrentUser() {
        return this.get('/auth/profile');
    }

    // Admission data methods
    async getAllAdmissionData() {
        return this.get('/admissiondata');
    }

    async getAdmissionDataByTerm(termCode) {
        return this.get(`/admissiondata/term/${termCode}`);
    }

    async getAdmissionDataByAcademicYear(academicYear) {
        return this.get(`/admissiondata/academic-year/${academicYear}`);
    }

    async filterAdmissionData(filters = {}) {
        const queryParams = new URLSearchParams();
        
        Object.entries(filters).forEach(([key, value]) => {
            if (value && value !== 'All') {
                queryParams.append(key, value);
            }
        });

        const queryString = queryParams.toString();
        const endpoint = queryString ? `/admissiondata/filter?${queryString}` : '/admissiondata/filter';
        
        return this.get(endpoint);
    }

    async getAdmissionSummary(termCode) {
        return this.get(`/admissiondata/summary/${termCode}`);
    }

    // Department methods
    async getDepartments() {
        return this.get('/departments');
    }

    async getDepartment(id) {
        return this.get(`/departments/${id}`);
    }

    // Program methods
    async getPrograms() {
        return this.get('/programs');
    }

    async getProgramsByDepartment(departmentCode) {
        return this.get(`/programs/department/${departmentCode}`);
    }

    async getProgramsByType(programType) {
        return this.get(`/programs/type/${programType}`);
    }

    // Term methods
    async getTerms() {
        return this.get('/terms');
    }

    async getTerm(termCode) {
        return this.get(`/terms/${termCode}`);
    }

    async getTermsByYear(year) {
        return this.get(`/terms/year/${year}`);
    }

    // Migration methods (admin only)
    async getMigrationStatus() {
        return this.get('/migration/status');
    }

    async migrateData() {
        return this.post('/migration/migrate');
    }
}

export const apiService = new ApiService();
export default apiService;