import { configureStore } from '@reduxjs/toolkit';
import searcValueReducer from './searchValueSlice';
import fetchPhotos from './fetchPhotosSlice';
import fetchPhotoById from './fetchPhotoById';
import formSlice from './formSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    searchValue: searcValueReducer,
    photos: fetchPhotos,
    photoById: fetchPhotoById,
    form: formSlice,
  },
});
