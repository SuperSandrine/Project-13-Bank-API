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
// Je sais plus ce qu'il m'a raconté sur les minis composants, mais en gros c'est la projection de l'utilisation dans d'autres parties du site qu'il faut évaluer, et l'utilité pour d'autres sites.
// DONE = Todo François: est-ce qu'il faut faure un composant form ?
