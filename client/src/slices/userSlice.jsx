import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    token: null,
    isAdmin: false
  },
  reducers: {
    login: (state, action) => {
      state.userId = action.payload.userId;
      state.token = action.payload.token;
      state.isAdmin = action.payload.isAdmin;
    },
    logout: (state, action) => {
      state.userId = null;
      state.token = null;
      state.isAdmin = false;
    }
  }
})



export const { login, logout} = userSlice.actions

export const selectIsUserConnected = (state) => state.user.token !== null
export const selectUser = (state) => state.user.userId !== null
// export const selectUserAdmin = (state) => state.user.isAdmin


export default userSlice.reducer