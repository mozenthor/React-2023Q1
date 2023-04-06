import { configureStore } from '@reduxjs/toolkit';
import searcValueReducer from './searchValueSlice';
import fetchPhotos from './fetchPhotosSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    searchValue: searcValueReducer,
    photos: fetchPhotos,
  },
});
