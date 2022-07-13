import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isConnected: false,
    isAdmin: 0
  },
  reducers: {
    login: (state, action) => {
      state.isConnected = action.payload.isConnected;
    },
  }
})



export const { login,} = userSlice.actions

// export const selectUserConnected = (state) => state.user.isConnected
// export const selectUserAdmin = (state) => state.user.isAdmin


export default userSlice.reducer