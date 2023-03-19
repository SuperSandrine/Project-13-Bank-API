import React from 'react';
import PropTypes from 'prop-types';

import { StyledFoot } from './Footer.styled';

const Footer = props => {
  return (
    <StyledFoot className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </StyledFoot>
  );
};

Footer.propTypes = {
  
};

export default Footer;