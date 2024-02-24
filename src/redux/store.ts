import {configureStore} from '@reduxjs/toolkit';
import counter from './features/counter/counterSlice';
import user from './features/AuthSlice';

export const store = configureStore({
  reducer: {
    counter,
    user,
  },
});
