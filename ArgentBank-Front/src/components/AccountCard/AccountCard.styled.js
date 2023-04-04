import styled from 'styled-components';

export const AccountCardStyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  margin-top: 2rem;

  .transaction-button {
    width: 100%;
  }

  @media (min-width: 720px) {
    flex-direction: row;

    .cta {
      flex: 0;
    }

    .transaction-button {
      width: 200px;
    }
  }
`;
export const AccountCardStyledContainer = styled.div`
  width: 100%;
  //flex: 1, 1, 0%;
`;

export const AccountCardStyledTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

export const AccountCardStyledAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const AccountCardStyledDescription = styled.p`
  margin: 0;
`;
