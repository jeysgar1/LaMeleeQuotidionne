import { createSlice } from '@reduxjs/toolkit';
import { EpopeeState } from '../models/EpopeeState';
import { getEpopeeByInitiative } from './getByInitiative';
import { getInitiativesForEpopees } from './getInitiatives';
import { getEpopees } from './getAll';
import { getEpopeeById } from './getById';

const epopeesSlice = createSlice({
    name: 'epopees',
    initialState: { context: undefined, items: undefined, item: undefined, initiative: undefined, initiatives: undefined } as EpopeeState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getInitiativesForEpopees.fulfilled, (state, action) => {
            state.initiatives = action.payload;
        }),
            builder.addCase(getEpopees.fulfilled, (state, action) => {
                state.items = action.payload;
            }),
            builder.addCase(getEpopeeById.fulfilled, (state, action) => {
                state.item = action.payload;
            }),
            builder.addCase(getEpopeeByInitiative.fulfilled, (state, action) => {
                state.items = action.payload;
            })
    },
});

export default epopeesSlice.reducer;
export { getEpopeeByInitiative, getInitiativesForEpopees, getEpopees, getEpopeeById }