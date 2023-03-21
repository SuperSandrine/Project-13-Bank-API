import propTypes from 'prop-types';
import { MainButtonStyled } from './MainButton.styled';

const MainButton = (props) => {
  return (
    <MainButtonStyled className="sign-in-button" {...props}>
      {props.children}
    </MainButtonStyled>
  );
};

MainButton.propTypes = {};

export default MainButton;
