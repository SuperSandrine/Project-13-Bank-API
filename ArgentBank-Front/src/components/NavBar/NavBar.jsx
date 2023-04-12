import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logo from './../../assets/img/argentBankLogo.png';

import { StyledNav, StyledNavLink, StyledNavLogoLink } from './NavBar.styled';
import { terminateUser } from '../../redux/Reducers/userSlice';

const handleSignOut = (e) => {
  const dispatch = useDispatch();
  e.preventDefault();
  dispatch(terminateUser());
};

const NavBar = () => {
  const originalState = useSelector((state) => state);
  //console.log(originalState.user.status);

  return (
    <StyledNav>
      <StyledNavLogoLink to="/">
        <img src={logo} alt="Argent Bank Logo" />
      </StyledNavLogoLink>

      {originalState?.userDetails?.firstName ? (
        <div>
          <StyledNavLink to="/profile">
            <i className="fa fa-user-circle"></i>
            {originalState.userDetails.firstName}
          </StyledNavLink>
          {/* // mettre une action onclick sur la NavBar */}
          <StyledNavLink to="/" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>Sign Out
          </StyledNavLink>
        </div>
      ) : (
        <div>
          <StyledNavLink to="/login">
            <i className="fa fa-user-circle"></i>Sign In
          </StyledNavLink>
        </div>
      )}
    </StyledNav>
  );
};

export default NavBar;
