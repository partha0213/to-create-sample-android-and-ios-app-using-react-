// src/api/auth/index.js

import httpClient from '../../services/httpClient'; // Make sure this path is correct

export const loginUser = async (credentials) => {
    try {
        const response = await httpClient.post('/auth/login', credentials);
        return response.data; // Return the response data directly
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Login failed');
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await httpClient.post('/auth/register', userData);
        return response.data; // Return the response data directly
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Registration failed');
    }
};

export const socialLogin = async (provider, accessToken) => {
    try {
        const response = await httpClient.post('/auth/social', { provider, accessToken });
        return response.data; // Return the response data directly
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Social login failed');
    }
};
