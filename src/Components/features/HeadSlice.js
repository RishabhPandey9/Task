import { createSlice } from '@reduxjs/toolkit';

export const HeadSlice = createSlice({
  name: 'head',
  initialState: {
      head: null,
  },
  reducers: {
    showing: (state, action) => {
      state.head = action.payload;
    },
    hiding: (state) => {
      state.head = true;
    },
  },

});

export const { showing, hiding } = HeadSlice.actions;

export const selectHead = (state) => state.head.head;

export default HeadSlice.reducer;