import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createApi } from 'unsplash-js';
import { Basic } from 'unsplash-js/dist/methods/photos/types';

export const api = createApi({ accessKey: 'OzgE6QPO7RH3oq2108ldsgvWdER1bK8dRajf5L5OXa0' });

export const fetchPhotos = createAsyncThunk(
  'Photos/fetchPhotos',
  async function (props: { searchValue: string }) {
    try {
      const response = await api.search.getPhotos({
        query: props.searchValue,
        page: 1,
        perPage: 10,
        orientation: 'portrait',
      });
      const data = response.response?.results;
      return data;
    } catch (error) {
      return error;
    }
  }
);

interface IPhotosState {
  photos: Basic[];
  status: string | null;
  error: string | null;
}

interface IAction {
  type: string;
  payload: Basic[];
}

const initialState: IPhotosState = {
  photos: [],
  status: 'initial',
  error: null,
};

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: {
    [`${fetchPhotos.pending}`]: (state: IPhotosState) => {
      state.status = 'loading';
      state.error = null;
    },
    [`${fetchPhotos.fulfilled}`]: (state: IPhotosState, action: IAction) => {
      state.status = 'resolved';
      state.photos = action.payload;
    },
    [`${fetchPhotos.rejected}`]: (state: IPhotosState, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default photoSlice.reducer;
