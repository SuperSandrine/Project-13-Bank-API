/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import { Navigate } from 'react-router-dom';
import { getLoggedUser } from '../../redux/Actions/userActions';

import { SignInStyledSection, SignInStyledIcon, SignInStyledInputContainer } from './SignIn.styled';
import { MainButtonStyled } from '../MainButton/MainButton.styled';

const SignIn = () => {
  const dispatch = useDispatch();
  const originalState =  useSelector(state => state);

  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
 
  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    //console.log('handlelogin mdp et email', password, email); //ok
    const resp = await dispatch(getLoggedUser({email:email, password:password}));
    //console.log("la resp dans handleLogin", resp)



    if (resp?.error?.message =="Rejected") {
      //console.log("le message error", resp.payload.data.message || resp.payload.statusText);
      setErrMsg(resp.payload.data.message || "API "+ resp.payload.statusText);
      // TODO, FRANCOIS: gestion de l'affichage des erreurs: comment récupérer le statut d'erreur pour afficher des messages personnalisés?
    } else {
      setSuccess(true);
      return resp.payload.data;
    }
  };



  //TODO mettre un message de chargement et un message de réussite avec un timer avant redirection?
  // if(success && originalState.user.isLoading){
  //   console.log("dans affichage", originalState);
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // } else 

  // if(success && !originalState.user.isLoading){
  //   console.log("dans affichage", originalState);    
  //   return (
  //     <div>
  //       <h1>Bienvenu...</h1>
  //     </div>
  //   );
  // } else {

  // si c'est ok, afficher le message de succès pour un délait de 3 seconde et rediriger vers la page de profile.
  // Est-ce qu'il y a moyen d'exploiter le state error? à réfléchir !!! OUI avec rejectwithvalue

  if(success && originalState?.user?.email ){
    //console.log("je cehrche", originalState);
    //    redirect("/profile"); // TOUN FRANCOIS: pourquoi ça marche pas?
    return (<Navigate to="/profile"/>);
  }else{
    return (
      <>
      (
        <SignInStyledSection>
          {/* <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}> */}
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
              <div className="email error"></div>
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
              <div className="password error"></div>
            </SignInStyledInputContainer>

            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            {/* <!-- PLACEHOLDER DUE TO STATIC SITE -->
          <a href="./user.html" class="sign-in-button">Sign In</a>
          <!-- SHOULD BE THE BUTTON BELOW -->*/}
            <MainButtonStyled className="large-button" type="submit">Sign In</MainButtonStyled> 
            {/* <input type="submit" value="Sign In" className="sign-in-button" /> */}
            {/* TODO : utiliser la className dans le Main Button, regarder comment on tutilise les props dans les styled component */}
            {/* DONE = TODO FRANCOIS? j'ai pas fait un bouton mais un input, c'est grave?, avant cétait mieux, maintenant y a plus trop d'intérêt à privilégié les input, alors qu'en terme de style les buttons sont plus avantageux */}
          </form>
        </SignInStyledSection>
      )
      </>
    );
  };
};

export default SignIn;
