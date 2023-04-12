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
        console.log('il y a une erreur dans lappel API Login', err.response);
        // dans le retour de err.response on a du détail dans "data" en cas d'erreur de password ou d'id.
        // par contre on a aussi besoin des err.response de stattus et statusText qui nous permette d'avoir l'erreur en cas non communication avec le serveur
        // TODO = redux ne donne pas le détail de data ou alors je ne sais pas comment le récupérer
        return rejectWithValue(err.response);
      });
  }
);
