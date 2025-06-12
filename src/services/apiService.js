// src/services/apiService.js
// Updated for local testing with better error handling and logging

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5145/api';

class ApiService {
    constructor() {
        this.baseURL = API_BASE_URL;
        console.log('API Service initialized with base URL:', this.baseURL);
    }

    // Get auth token from localStorage
    getAuthToken() {
        return localStorage.getItem('auth_token');
    }

    // Set auth token
    setAuthToken(token) {
        localStorage.setItem('auth_token', token);
        console.log('Auth token set successfully');
    }

    // Remove auth token
    removeAuthToken() {
        localStorage.removeItem('auth_token');
        console.log('Auth token removed');
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

    // Generic request method with better error handling and logging
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: this.getHeaders(options.includeAuth !== false),
            ...options,
        };

        console.log(`🌐 API Request: ${config.method || 'GET'} ${url}`);
        console.log('📋 Request config:', { ...config, body: config.body ? 'Present' : 'None' });

        try {
            const response = await fetch(url, config);
            
            console.log(`📡 API Response: ${response.status} ${response.statusText}`);
            
            if (response.status === 401) {
                console.warn('🔐 Unauthorized - removing token and redirecting to login');
                this.removeAuthToken();
                window.location.href = '/login';
                return;
            }

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('❌ API Error:', errorData);
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            // Handle empty responses
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                console.log('✅ API Success:', data);
                return data;
            }
            
            console.log('✅ API Success: Non-JSON response');
            return response;
        } catch (error) {
            console.error('💥 API Request failed:', error);
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

    // Test connection method
    async testConnection() {
        try {
            console.log('🔍 Testing API connection...');
            
            // First, test if the API is reachable
            const response = await fetch(`${this.baseURL.replace('/api', '')}/swagger/index.html`);
            if (response.ok) {
                console.log('✅ API server is running and reachable');
                return { success: true, message: 'API server is running' };
            } else {
                throw new Error(`Server responded with ${response.status}`);
            }
        } catch (error) {
            console.error('❌ API connection test failed:', error);
            return { success: false, error: error.message };
        }
    }

    // Authentication methods
    async login(email, password) {
        console.log('🔐 Attempting login for:', email);
        
        const response = await this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            includeAuth: false,
        });

        if (response.token) {
            this.setAuthToken(response.token);
            console.log('✅ Login successful');
        }

        return response;
    }

    async logout() {
        console.log('🚪 Logging out...');
        this.removeAuthToken();
        return Promise.resolve();
    }

    async getCurrentUser() {
        console.log('👤 Getting current user...');
        return this.get('/auth/profile');
    }

    // Admission data methods
    async getAllAdmissionData() {
        console.log('📊 Getting all admission data...');
        return this.get('/admissiondata');
    }

    async getAdmissionDataByTerm(termCode) {
        console.log(`📊 Getting admission data for term: ${termCode}`);
        return this.get(`/admissiondata/term/${termCode}`);
    }

    async getAdmissionDataByAcademicYear(academicYear) {
        console.log(`📊 Getting admission data for academic year: ${academicYear}`);
        return this.get(`/admissiondata/academic-year/${academicYear}`);
    }

    async filterAdmissionData(filters = {}) {
        console.log('🔍 Filtering admission data with filters:', filters);
        
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
        console.log(`📈 Getting admission summary for term: ${termCode}`);
        return this.get(`/admissiondata/summary/${termCode}`);
    }

    // Department methods
    async getDepartments() {
        console.log('🏢 Getting departments...');
        return this.get('/departments');
    }

    async getDepartment(id) {
        console.log(`🏢 Getting department: ${id}`);
        return this.get(`/departments/${id}`);
    }

    // Program methods
    async getPrograms() {
        console.log('🎓 Getting programs...');
        return this.get('/programs');
    }

    async getProgramsByDepartment(departmentCode) {
        console.log(`🎓 Getting programs for department: ${departmentCode}`);
        return this.get(`/programs/department/${departmentCode}`);
    }

    async getProgramsByType(programType) {
        console.log(`🎓 Getting programs of type: ${programType}`);
        return this.get(`/programs/type/${programType}`);
    }

    // Term methods
    async getTerms() {
        console.log('📅 Getting terms...');
        return this.get('/terms');
    }

    async getTerm(termCode) {
        console.log(`📅 Getting term: ${termCode}`);
        return this.get(`/terms/${termCode}`);
    }

    async getTermsByYear(year) {
        console.log(`📅 Getting terms for year: ${year}`);
        return this.get(`/terms/year/${year}`);
    }
}

export const apiService = new ApiService();
export default apiService;