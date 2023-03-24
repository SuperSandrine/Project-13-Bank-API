// voici mon entrepot (avec plusieurs tranche, une tranche user, une tranche tache, etc) (plusieurs partie) (slice= tranche)
// on peut avoir des données et des interaction avec ces données
// interactions = reducers en angalis, (1paramètre etat actuel, 2eme paramètre : l'action qu'on veut opérer sur cet état). le reducer veut réduire ces 2 elements en un seul élément.
// reducers= ensemble d'intreaction possible avec mon état

import { configureStore, createSlice } from '@reduxjs/toolkit';

//voici la partie user.
const userSlice = createSlice({
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
});

const initialState = [
  {
    // c'est vide non?
    email: '',
    firstName: '',
    lastName: '',
    createdAt: '',
    updatedAt: '',
    id: '',
  },
];

const firstState = [
  {
    // c'est vide non?
    email: '',
    token: '',
  },
];

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

// actions creators automatique de redux toolkit
export const { initialiseUser, terminateUser } = userSlice.actions;
