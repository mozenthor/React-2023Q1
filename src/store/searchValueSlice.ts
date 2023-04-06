import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISearchValueAction {
  searchValue: string;
}

const searcValueSlice = createSlice({
  name: 'searchValue',
  initialState: {
    searchValue: '',
  },
  reducers: {
    setSearchValue(state, action: PayloadAction<ISearchValueAction>) {
      state.searchValue = action.payload.searchValue;
    },
  },
});

export const { setSearchValue } = searcValueSlice.actions;

export default searcValueSlice.reducer;
