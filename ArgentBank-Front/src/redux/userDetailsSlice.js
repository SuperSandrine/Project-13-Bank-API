import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const loginUrl = 'http://localhost:3001/api/V1/user/profile';

const initialStateOfUserDetails = {
  statusD: 'idle', // 'idle'|'pending'|'succeeded'|'failed'
  errorD: null,
  firstName: null,
  lastName: null,
  created: null,
  updated: null,
  id: null,
};

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails', // le type creator
  async (userCredentials) => {
    const { keyToken, body } = userCredentials;
    console.log('token avant try', keyToken);
    console.log('body avant try ', body);
    // TOUN FRANCOIS? pourquoi est-ce que il faut le bosy alors que sur postman il n'est pas necessaire?
    try {
      const response = await axios.post(loginUrl, body, {
        headers: { Authorization: `Bearer ${keyToken}` },
      });
      return response;
    } catch (err) {
      console.log('il y a une erreur dans lappel API', err);
      return err.response.status;
    }
  }
);

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: initialStateOfUserDetails,
  reducers: {
    updateFirstName: (state, action) => {
      // change l'état avec la valeur input si appuie sur save
    },
    updateLastName: () => {
      // change l'état avec la valeur input si appuie sur save
    },
  },
  extraReducers: {
    [getUserDetails.pending]: (state) => {
      state.statusD = 'pending';
    },
    [getUserDetails.fulfilled]: (state, action) => {
      //console.log('ceci est action', action);
      const { firstName, lastName, createdAt, updatedAt, id } =
        action.payload.data.body;
      state.statusD = 'succeeded';
      // state.firstName = action.payload.data.body.firstName;
      // state.lastName = action.payload.data.body.lastName;
      // state.created = action.payload.data.body.createdAt;
      // state.updated = action.payload.data.body.updatedAt;
      // state.id = action.payload.data.body.id;
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
  },
});

console.log('a quoi ressemble userDetails Slice', userDetailsSlice);

export default userDetailsSlice.reducer; //va exporter uniquement les reducers du Slice.

// actions creator automatique de toolkit
export const { updateFirstName, updateLastName } = userDetailsSlice.actions;
