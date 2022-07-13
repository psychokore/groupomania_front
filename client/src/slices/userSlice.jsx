import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isConnected: false,
    isAdmin: false
  },
  reducers: {
    login: (state, action) => {
      state.isConnected = action.payload.isConnected;
    },
  }
})



export const { login,} = userSlice.actions

// export const selectUser = (state) => state.user

export default userSlice.reducer