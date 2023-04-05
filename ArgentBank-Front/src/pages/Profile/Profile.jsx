import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import MainButton from '../../components/MainButton/MainButton';
import AccountCard from '../../components/AccountCard/AccountCard';
import EditName from '../../components/EditName/Editname';
import { LoginStyledMain } from '../Login/Login.styled';
import { getUserDetails } from '../../redux/Actions/userDetailsActions';

const Profile = () => {
  const originalState = useSelector((state) => state);
  const dispatch = useDispatch();
  //const [profileData, setProfileData] = useState(null);
  const [editFormDisplayed, setEditFormDisplayed] = useState(false);
  const { firstName, lastName } = originalState.userDetails;

  //_____________________
  // permet d'utiliser de l'asynchrone dans un composant react
  // DONE = TODO mettre le body dynamique
  useEffect(() => {
    if (!firstName) {
      const getProfileData = async () => {
        console.log('je chasse le profil');
        const token = originalState.user.token;
        const body = {
          email: originalState.user.email,
          password: originalState.user.password,
        };
        const userCredentials = { body, keyToken: token };
        await dispatch(getUserDetails(userCredentials));
        //setProfileData(response);
      };
      getProfileData();
    } else {
      console.log('le profil existe déjà');
    }
  }, [firstName, lastName]);
  // en ajoutant [firstName, lastName] comme dépendance de useEffect, la fonction est appelé quand ces valeurs changent.

  // quand je clique,
  // je fais apparaitre le form et
  // je fais disparaître le bouton
  const handleEdit = (e) => {
    e.preventDefault();
    setEditFormDisplayed(true);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    //console.log('je ferme la modale');
    setEditFormDisplayed(false);
  };

  return (
    <div>
      <div className="test">
        <NavBar />

        <LoginStyledMain className="main bg-dark">
          {originalState?.userDetails?.id ? (
            <>
              <h1 className="header">
                Welcome back
                <br />
                {!editFormDisplayed && (
                  <div>
                    <div>
                      {' '}
                      {firstName} {lastName}!
                    </div>
                    <MainButton
                      className="large-button title"
                      onClick={handleEdit}
                    >
                      Edit Name
                    </MainButton>
                  </div>
                )}
                {editFormDisplayed && (
                  <div>
                    <EditName func={handleCancelClick} />
                  </div>
                )}
              </h1>
              <AccountCard />
            </>
          ) : (
            <h1 className="header">You have to Sign In</h1>
          )}
        </LoginStyledMain>

        <Footer />
      </div>
    </div>
  );
};

export default Profile;
