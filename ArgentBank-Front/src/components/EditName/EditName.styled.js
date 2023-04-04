import styled from 'styled-components';

export const EditStyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  div {
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
  }
`;

export const SubmitStyledButton = styled.button`
  width: 120px;
  color: #00bc77;
  border-color: #00bc77;
  padding-right: 0;
  padding-left: 0;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  border: solid 3px;
  background-color: white;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
`;
