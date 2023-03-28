import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import { LoginStyledMain } from '../Login/Login.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../../redux/userDetailsSlice';

// onclick on button signout, terminateUser

const getProfileData = async (keyToken) => {
  console.log("*********", keyToken);
  const dispatch = useDispatch();
  //const originalState = useSelector((state) => state);
  const body = { 'email': 'tony@stark.com', 'password': 'password123' };
  const userCredentials = {body, keyToken}
  const response = await dispatch(getUserDetails(userCredentials, keyToken));
  console.log('la réponse de axios dans profile', response);
};

const Profile = () => {
  const originalState = useSelector((state) => state);
  const token = originalState.user.token;
  console.log("here is token", token)
  getProfileData(token).then(console.log('lestate après', originalState));

  return (
    <div>
      <div className="test">
        <NavBar />
        <LoginStyledMain className="main bg-dark">
          <h1>la page profile</h1>
        </LoginStyledMain>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
