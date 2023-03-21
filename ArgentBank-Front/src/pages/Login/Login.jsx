import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { LoginStyledMain } from './Login.styled';
import SignIn from '../../components/SignIn/SignIn';

const Login = (props) => {
  return (
    <div className="test">
      <NavBar />
      <LoginStyledMain className="main bg-dark">
        <SignIn />
      </LoginStyledMain>
      <Footer />
    </div>
  );
};

Login.propTypes = {};

export default Login;
// TODO Francois: est)ce qu'il faut faire des composants pour les différents éléments du form?
// Todo François: est-ce qu'il faut faure un composant form ?
