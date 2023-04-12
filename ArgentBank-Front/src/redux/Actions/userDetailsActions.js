import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const profileUrl = 'http://localhost:3001/api/V1/user/profile';

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails', // le type creator
  async (userCredentials, { rejectWithValue }) => {
    const { keyToken, body } = userCredentials;
    try {
      const response = await axios.post(profileUrl, body, {
        headers: { Authorization: `Bearer ${keyToken}` },
      });
      return response;
    } catch (err) {
      console.log('il y a une erreur dans lappel API userDetails', err);
      return rejectWithValue(err.response);
    }
  }
);

export const updateUserDetails = createAsyncThunk(
  'user/updateUserDetails',
  async (updatedCredentials, { rejectWithValue }) => {
    const { keyToken, body } = updatedCredentials;
    try {
      const response = await axios.put(profileUrl, body, {
        headers: { Authorization: `Bearer ${keyToken}` },
      });
      return response;
    } catch (err) {
      console.log('il y a un problème avec la requête PUT :', err);
      return rejectWithValue(err.response);
    }
  }
);
