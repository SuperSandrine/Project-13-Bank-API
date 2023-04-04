import React, { useEffect, useState, useRef } from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import { LoginStyledMain } from '../Login/Login.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../../redux/userDetailsSlice';
import MainButton from '../../components/MainButton/MainButton';
import AccountCard from '../../components/AccountCard/AccountCard';
import EditName from '../../components/EditName/Editname';

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
  //const modalEdit = useRef(null);
  //const names = useRef(null);
  //const disapear = useRef(null);
  const [editFormDisplayed, setEditFormDisplayed] = useState(false);

  const { firstName, lastName } = originalState.userDetails;

  // permet d'utiliser de l'asynchrone dans un composant react
  // TODO mettre le body dynamique
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

  // quand je clique,
  // je fais apparaitre le form et
  // je fais disparaître le bouton
  const handleEdit = (e) => {
    e.preventDefault();
    setEditFormDisplayed(true);
    //const nouveauPara = EditName;
    //modalEdit.replaceChild(nouveauPara, ancienPara);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    console.log("je ferme la modale");
    setEditFormDisplayed(false);
  };

  return (
    <div>
      <div className="test">
        <NavBar />
        <LoginStyledMain className="main bg-dark">
          <h1 className="header">
            Welcome back
            <br />
            {!editFormDisplayed && (
              <div>
                <div 
                //ref={names}
                >
                  {' '}
                  {firstName} {lastName}!
                </div>
                <MainButton
                  //ref={disapear}
                  className="large-button title"
                  onClick={handleEdit}
                >
                  Edit Name
                </MainButton>
              </div>
            )}
            {editFormDisplayed && (
              <div 
              //ref={modalEdit}
              >
                <EditName
                  open={editFormDisplayed}
                  func={handleCancelClick}
                />
              </div>
            )}
          </h1>
          <AccountCard />
        </LoginStyledMain>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
