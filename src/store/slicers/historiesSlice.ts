import { createSlice } from '@reduxjs/toolkit';

const historiesSlice = createSlice({
    name: 'histories',
    initialState: { items: [], item: {} },
    reducers: {
        getHistories: (state) => {
            state.items = [];
        },
        getHistorieById: (state) => {
            state.item = {}
        },
    },
});

export const { getHistories, getHistorieById } = historiesSlice.actions;
export default historiesSlice.reducer;