import React from 'react';
import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
      {console.log("test", children)}
      {console.log("test2", auth)}

    </AuthContext.Provider>
  );
};

export default AuthContext;
