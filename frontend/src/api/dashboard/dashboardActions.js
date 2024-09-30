import httpClient from '../services/httpClient';

export const fetchDashboardData = async (userId) => {
    return await httpClient.get(`/dashboard/${userId}`);
};
