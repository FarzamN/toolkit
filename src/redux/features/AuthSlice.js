import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userDetail: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
