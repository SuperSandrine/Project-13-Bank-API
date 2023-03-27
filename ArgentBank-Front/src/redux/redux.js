// voici mon entrepot (avec plusieurs tranche, une tranche user, une tranche tache, etc) (plusieurs partie) (slice= tranche)
// on peut avoir des données et des interaction avec ces données
// interactions = reducers en angalis, (1paramètre etat actuel, 2eme paramètre : l'action qu'on veut opérer sur cet état). le reducer veut réduire ces 2 elements en un seul élément.
// reducers= ensemble d'intreaction possible avec mon état

import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

const initialStateUser = {
  status: 'idle', // 'idle'|'loading'|'succeeded'|'failed'
  error: null,
  data: [{}],
};

export const fetchUserData = createAsyncThunk(
  'user/initialiseUser',
  async () => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/V1/user/login',
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      return [...response.data];
    } catch (err) {
      console.log('erreur dans catch', err);
      return err.message;
    }
  }
);

//voici la partie user.
const userSlice1 = createSlice({
  //status: 'void', // permet de savoir l'état de la requête
  name: 'user',
  initialState: [{}],
  reducers: {
    //initialiser l'utilisateur
    initialiseUser: (state, action) => {
      //{type:"user/initialise", payload: "les infos de l'utilisateur reçu de l'API"} // dans mon état actuel j'ai envi d'ajouter les données de l'utilisateur
      const initialisation = {
        id: 1,
        email: action.payload.email,
        token: action.payload.token,
      };
      state.fill(initialisation);
      return state;
    },
    terminateUser: (state, action) => {
      //{type:"user/termination", payload: 1(identifiant)}
      state = [{}];
      return state;
    },
  },
  extraReducers(builder) {
    //ressemble à un switch
    builder
      .addCase(fetchUserData.pending, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getUserStatus = (state) => {
  console.log(state.user); //
  return state.status;
};
export const getUserError = (state) => state.error;

export const store = configureStore({
  reducer: {
    user: userSlice1.reducer,
  },
});

// const userTokenFetching =()=>({type:'freelances/fetching'})
// const userTokenResolved =(data)=>({type:'freelances/resolved', payload:data})
// const userTokenRejecyed =(error)=>({type:'freelances/rejected', payload:error})

// export default userReducer(state = initialState, action){
//   return
// }

// actions creators automatique de redux toolkit
export const { initialiseUser, terminateUser } = userSlice1.actions;

// //sauvegarde
// import { configureStore, createSlice } from '@reduxjs/toolkit';

// //voici la partie user.
// const userSlice = createSlice({
//   //status: 'void', // permet de savoir l'état de la requête
//   name: 'user',
//   initialState: [{}],
//   reducers: {
//     //initialiser l'utilisateur
//     fetching,
//     resolved,
//     rejected,
//     initialiseUser: (state, action) => {
//       //{type:"user/initialise", payload: "les infos de l'utilisateur reçu de l'API"} // dans mon état actuel j'ai envi d'ajouter les données de l'utilisateur
//       const initialisation = {
//         id: 1,
//         email: action.payload.email,
//         token: action.payload.token,
//       };
//       state.fill(initialisation);
//       return state;
//     },
//     terminateUser: (state, action) => {
//       //{type:"user/termination", payload: 1(identifiant)}
//       state = [{}];
//       return state;
//     },
//   },
// });

// export const store = configureStore({
//   reducer: {
//     user: userSlice.reducer,
//   },
// });

// // actions creators automatique de redux toolkit
// export const { initialiseUser, terminateUser } = userSlice.actions;
