import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    isAdmin: false
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.isAdmin = action.payload.isAdmin;
    },
  }
})



export const { login,} = userSlice.actions

export const selectIsUserConnected = (state) => state.user.token !== null
// export const selectUserAdmin = (state) => state.user.isAdmin


export default userSlice.reducer