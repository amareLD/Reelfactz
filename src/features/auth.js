// import { createSlice } from '@reduxjs/toolkit';

// export const authUser = createSlice({
//   name: 'authUser',
//   initialState: {
//     // object with the next three properties
//     user: {},
//     isAuthenticated: false,
//     sessionId: '',
//   },
//   reducers: {
//     setUser: (oldState, action) => {
//       oldState.user = action.payload;
//       oldState.isAuthenticated = true;
//       oldState.sessionId = localStorage.getItem('session_id');

//       localStorage.setItem('account_id', action.payload.id);
//     },
//   },
// });

// export const { setUser } = authUser.actions;

// export default authUser.reducer;

// export const userSelector = (state) => state.currentUser;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isAuthenticated: false,
  sessionId: '',
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.sessionId = localStorage.getItem('session_id');

      localStorage.setItem('account_id', action.payload.id);
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
export const userSelector = (state) => state.user;
