import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const profileUrl = 'http://localhost:3001/api/V1/user/profile';

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails', // le type creator
  async (userCredentials) => {
    const { keyToken, body } = userCredentials;
    console.log('token avant try', keyToken);
    console.log('body avant try ', body);
    // TOUN FRANCOIS? pourquoi est-ce que il faut le bosy alors que sur postman il n'est pas necessaire?
    try {
      const response = await axios.post(profileUrl, body, {
        headers: { Authorization: `Bearer ${keyToken}` },
      });
      return response;
    } catch (err) {
      console.log('il y a une erreur dans lappel API', err);
      return err.response.status;
    }
  }
);

export const updateUserDetails = createAsyncThunk(
  'user/updateUserDetails',
  async (updatedCredentials) => {
    const { keyToken, body } = updatedCredentials;
    try {
      const response = await axios.put(profileUrl, body, {
        headers: { Authorization: `Bearer ${keyToken}` },
      });
      return response;
    } catch (err) {
      console.log('il y a un problème avec la requête PUT :', err);
    }
  }
);
