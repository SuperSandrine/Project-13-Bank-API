import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledNavLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  img {
    max-width: 100%;
    width: 200px;
  }
`;
