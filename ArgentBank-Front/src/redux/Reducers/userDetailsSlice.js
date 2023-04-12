import { createSlice } from '@reduxjs/toolkit';
import {
  getUserDetails,
  updateUserDetails,
} from '../Actions/userDetailsActions';

const initialStateOfUserDetails = {
  statusD: 'idle', // 'idle'|'pending'|'succeeded'|'failed'
  errorD: null,
  firstName: null,
  lastName: null,
  created: null,
  updated: null,
  id: null,
  statusUpdate: 'idle',
};

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: initialStateOfUserDetails,
  extraReducers: {
    [getUserDetails.pending]: (state) => {
      state.statusD = 'pending';
    },
    [getUserDetails.fulfilled]: (state, action) => {
      //console.log('ceci est action', action);
      const { firstName, lastName, createdAt, updatedAt, id } =
        action.payload.data.body;
      state.statusD = 'succeeded';
      state.firstName = firstName;
      state.lastName = lastName;
      state.created = createdAt;
      state.updated = updatedAt;
      state.id = id;
    },
    [getUserDetails.rejected]: (state, action) => {
      state.statusD = 'failed :' + action.payload.data.status;
      state.errorD = action.payload.data.message;
    },
    //Extra reducers for Update profile
    [updateUserDetails.pending]: (state) => {
      state.statusUpdate = 'pending';
    },
    [updateUserDetails.fulfilled]: (state, action) => {
      const { firstName, lastName } = action.payload.data.body;
      state.statusUpdate = 'succeeded';
      state.firstName = firstName;
      state.lastName = lastName;
      state.updated = new Date().toISOString();
    },
    [updateUserDetails.rejected]: (state, action) => {
      state.statusUpdate = 'failed :' + action.payload.data.status;
      state.errorD = action.payload.data.message;
    },
  },
});

//console.log('a quoi ressemble userDetails Slice', userDetailsSlice);
export default userDetailsSlice.reducer; //va exporter uniquement les reducers du Slice.
