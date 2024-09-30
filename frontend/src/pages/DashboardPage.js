import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../api/dashboard';
import { setDashboardData } from '../redux/dashboardSlice';

const DashboardPage = () => {
    const dispatch = useDispatch();
    const dashboardData = useSelector((state) => state.dashboard.data);
    const userId = "testuser"; // Replace with dynamic user ID

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchDashboardData(userId);
            dispatch(setDashboardData(response.data));
        };
        fetchData();
    }, [dispatch]);

    return (
        <div>
            <h2>Dashboard</h2>
            <pre>{JSON.stringify(dashboardData, null, 2)}</pre>
        </div>
    );
};

export default DashboardPage;
