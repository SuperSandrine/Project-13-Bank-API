/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState, useContext } from 'react';
import MainButton from '../../components/MainButton/MainButton';
import axios from 'axios';
import AuthContext from '../../context/AuthProvider';
import { json } from 'react-router-dom';

const SignIn = () => {
  const { setAuth } = useContext(AuthContext);
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
    console.log('handlelogin mdp et email', password, email);
    const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');

    const params = {
      method: 'POST',
      headers: { Accept: 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3001' },
      mode: 'cors',
      cache: 'default',
    };
    fetch('http://localhost:3001/api/V1/user/login', params, {
      "email":"tony@stark.com","password":"password123"}).then((raw) =>
      raw
        .json()
        .then((data) => ({
          status: raw.status,
          data: data,
        }))
        .then((response) => {
          //action(response);
          console.log('voici la réponse', response);
        })
    );

    // try {
    //   const response = await axios.post(
    //     'http://localhost:3001/api/V1/user/login',
    //     JSON.stringify({ email, password }),
    //     {
    //       headers: { 'Content-Type': 'application/json' },
    //       withCredentials: true,
    //     }
    //   );
    //   // avec axios pas besoin de vérifier sir la reponse est ok comme avec fetch
    //   console.log('rpéonse de asios', JSON.stringify(response?.data));
    //   console.log('rpéonse de asios tte la réponse', JSON.stringify(response));
    //   const accessToken = response?.data?.accessToken;
    //   const roles = response?.data?.roles;
    //   setAuth({ email, password, roles, accessToken });

    //   setEmail('');
    //   setPassword('');
    //   setSuccess(true);
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

    // axios({
    //   method: 'post',
    //   url: `http://localhost:3001/api/v1/user/login`,
    //   withCredentials: true,
    //   data: {
    //     email,
    //     password,
    //   },
    // })
    //   .then((res) => {
    //     if (res.data.errors) {
    //       emailError.innerHTML = res.data.errors.email;
    //       passwordError.innerHTML = res.data.errors.password;
    //     } else {
    //       alert("tu es dans le else, donc apriori t'es loggué");
    //       //window.location = '/'; // on s'est fait émettre un token et on est considéré comme connecté
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in ! </h1>
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
          </form>
        </section>
      )}
    </>
  );
};

export default SignIn;
