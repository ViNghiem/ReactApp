
import { createSlice } from "@reduxjs/toolkit";

const OuthSlice = createSlice({
  name: 'auth',
  initialState:{
    login: {
      currentUser:null,
      isFetching:false,
      error:null
    }
  },
  reducers:{
    loginStart: (state) =>{
      state.login.isFetching =true
    },

    loginSuccess: (state,action) =>{
      state.login.isFetching = false;
      state.login.currentUser = action.payload
    },


    loginFail: (state) =>{
      state.login.isFetching =false;
      state.login.error = true
    },
    
  }
})



export const {
  loginStart,
  loginSuccess,
  loginFail
} = OuthSlice.actions;


export default OuthSlice.reducer;