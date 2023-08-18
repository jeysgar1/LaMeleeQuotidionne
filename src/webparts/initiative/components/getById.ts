import { createAsyncThunk } from '@reduxjs/toolkit';
import initiativesServices from '../../../services/initiativesServices';

const getById : any = createAsyncThunk(
    'getById',
    async (id: number, thunkAPI) => {
        const response = await initiativesServices.getById(id)
        return response;
    }
)

export {getById as getInitiative}