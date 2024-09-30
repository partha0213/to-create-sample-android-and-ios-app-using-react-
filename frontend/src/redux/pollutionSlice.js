import { createSlice } from '@reduxjs/toolkit';

const pollutionSlice = createSlice({
    name: 'pollution',
    initialState: {
        data: [],
    },
    reducers: {
        setPollutionData(state, action) {
            state.data = action.payload;
        },
    },
});

export const { setPollutionData } = pollutionSlice.actions;
export default pollutionSlice.reducer;
