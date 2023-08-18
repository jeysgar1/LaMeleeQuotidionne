import { createAsyncThunk } from '@reduxjs/toolkit';
import epopeesService from '../../../services/epopeesService';

const getAll : any = createAsyncThunk(
    'getAll',
    async (thunkAPI) => {
        const response = await epopeesService.getAll()
        return response;
    }
)

export { getAll as getEpopees }