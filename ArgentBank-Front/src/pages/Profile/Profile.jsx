import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import { LoginStyledMain } from '../Login/Login.styled';
import { useSelector, useDispatch } from 'react-redux';

// onclick on button signout, terminateUser

const Profile = () => {
  const originalUser = useSelector((state) => state.user);
  console.log('originalUser', originalUser);
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
