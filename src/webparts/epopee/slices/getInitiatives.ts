import { createAsyncThunk } from '@reduxjs/toolkit';
import initiativesServices from '../../../services/initiativesServices';

const getInitiatives: any = createAsyncThunk(
    'getInitiatives',
    async (id: number, thunkAPI) => {
        const response = await initiativesServices.getAll()
        return response;
    }
)

export { getInitiatives as getInitiativesForEpopees }