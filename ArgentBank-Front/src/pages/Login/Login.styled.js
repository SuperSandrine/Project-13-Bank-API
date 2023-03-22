import styled from 'styled-components';

export const LoginStyledMain = styled.main`
  .sign-in-button {
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
  }

  .sign-in-content {
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
  }
  .sign-in-icon {
    font-size: 5rem;
  }
  .input-wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
    label {
      font-weight: bold;
    }
    input {
      padding: 5px;
      font-size: 1.2rem;
    }
  }
  .input-remember {
    display: flex;
    label {
      margin-left: 0.25rem;
    }
  }
`;