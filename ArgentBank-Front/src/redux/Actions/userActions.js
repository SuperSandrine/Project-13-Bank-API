import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginUrl = 'http://localhost:3001/api/V1/user/login';

export const getLoggedUser = createAsyncThunk(
  'user/getLoggedUser', // le type creator
  ({ email, password }, { rejectWithValue }) => {
    return axios
      .post(
        loginUrl,
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log('il y a une erreur dans lappel API Login', err);
        return rejectWithValue(err);
      });
  }
);
