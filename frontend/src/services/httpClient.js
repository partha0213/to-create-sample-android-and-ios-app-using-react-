// src/services/httpClient.js

import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:8000', // Ensure this matches your backend API URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default httpClient;
