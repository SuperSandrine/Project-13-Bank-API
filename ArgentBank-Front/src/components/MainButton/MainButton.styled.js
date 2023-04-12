import styled from 'styled-components';

export const MainButtonStyled = styled.button`
  display: block;
  padding: 10px 18px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  margin-left: auto;
  margin-right: auto;
  width: ${(props) => (props.$large ? '100%' : 'none')};

  &.transaction-button {
    width: 100%;
  }

  @media (min-width: 720px) {
    &.transaction-button {
      width: 200px;
    }
  }
`;
