import { createSlice } from '@reduxjs/toolkit';
import { getLoggedUser } from '../Actions/userActions';

const initialStateOfUser = {
  status: 'idle', // 'idle'|'pending'|'succeeded'|'failed'
  errorStatus: null,
  errorMessage: null,
  //errorOtherMessage: null,
  email: null,
  password: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateOfUser,
  reducers: {
    terminateUser: (state) => {
      //{type:"user/termination", payload: 1(identifiant)}
      state = initialStateOfUser;
      return state;
    },
  },
  extraReducers: {
    [getLoggedUser.pending]: (state) => {
      state.status = 'pending';
    },
    [getLoggedUser.fulfilled]: (state, action) => {
      //console.log('ceci est action', action);
      state.token = action.payload.data.body.token;
      state.status = 'succeeded';
      state.email = action.meta.arg.email;
      state.password = action.meta.arg.password;
      state.errorStatus = null;
      state.errorMessage = null;
      //state.errorOtherMessage = null;
    },
    [getLoggedUser.rejected]: (state, action) => {
      console.log('ceci est action dans rejected', action);
      state.status = 'failed';
      state.errorStatus = action.payload.status;
      state.errorMessage = action.payload.message;
      //state.errorOtherMessage = action.payload.statusText;
    },
  },
});

//console.log('a quoi ressemble user Slice', userSlice);

export default userSlice.reducer; //va exporter uniquement les reducers du Slice.

// actions creator automatique de toolkit
export const { terminateUser } = userSlice.actions;
