import httpClient from '../services/httpClient';

export const reportPollution = async (pollutionData) => {
    return await httpClient.post('/pollution/report', pollutionData);
};

export const fetchPollutionData = async (location) => {
    return await httpClient.get(`/pollution/data?location=${location}`);
};
