import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { LoginStyledMain } from './Login.styled';
import SignIn from '../../components/SignIn/SignIn';

const Login = () => {
  return (
    <div className="shape">
      <NavBar />
      <LoginStyledMain>
        <SignIn />
      </LoginStyledMain>
      <Footer />
    </div>
  );
};

export default Login;
