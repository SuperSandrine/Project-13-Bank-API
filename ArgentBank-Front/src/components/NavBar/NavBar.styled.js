import styled from 'styled-components';

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
  .main-nav-item {
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
  .main-nav-logo {
    display: flex;
    align-items: center;
    &-image {
      max-width: 100%;
      width: 200px;
    }
  }
`;