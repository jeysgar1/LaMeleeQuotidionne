import { createSlice } from '@reduxjs/toolkit';

const tachesSlice = createSlice({
    name: 'taches',
    initialState: { items: [], item: {} },
    reducers: {
        getTaches: (state) => {
            state.items = [];
        },
        getTacheById: (state) => {
            state.item = {}
        },
    },
});

export const { getTaches, getTacheById } = tachesSlice.actions;
export default tachesSlice.reducer;