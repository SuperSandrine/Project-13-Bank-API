import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputStyledDiv } from '../Input/Input.styled';
import { useEffect } from 'react';
//import { original } from '@reduxjs/toolkit';
//import { updateUserDetails } from '../../redux/Reducers/userDetailsSlice';
import { updateUserDetails } from '../../redux/Actions/userDetailsActions';
import { EditStyledForm, SubmitStyledButton } from './EditName.styled';

const EditName = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(state.userDetails.firstName);
  const [lastName, setLastName] = useState(state.userDetails.lastName);
  //const [Data, setData] = useState();
  //console.log('state in editname', state);
  //const { FirstName, LastName } = state.userDetails;
  //console.log('prénom edit name', state.userDetails.firstName);
  //console.log('props de edit', props);
  const { func } = props;
  //console.log('que donne le props handle', func);

  const manageToUpdateNames = async () => {
    const token = state.user.token;
    const body = { firstName: firstName, lastName: lastName}; //TODO faire un body dynamique
    const updatedCredentials = { keyToken: token, body };
    //const resp = 
    await dispatch(updateUserDetails(updatedCredentials));
    //setData(resp);
  };

  const handleEditName = async (e) => {
    e.preventDefault();
    await manageToUpdateNames();
    func(e);
  };

  return (
    <div>
      <EditStyledForm onSubmit={handleEditName}>
        <div>
          <InputStyledDiv>
            <input
              type="text"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={firstName}
            />
          </InputStyledDiv>
          <InputStyledDiv>
            <input
              type="text"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
              placeholder={lastName}
            />
          </InputStyledDiv>
        </div>
        <div>
          <SubmitStyledButton
            type="submit"
            //onClick={func} // ça marche car ça ferme la modale mais ça ne change plus le nom
          >
            Save
          </SubmitStyledButton>
          <SubmitStyledButton onClick={func}>Cancel</SubmitStyledButton>
        </div>
      </EditStyledForm>
    </div>
  );
};

export default EditName;
