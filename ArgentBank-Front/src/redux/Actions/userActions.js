import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginUrl = 'http://localhost:3001/api/V1/user/login';

export const getLoggedUser = createAsyncThunk(
  'user/getLoggedUser', // le type creator
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        loginUrl,
        { email, password },
        //{ email: 'tony@stark.com', password: 'password123' },
        { headers: { 'Content-Type': 'application/json' } }
      );
      return response;
    } catch (err) {
      console.log('il y a une erreur dans lappel API Login', err.response);
      return rejectWithValue(err.response);
      // const data = err.response.data;
      // const errStatus = err.response.status;
      // const errStatusText = err.response.statusText;
      // return rejectWithValue(data, errStatus, errStatusText);

      // FRANCOIS: gestion des erreurs, comment faire pour récupérer les error status text et l'envoyer à mon Signin? Un state dédié dans userSlice?


      //return rejectWithValue(errorPayload);
      //return err.response.status;
      // if (!err.response) {
      //   const errString = 'no server response';
      //   console.log('err string dans action', errString);
      //   return isRejectedWithValue(errString);
      // } else if (err.response?.status === 400) {
      //   //chainage optionel: si la valeur de response n'est ni nul et undefinied, alors il va chercher la valeur de status
      //   const errString = 'missing username or password';
      //   console.log('err string dans action', errString);
      //   return isRejectedWithValue(errString);
      // } else if (err.response?.status === 401) {
      //   const errString = 'Unauthorizes';
      //   return isRejectedWithValue(errString);
      // } else {
      //   const errString = 'Login Failed';
      //   return isRejectedWithValue(errString);
      // }
    }
  }
);
