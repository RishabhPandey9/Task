import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
      user: null,
  },
  reducers: {
    set: (state, action) => {
      state.user = action.payload;
    },
  },

});

export const { set } = UserSlice.actions;

export const selectId = (state) => state.user.user;

export default UserSlice.reducer;