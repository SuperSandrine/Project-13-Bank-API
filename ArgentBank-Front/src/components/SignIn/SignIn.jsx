/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import { Navigate } from 'react-router-dom';
//import { getLoggedUser } from '../../redux/userSlice';
import { getLoggedUser } from '../../redux/Actions/userActions';

import { SignInStyledSection, SignInStyledIcon, SignInStyledInputContainer } from './SignIn.styled';
import { MainButtonStyled } from '../MainButton/MainButton.styled';

const SignIn = () => {
  const dispatch = useDispatch();
  const originalState =  useSelector(state => state);
  //console.log("le state", originalState);
  //console.log("le state2", originalState.user.isLoading);

  //const {userLogInData, isLoading} = useSelector((state)=> state.user);
  //console.log("original user ou à quoi ressemble le state.isLoading", originalState.isLoading);

  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);



  //console.log(originalUser);
 
  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  //useEffect(()=> {
  //  dispatch(getUserLogIn());
  //},[]); // sans dépendance, elle sera appeler q'unr seule fois


  

  //     return (
  //         <section>
  //             <h2>Posts</h2>
  //             {content}
  //         </section>
  //     )
  // }


  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('handlelogin mdp et email', password, email); //ok
    //const userFromAxios = {email:email, password:password}; 
    //try{
    const resp = await dispatch(getLoggedUser({email:email, password:password}));
    //const resp =  await dispatch({type:'user/getLoggedUser', payload:{ email: 'tony@stark.com', password: 'password123'} });
    //console.log("la réponse de la requete", all);

    //dispatch({ type: "user/initialiseUser", payload : userFromAxios });

    //setSuccess(true);
    //localStorage.setItem('token', accessToken);
    //console.log("la réponse renvoyé de axios", resp.payload.data);
    console.log("la réponse complète renvoyé de axios", resp);
    
    // TODO, FRANCOIS: comment récupérer le statut d'erreur pour afficher des messages personnalisés?


    //getion de l'affichage des erreurs à l'utilisateur
    // if (!err.response) {
    //   setErrMsg('no server response');
    //   console.log("qu'aije err?", err);
    //   console.log("qu'aije 2,", err.response);
    //} else 
    if (resp.payload.data.status === 400) {
      setErrMsg('missing username or password');
    } else if (resp.payload.data.status === 401) {
      setErrMsg('Unauthorized');
    } else if (resp.payload.data.status === 200){
      setErrMsg('Login succeeded');
      setSuccess(true);

    } else {
      setErrMsg('Login Failed');
    }
    errRef.current.focus();
    
  


      
    // //} catch (err) {
    //   if (!err.response) {
    //     setErrMsg('no server response');
    //     console.log("qu'aije err?", err);
    //     console.log("qu'aije 2,", err.response);
    //   } else if (err.response?.status === 400) {
    //     setErrMsg('missing username or password');
    //   } else if (err.response?.status === 401) {
    //     setErrMsg('Unauthorizes');
    //   } else {
    //     setErrMsg('Login Failed');
    //   }
    //   errRef.current.focus();
    // }
    // } catch(error){
    //   console.log("erreur du try/catch", error);
    // };
    return resp.payload.data;

  };




  //Cela indique que le state initial de votre application est un objet vide, car vous n'avez pas encore dispatché d'action pour mettre à jour le state. Ainsi, originalUser est un objet vide {}. Cela est conforme à ce que l'on pourrait attendre lorsqu'on utilise Redux, car le state est initialisé au moment de la création du store et ne contient pas encore de données. Il faut d'abord dispatché une action qui mettra à jour le state pour que originalUser contienne des données.






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
  // Est-ce qu'il y a moyen d'exploiter le state error? à réfléchir !!!

  if(success && originalState?.user?.status ){
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
            {/* <MainButton>Sign In</MainButton> // c'est pas un boutton qu'il faut, c'est un input */}
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
