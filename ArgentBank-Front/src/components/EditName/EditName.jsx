import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { InputStyledDiv } from './Input.styled';
import { updateUserDetails } from '../../redux/Actions/userDetailsActions';
import { EditStyledForm, SubmitStyledButton } from './EditName.styled';

const EditName = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(state.userDetails.firstName);
  const [lastName, setLastName] = useState(state.userDetails.lastName);
  const { func } = props;

  const manageToUpdateNames = async () => {
    const token = state.user.token;
    const body = { firstName: firstName, lastName: lastName };
    const updatedCredentials = { keyToken: token, body };
    await dispatch(updateUserDetails(updatedCredentials));
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
          <SubmitStyledButton type="submit">Save</SubmitStyledButton>
          <SubmitStyledButton onClick={func}>Cancel</SubmitStyledButton>
        </div>
      </EditStyledForm>
    </div>
  );
};

EditName.propTypes = {
  func: PropTypes.func,
};

export default EditName;
