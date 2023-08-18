import { createAsyncThunk } from '@reduxjs/toolkit';
import initiativesServices from '../../../services/initiativesServices';

const getAll : any = createAsyncThunk(
    'getAll',
    async (thunkAPI) => {
        const response = await initiativesServices.getAll()
        return response;
    }
)

export { getAll as getInitiatives }