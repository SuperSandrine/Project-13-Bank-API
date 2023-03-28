import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const loginUrl = 'http://localhost:3001/api/V1/user/profile';

const initialStateOfUserDetails = {
  statusD: 'idle', // 'idle'|'pending'|'succeeded'|'failed'
  errorD: null,
  firsrName: null,
  lastName: null,
  created: null,
  updated: null,
  id: null,
};

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails', // le type creator
  async (userCredentials, tokens) => {
    const { keyToken, body } = userCredentials;
    console.log('tkenavant try', keyToken);
    console.log('tkenavant try body', body);
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
      const {firsrName, lastName, created, updated, id} = action.payload.data.body
      state.status = 'succeeded';
      state.firsrName = firsrName;
      state.lastName =created;
      state.upadated = updated;
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
