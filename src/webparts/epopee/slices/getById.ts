import { createAsyncThunk } from '@reduxjs/toolkit';
import epopeesService from '../../../services/epopeesService';

const getById : any = createAsyncThunk(
    'getById',
    async (id: number, thunkAPI) => {
        const response = await epopeesService.getById(id)
        return response;
    }
)

export {getById as getEpopeeById}