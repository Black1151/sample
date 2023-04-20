import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  // add your reducers here
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
