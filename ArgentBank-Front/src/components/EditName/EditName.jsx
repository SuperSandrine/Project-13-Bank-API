import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputStyledDiv } from '../Input/Input.styled';
import styled from 'styled-components';
import { useEffect } from 'react';
import { original } from '@reduxjs/toolkit';
import { updateUserDetails } from '../../redux/userDetailsSlice';

export const EditStyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  div {
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
  }
`;

const SubmitStyledInput = styled.button`
  width: 120px;
  //min-width: 120px;
  //margin: auto;
  color: #00bc77;
  border-color: #00bc77;
  padding-right: 0;
  padding-left: 0;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  border: solid 3px;
  background-color: white;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
`;

const EditName = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(state.userDetails.firstName);
  const [lastName, setLastName] = useState(state.userDetails.lastName);
  const [Data, setData] = useState();
  //console.log('state in editname', state);
  //const { FirstName, LastName } = state.userDetails;
  //console.log('prénom edit name', state.userDetails.firstName);
  console.log('props de edit', props);
  const { open, func } = props;
  console.log('que donne le props handle', func);

  const manageToUpdateNames = async () => {
    const token = state.user.token;
    const body = { firstName: 'Tony', lastName: 'kpoj' }; //TODO faire un body dynamique
    const updatedCredentials = { keyToken: token, body };
    const resp = await dispatch(updateUserDetails(updatedCredentials));
    setData(resp);
  };

  // useEffect(() => {
  //   manageToUpdateNames();
  // }, []);

  const handleEditName = async (e) => {
    e.preventDefault();
    await manageToUpdateNames();
    // if (Data) {
    func(e);
    // }

    //console.log('handleEditName les state locaux', firstName + ' ' + lastName);
    //props.function()
  };

  console.log('état local editname', Data);

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
              //value={firstName || state.userDetails.firstName}
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
          <SubmitStyledInput type="submit" 
          //onClick={func} // ça marche car ça ferme la modale mais ça ne change plus le nom
          >
            Save</SubmitStyledInput>
          <SubmitStyledInput onClick={func}>Cancel</SubmitStyledInput>
        </div>
      </EditStyledForm>
    </div>
  );
};

export default EditName;
