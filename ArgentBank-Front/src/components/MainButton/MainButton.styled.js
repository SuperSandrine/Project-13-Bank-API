// OK TOUN Francois: pourquoi des fois c'est jsx, et des fois c'est js ?, ça marche avec les deux, toutefois jsx va présenter une réponse légèrement plus rapide (ce sont des choses qu'on peut étudier)

import styled from 'styled-components';

export const MainButtonStyled = styled.button`
  display: block;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  margin: auto;
  cursor: pointer;
  .large-button {
    width: 100%;
  }
  .transaction-button {
    width: 100%;
    flex: 1, 1, 0%;
  }
  @media (min-width: 720px) {
    .transaction-button {
      width: 200px;
    }
  }
`;
