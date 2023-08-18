import { configureStore } from '@reduxjs/toolkit'
import initiativesSlice from '../webparts/initiative/slices/initiativesSlice';
import epopeesSlice from '../webparts/epopee/slices/epopeesSlice';
import historiesSlice from './slicers/historiesSlice';
import tachesSlice from './slicers/tachesSlice';

export const store: any = configureStore({
    reducer: {
        initiatives: initiativesSlice,
        epopees: epopeesSlice,
        histories: historiesSlice,
        taches: tachesSlice
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

