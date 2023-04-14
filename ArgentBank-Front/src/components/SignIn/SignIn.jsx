/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import { Navigate } from 'react-router-dom';
import { getLoggedUser } from '../../redux/Actions/userActions';
import { SignInStyledSection, SignInStyledIcon, SignInStyledInputContainer, SignInStyledInputRememberDiv } from './SignIn.styled';
import { MainButtonStyled } from '../MainButton/MainButton.styled';

const SignIn = () => {
  const dispatch = useDispatch();
  const originalState =  useSelector(state => state);
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const resp = await dispatch(getLoggedUser({email:email, password:password}));
    if(rememberMe){
      console.log("le RememberMe fait qqchose");
    } else{
      console.log("le RememberMe ne fait rien");
    }

    if (resp?.error?.message =="Rejected") {
      //console.log("le message error 0", resp);
      //console.log("le message error", resp.payload.message);
      //setErrMsg("c'est cassé");

      if (resp?.payload.code == "ERR_NETWORK"){
        setErrMsg(resp.payload.message);
      } else if(resp?.payload?.response?.data?.status == 400){
        setErrMsg(resp?.payload?.response?.data?.message );
      } else if(resp?.payload?.response?.status == 404 ){
        setErrMsg("API Login " + resp?.payload?.response?.statusText);
      } else if(resp?.payload?.response?.status == 500 ){
        setErrMsg("API Login " + resp?.payload?.response?.statusText);}

    } else {
      setSuccess(true);
    }
  };

  if(success && originalState?.user?.email ){
    return (<Navigate to="/profile"/>);
  }else{
    return (
      <>
      (
        <SignInStyledSection>
          <p ref={errRef}>{errMsg}</p>
          <SignInStyledIcon className="fa fa-user-circle "></SignInStyledIcon>
          <h1>Sign In</h1>
          <form action="" onSubmit={handleLogin} id="sign-in-form">
            <SignInStyledInputContainer>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              //required
              />
            </SignInStyledInputContainer>

            <SignInStyledInputContainer>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              //required
              />
            </SignInStyledInputContainer>

            <SignInStyledInputRememberDiv >
              <input type="checkbox" id="remember-me" onChange={(e) => setRememberMe(e.target.checked)}/>
              <label htmlFor="remember-me">Remember me</label>
            </SignInStyledInputRememberDiv >
            <MainButtonStyled $large type="submit">Sign In</MainButtonStyled> 
          </form>
        </SignInStyledSection>
      )
      </>
    );
  };
};

export default SignIn;
