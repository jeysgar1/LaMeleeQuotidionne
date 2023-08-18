import { createAsyncThunk } from '@reduxjs/toolkit';
import epopeesService from '../../../services/epopeesService';

const getByInitiative: any = createAsyncThunk(
    'getByInitiative',
    async (id: number, thunkAPI) => {
        const response = await epopeesService.getByInitiative(id)
        return response;
    }
)

export { getByInitiative as getEpopeeByInitiative }