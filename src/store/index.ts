import { combineReducers, createStore } from '@reduxjs/toolkit';
import { SearchValueReducer } from './searchValueReducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  search: SearchValueReducer,
});

export const store = createStore(rootReducer);
