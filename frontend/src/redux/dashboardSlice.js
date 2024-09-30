import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        data: {},
    },
    reducers: {
        setDashboardData(state, action) {
            state.data = action.payload;
        },
    },
});

export const { setDashboardData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
