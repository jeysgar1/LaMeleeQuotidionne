import { createSlice } from '@reduxjs/toolkit';

const apiSpecificationSlice : any = createSlice({
    name: 'apiSpecifications',
    initialState: { items: [], item: {} },
    reducers: {
        getApiSpecifications: (state) => {
            state.items = [];
        },
        getApiSpecificationById: (state) => {
            state.item = {}
        },
    },
});

export const { getApiSpecifications, getApiSpecificationById } = apiSpecificationSlice.actions;
export default apiSpecificationSlice.reducer;