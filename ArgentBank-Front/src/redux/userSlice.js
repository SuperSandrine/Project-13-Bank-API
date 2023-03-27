import {
  createAsyncThunk,
  createSlice,
  miniSerializeError,
} from '@reduxjs/toolkit';
import axios from 'axios';

const loginUrl = 'http://localhost:3001/api/V1/user/login';

const initialStateOfUser = {
  status: 'idle', // 'idle'|'pending'|'succeeded'|'failed'
  error: null,
  email: null,
  password: null,
  token: null,
};

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

  //async (name, thunkAPI) => {
  //  (userIds) => {
  //    try {
  //console.log('dans try, le name en param:', name);
  //console.log('dans try, le thunkAPI en param:', thunkAPI);
  //console.log('dans try, un test supplé :', thunkAPI.getState());
  //    return axios.post(
  //      const resp = axios.post(
  //      loginUrl,
  //      { userIds },
  //{ email: 'tony@stark.com', password: 'password123' },
  //{ email: email, password: password },
  //      { headers: { 'Content-Type': 'application/json' } }
  //    );
  //      console.log('la réponse dans le truc', resp);
  //      return resp;
  //    } catch (error) {
  //      //return thunkAPI.rejectWithValue('something went wrong');
  //      return console.log('something went wrong', error);
  //    }
  //  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateOfUser,
  reducers: {
    initialiseUser: (state, action) => {
      //{type:"user/initialise", payload: "les infos de l'utilisateur reçu de l'API"} // dans mon état actuel j'ai envi d'ajouter les données de l'utilisateur
      console.log('dans initialise, actions', action);
      console.log('dans initialise, state', state);

      const initialisation = {
        id: 1,
        //email: action.payload.email,
        token: action.payload.token,
      };
      //state.fill(initialisation);
      state.push(initialisation);

      return state;
    },
    terminateUser: (state, action) => {
      //{type:"user/termination", payload: 1(identifiant)}
      state = initialStateOfUser;
      return state;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getLoggedUser.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = null;
  //     })
  //     .addCase(getLoggedUser.fulfilled, (state, action) => {
  //       console.log('voici les actions de getUser fulfilled', action);
  //       state.isLoading = false;
  //       state.data = action.payload;
  //     })
  //     .addCase(getLoggedUser.rejected, (state, action) => {
  //       console.log('voici action de getuser rejected', action);
  //       state.isLoading = false;
  //       state.error = action.error;
  //     });
  // },

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
    },
    [getLoggedUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload.error;
    },
  },
});

console.log('a quoi ressemble user Slice', userSlice);

export default userSlice.reducer; //va exporter uniquement les reducers du Slice.

// actions creator automatique de toolkit
export const { initialiseUser, terminateUser } = userSlice.actions;
