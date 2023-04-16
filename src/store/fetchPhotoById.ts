import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createApi } from 'unsplash-js';
import { Full } from 'unsplash-js/dist/methods/photos/types';

export const api = createApi({ accessKey: 'OzgE6QPO7RH3oq2108ldsgvWdER1bK8dRajf5L5OXa0' });

export const fetchPhotoById = createAsyncThunk('Photo/fetchPhotoById', async function (id: string) {
  try {
    const response = await api.photos.get({
      photoId: id,
    });
    const data = response.response;
    return data;
  } catch (error) {
    return error;
  }
});

interface IPhotoByIdState {
  photo: Full | null;
  status: string | null;
  error: string | null;
  modalWindowActive: boolean;
  id: string;
}

interface IAction {
  type: string;
  payload: Full;
}

interface IidAction {
  id: string;
}

const initialState: IPhotoByIdState = {
  photo: null,
  status: 'loading',
  error: null,
  modalWindowActive: false,
  id: '',
};

const photoByIdSlice = createSlice({
  name: 'photoById',
  initialState,
  reducers: {
    toggleModalWindow(state) {
      state.modalWindowActive = !state.modalWindowActive;
    },
    setPhotoId(state, action: PayloadAction<IidAction>) {
      state.id = action.payload.id;
    },
  },
  extraReducers: {
    [`${fetchPhotoById.pending}`]: (state: IPhotoByIdState) => {
      state.status = 'loading';
      state.error = null;
    },
    [`${fetchPhotoById.fulfilled}`]: (state: IPhotoByIdState, action: IAction) => {
      state.status = 'resolved';
      state.photo = action.payload;
    },
    [`${fetchPhotoById.rejected}`]: (state: IPhotoByIdState, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const { toggleModalWindow, setPhotoId } = photoByIdSlice.actions;

export default photoByIdSlice.reducer;
