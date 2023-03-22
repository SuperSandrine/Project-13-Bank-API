import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from './../../assets/img/argentBankLogo.png';

import { StyledNav } from './NavBar.styled';

const NavBar = (props) => {
  return (
    <StyledNav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>Sign In
        </Link>
      </div>
    </StyledNav>
  );
};

// OK : TOUN FRANCOIS: c'est quoi sr-only, screen reader only, comment c'est exploité? c'est du vieux css. mauvaise pratique à modifier
// TODO: supprimer les sronly et proposer qqchose de plus adapter à l'accessibilité d'aujourdhui

NavBar.propTypes = {};

export default NavBar;
