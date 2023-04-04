import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginUrl = 'http://localhost:3001/api/V1/user/login';

export const getLoggedUser = createAsyncThunk(
  'user/getLoggedUser', // le type creator
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        loginUrl,
        { email, password },
        //{ email: 'tony@stark.com', password: 'password123' },
        { headers: { 'Content-Type': 'application/json' } }
      );
      return response;
    } catch (err) {
      console.log('il y a une erreur dans lappel API', err.response);
      return err.response.status;
      // if (!err.response) {
      //   const errString = 'no server response';
      //   return errString;
      // } else if (err.response?.status === 400) {
      //   //chainage optionel: si la valeur de response n'est ni nul et undefinied, alors il va chercher la valeur de status
      //   const errString = 'missing username or password';
      //   return errString;
      // } else if (err.response?.status === 401) {
      //   const errString = 'Unauthorizes';
      //   return errString;
      // } else {
      //   const errString = 'Login Failed';
      //   return errString;
      // }
    }
  }
);