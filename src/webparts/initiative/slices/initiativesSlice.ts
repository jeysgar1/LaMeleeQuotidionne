import { createSlice } from '@reduxjs/toolkit';
import { InitiativeState } from "../models/InitiativeState"
import { getInitiatives } from './getAll';
import { getInitiative } from './getById';
import { globalContext, spfxConnect } from '../../../services';

const initiativesSlice = createSlice({
    name: 'initiatives',
    initialState: { _context: globalContext, items: undefined, item: undefined } as InitiativeState,
    reducers: {
        init: (state, data) => {
            state._context = data.payload;
            if (state._context) {
                spfxConnect(state._context);
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getInitiatives.fulfilled, (state, action) => {
            state.items = action.payload;
        }),
            builder.addCase(getInitiative.fulfilled, (state, action) => {
                state.item = action.payload;
            })
    },
});

export default initiativesSlice.reducer as any;
export { getInitiative, getInitiatives }