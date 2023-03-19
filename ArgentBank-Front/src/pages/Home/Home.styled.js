import styled from 'styled-components';

import BankTreeImg from '../../assets/img/bank-tree.jpeg';

export const StyledMain = styled.main`
  .hero {
    background-image: url(${BankTreeImg});
    background-position: 0 -50px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    position: relative;
    &-content {
      position: relative;
      top: 2rem;
      width: 200px;
      background: white;
      padding: 2rem;
      text-align: left;
      margin: 0 auto;
      .subtitle {
        font-weight: bold;
        font-size: 1rem;
        margin: 0;
      }
      .text {
        margin-bottom: 0;
        font-size: 0.9rem;
      }
    }
  }

  @media (min-width: 920px) {
    .hero {
      height: 400px;
      background-position: 0% 33%;
      &-content {
        position: absolute;
        top: 50px;
        right: 50px;
        width: 300px;
        margin: 2rem;
      .subtitle {
        font-size: 1.5rem;
      }
      .text {
        font-size: 1.2rem;
      }
    }
  }

  .features {
    display: flex;
    flex-direction: column;
  }
  
  @media (min-width: 920px) {
    .features {
      flex-direction: row;
    }
  }
`;
