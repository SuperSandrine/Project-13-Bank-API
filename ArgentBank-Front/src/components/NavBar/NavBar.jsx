import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from './../../assets/img/argentBankLogo.png';

import { StyledNav } from './NavBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { terminateUser } from '../../redux/userSlice';

const handleSignOut = (e) => {
  const dispatch = useDispatch();
  e.preventDefault();
  dispatch(terminateUser());
};

const NavBar = () => {
  const originalState = useSelector((state) => state);
  console.log(originalState.user.status);

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

      {originalState?.userDetails?.firstName ? (
        <div>
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i> {originalState.userDetails.firstName}
          </Link>
          {/* // mettre une action onclick sur la NavBar */}
          <Link className="main-nav-item" to="/" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>Sign Out
          </Link>
        </div>
      ) : (
        <div>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>Sign In
          </Link>
        </div>
      )}
    </StyledNav>
  );
};

// OK : TOUN FRANCOIS: c'est quoi sr-only, screen reader only, comment c'est exploité? c'est du vieux css. mauvaise pratique à modifier
// TODO: supprimer les sronly et proposer qqchose de plus adapter à l'accessibilité d'aujourdhui

NavBar.propTypes = {};

export default NavBar;
