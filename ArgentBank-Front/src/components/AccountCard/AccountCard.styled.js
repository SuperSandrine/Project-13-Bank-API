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

  @media (min-width: 720px) {
    flex-direction: row;

    .cta {
      flex: 0;
    }
  }
`;
export const AccountCardStyledContainer = styled.div`
  width: 100%;
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
