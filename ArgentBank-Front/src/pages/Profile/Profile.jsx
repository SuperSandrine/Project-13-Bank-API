import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import { LoginStyledMain } from '../Login/Login.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../../redux/userDetailsSlice';
import MainButton from '../../components/MainButton/MainButton';
import AccountCard from '../../components/AccountCard/AccountCard';

// const getProfileData = async (keyToken) => {
//   console.log('*********', keyToken);
//   const dispatch = useDispatch();
//   //const originalState = useSelector((state) => state);
//   const body = { email: 'tony@stark.com', password: 'password123' };
//   const userCredentials = { body, keyToken };
//   const response = await dispatch(getUserDetails(userCredentials, keyToken));
//   console.log('la réponse de axios dans getDATA', response);
//   return 'alpha';
// };

const Profile = () => {
  const originalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState(null);
  const { firstName, lastName } = originalState.userDetails;

  // permet d'utiliser de l'asynchrone dans un composant react
  useEffect(() => {
    const getProfileData = async () => {
      const token = originalState.user.token;
      const body = { email: 'tony@stark.com', password: 'password123' };
      const userCredentials = { body, keyToken: token };
      const response = await dispatch(getUserDetails(userCredentials));
      setProfileData(response);
    };
    getProfileData();
  }, []);

  console.log('état local', profileData);
  // console.log("here is token", token)
  // const profileDataResp = async () =>{
  // await getProfileData(token);}
  // profileDataResp()
  //console.log('la réponse axios de profile', profileDataResp)

  // on est dans une boucle infinie de pending et 200

  return (
    <div>
      <div className="test">
        <NavBar />
        <LoginStyledMain className="main bg-dark">
          <h1 className="header">
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          <MainButton className="large-button">Edit Name</MainButton>
          <AccountCard />
        </LoginStyledMain>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
