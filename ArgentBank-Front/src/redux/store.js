import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Reducers/userSlice';
import userDetailsReducer from './Reducers/userDetailsSlice';

// const customizedMiddleWare = (getDefaultMiddleware) => {
//   return getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [
//         'user/getLoggedUser/fulfilled',
//         'user/getUserDetails/fulfilled',
//         'user/updateUserDetails/fulfilled',
//         'user/getLoggedUser/rejected',
//         'user/getUserDetails/rejected',
//         'user/updateUserDetails/fulfilled',
//       ],
//       ignoredPaths: ['payload.headers'],
//     },
//   });
// };
// ajout de ces chemins à ignoré suite à l'erreur affiché: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data (ligne 7 et 8)
// TODO: fonction deprecated, françois, comme je fais(pour défendre ça?)?

//console.log('voici useReducer', userReducer.reducer);
export const store = configureStore({
  reducer: {
    //user: userReducer.reducer,
    user: userReducer,
    userDetails: userDetailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'user/getLoggedUser/fulfilled',
          'user/getUserDetails/fulfilled',
          'user/updateUserDetails/fulfilled',
          'user/getLoggedUser/rejected',
          'user/getUserDetails/rejected',
          'user/updateUserDetails/fulfilled',
        ],
        ignoredPaths: ['payload.headers'],
      },
    }),
});

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import userReducer from './Reducers/userSlice';
// import userDetailsReducer from './Reducers/userDetailsSlice';

// const customizedMiddleWare = (getDefaultMiddleware) => {
//   return getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [
//         'user/getLoggedUser/fulfilled',
//         'user/getUserDetails/fulfilled',
//         'user/updateUserDetails/fulfilled',
//         'user/getLoggedUser/rejected',
//         'user/getUserDetails/rejected',
//         'user/updateUserDetails/fulfilled',
//       ],
//       ignoredPaths: ['payload.headers'],
//     },
//   });
// };
// // ajout de ces chemins à ignoré suite à l'erreur affiché: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data (ligne 7 et 8)
// // TODO: fonction deprecated, françois, comme je fais(pour défendre ça?)?

// //console.log('voici useReducer', userReducer.reducer);
// export const store = configureStore({
//   reducer: {
//     //user: userReducer.reducer,
//     user: userReducer,
//     userDetails: userDetailsReducer,
//   },
//   middleware: customizedMiddleWare,
// });
