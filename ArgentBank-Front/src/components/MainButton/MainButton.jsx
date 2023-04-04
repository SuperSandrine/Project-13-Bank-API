import propTypes from 'prop-types';
import { MainButtonStyled } from './MainButton.styled';

const MainButton = (props) => {
  //console.log("************* props de button", props)
  return <MainButtonStyled {...props}>{props.children}</MainButtonStyled>;
};

MainButton.propTypes = {};

export default MainButton;
