/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState, useContext } from 'react';
import MainButton from '../../components/MainButton/MainButton';
import axios from 'axios';
import AuthContext from '../../context/AuthProvider';
import { json } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import { redirect } from 'react-router-dom';

import { getUserError, getUserStatus, fetchUserData } from '../../redux/redux';

const SignIn = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector(getUserStatus);
  const userError = useSelector(getUserError);





  //const { setAuth } = useContext(AuthContext);
  const originalUser =  useSelector(state => state.user);
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  console.log(originalUser);
 
  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  useEffect(()=>{
    if (userStatus === 'idle'){
      dispatch(fetchUserData());
    }
  },[userStatus, dispatch]);

  let content;
  if (userStatus === 'loading') {
    content = <p>"Loading..."</p>;
  } else if (userStatus === 'succeeded') {
    content = <p>"ça a marché, mais ques dois-je faire</p>;
  } else if (userStatus === 'failed') {
    content = <p>{error}</p>;
  }

  //     return (
  //         <section>
  //             <h2>Posts</h2>
  //             {content}
  //         </section>
  //     )
  // }


  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('handlelogin mdp et email', password, email);
    

    try {
      const response = await axios.post(
        'http://localhost:3001/api/V1/user/login',
        ({ email, password }),
        {
          headers: { 'Content-Type': 'application/json', 
          //'Access-Control-Allow-Origin':'http://localhost:3001' 
          },
          //withCredentials: true,
        }
      );
      // avec axios pas besoin de vérifier si la reponse est ok comme avec fetch
      console.log('réponse de axios token', response.data.body.token);
      // TOUN: comment ça s'appelle ce truc de bla.suite.text, un chemin?, 
      console.log('réponse de axios', response);

      const accessToken = response.data.body.token; // L'opérateur ?. est appelé opérateur de nullish coalescing et permet de vérifier si la propriété data de l'objet response existe avant d'essayer de l'afficher. Si elle n'existe pas, il ne se passe rien et aucun message d'erreur ne s'affiche.
      console.log("accessToken s'il existe", accessToken);
      // là faudrait qu'on prenne la data et qu'on change le redux général
      const userFromAxios = {email:email, token:accessToken};
      dispatch({ type: "user/initialiseUser", payload : userFromAxios });
      //setAuth({ email, password, accessToken });
      setEmail('');
      setPassword('');
      setSuccess(true);
      localStorage.setItem('token', accessToken);
      
    } catch (err) {
      if (!err?.response) {
        setErrMsg('no server response');
        console.log("qu'aije?", err, err.response);
      } else if (err.response?.status === 400) {
        setErrMsg('missing username or password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorizes');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }


    // ce que m'a fait écrire françois
    // const params = {
    //   method: 'POST',
    //   headers: { Accept: 'application/json',
    //     'Access-Control-Allow-Origin': 'http://localhost:3001' },
    //   mode: 'cors',
    //   cache: 'default',
    // };
    // fetch('http://localhost:3001/api/V1/user/login', params, {
    //   "email":"tony@stark.com","password":"password123"}).then((raw) =>
    //   raw
    //     .json()
    //     .then((data) => ({
    //       status: raw.status,
    //       data: data,
    //     }))
    //     .then((response) => {
    //       //action(response);
    //       console.log('voici la réponse', response);
    //     })
    // );

    // le tuto de dave avec un useContext
    // try {
    //   const response = await axios.post(
    //     'http://localhost:3001/api/V1/user/login',
    //     ({ email, password }),
    //     {
    //       headers: { 'Content-Type': 'application/json' },
    //       //withCredentials: true,
    //     }
    //   );
    //   // avec axios pas besoin de vérifier si la reponse est ok comme avec fetch
    //   console.log('rpéonse de asios', JSON.stringify(response?.data));
    //   //console.log('rpéonse de asios tte la réponse', JSON.stringify(response));
    //   const accessToken = response?.data?.accessToken;
    //   const roles = response?.data?.roles;
    //   setAuth({ email, password, roles, accessToken });

    //   setEmail('');
    //   setPassword('');
    //   setSuccess(true);
    //   //console.log("qu'est ce que set auth", setAuth)
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg('no server response');
    //     console.log("qu'aije?", err, err.response);
    //   } else if (err.response?.status === 400) {
    //     setErrMsg('missing username or password');
    //   } else if (err.response?.status === 401) {
    //     setErrMsg('Unauthorizes');
    //   } else {
    //     setErrMsg('Login Failed');
    //   }
    //   errRef.current.focus();
    // }

    //from scratch
    // Requests can be made by passing the relevant config to axios. https://axios-http.com/docs/api_intro 
    // const emailError = document.querySelector('.email.error');
    // const passwordError = document.querySelector('.password.error');
    //   axios({
    //     method: 'post',
    //     url: `http://localhost:3001/api/v1/user/login`,
    //     // Selon docs Axios, les headers sont générés automatiquement
    //     // headers: { Accept: 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3001' },
    //     // mode: 'cors',
    //     // cache: 'default',
    //     // withCredentials: true,
    //     // TOUN FRANCOIS, en enlevant le with credentials, j'ai une réponse correcte, est-ce que le problème de CORS peut venir de là?
    //     data: {
    //       email,
    //       password,
    //     },
    //   })
    //     .then((res) => {
    //       if (res.data.errors) {
    //         emailError.innerHTML = res.data.errors.email;
    //         passwordError.innerHTML = res.data.errors.password;
    //       } else {
    //         console.log(res), // config :  {transitional: {…}, adapter: Array(2), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
    //         //data : {status: 200, message: 'User successfully logged in', body: {…}}
    //         // headers : AxiosHeaders {content-length: '245', content-type: 'application/json; charset=utf-8'}
    //         //request : XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
    //         // status : 200
    //         // statusText : "OK"
    //         // [[Prototype]] : Object
    //         alert("tu es dans le else, donc apriori t'es loggué", res );
          
    //         //window.location = '/'; // on s'est fait émettre un token et on est considéré comme connecté
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
  
  };

  return (
    <>
      {success ? (  
        //redirect(`/home`)
        <section className="sign-in-content">
          {/* <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}> */}
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>You are logged in</h1>
          <MainButton><a href="./profile">Profile page</a></MainButton>
        </section>
      ) : (
        <section className="sign-in-content">
          {/* <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}> */}
          <p ref={errRef}>{errMsg}</p>
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form action="" onSubmit={handleLogin} id="sign-in-form">
            <div className="input-wrapper">
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
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                //required
              />
              <div className="password error"></div>
            </div>

            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* <MainButton>Sign In</MainButton> // c'est pas un boutton qu'il faut, c'est un input */}
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE -->
          <a href="./user.html" class="sign-in-button">Sign In</a>
          <!-- SHOULD BE THE BUTTON BELOW -->
          <!-- <button class="sign-in-button">Sign In</button> -->
          <!--  --> */}
            <input type="submit" value="Sign In" className="sign-in-button" />
            {/* TODO FRANCOIS? j'ai pas fait un bouton mais un input, c'est grave? */}
          </form>
        </section>
      )}
    </>
  );
};

export default SignIn;
