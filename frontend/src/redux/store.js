import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import pollutionReducer from './pollutionSlice';
import dashboardReducer from './dashboardSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        pollution: pollutionReducer,
        dashboard: dashboardReducer,
    },
});

export default store;
