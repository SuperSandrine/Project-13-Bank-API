import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const customizedMiddleWare = (getDefaultMiddleware) => {
  return getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['user/getLoggedUser/fulfilled'],
      ignoredPaths: ['payload.headers'],
    },
  });
};
// ajout de ces chemins à ignoré suite à l'éerreur affiché: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data (ligne 7 et 8)
// TODO: fonction deprecated, françois, comme je fais(pour défendre ça?)?

//console.log('voici useReducer', userReducer.reducer);
export const store = configureStore({
  reducer: {
    //user: userReducer.reducer,
    user: userReducer,
  },
  middleware: customizedMiddleWare,
});
