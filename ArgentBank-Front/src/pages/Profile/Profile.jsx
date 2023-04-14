import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import MainButton from '../../components/MainButton/MainButton';
import AccountCard from '../../components/AccountCard/AccountCard';
import EditName from '../../components/EditName/Editname';
import { LoginStyledH1, LoginStyledMain } from '../Login/Login.styled';
import { getUserDetails } from '../../redux/Actions/userDetailsActions';

const Profile = () => {
  const originalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [editFormDisplayed, setEditFormDisplayed] = useState(false);
  const navig = useNavigate();
  const { firstName, lastName } = originalState.userDetails;

  // permet d'utiliser de l'asynchrone dans un composant react
  useEffect(() => {
    if (!originalState.user.email) {
      redirectToLogin();
    } else if (!firstName) {
      const getProfileData = async () => {
        const token = originalState.user.token;
        const body = {
          email: originalState.user.email,
          password: originalState.user.password,
        };
        const userCredentials = { body, keyToken: token };
        await dispatch(getUserDetails(userCredentials));
      };
      getProfileData();
    } else {
      //console.log('le profil existe déjà');
    }
  }, [firstName, lastName]);

  const handleEdit = (e) => {
    e.preventDefault();
    setEditFormDisplayed(true);
  };
  const handleCancelClick = (e) => {
    e.preventDefault();
    setEditFormDisplayed(false);
  };
  const redirectToLogin = () => {
    navig('/login');
  };

  return (
    <div>
      <div className="shape">
        <NavBar />

        <LoginStyledMain>
          {originalState?.userDetails?.id ? (
            <>
              <LoginStyledH1>
                Welcome back
                <br />
                {!editFormDisplayed && (
                  <div>
                    <div>
                      {' '}
                      {firstName} {lastName}!
                    </div>
                    <MainButton onClick={handleEdit}>Edit Name</MainButton>
                  </div>
                )}
                {editFormDisplayed && (
                  <div>
                    <EditName func={handleCancelClick} />
                  </div>
                )}
              </LoginStyledH1>
              <AccountCard />
            </>
          ) : (
            <LoginStyledH1>Wait, you&apos;re being redirected</LoginStyledH1>
          )}
        </LoginStyledMain>

        <Footer />
      </div>
    </div>
  );
};

export default Profile;
