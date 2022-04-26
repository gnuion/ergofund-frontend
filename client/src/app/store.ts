import { configureStore } from '@reduxjs/toolkit';

import campaignsReducer from '../features/campaigns/campaignsSlice';
import { apiSlice } from '../features/campaigns/campaignsAPI';

export const store = configureStore({
  reducer: {
    campaigns: campaignsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
