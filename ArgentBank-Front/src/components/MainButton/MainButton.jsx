import PropTypes from 'prop-types';
import { MainButtonStyled } from './MainButton.styled';

const MainButton = (props) => {
  return <MainButtonStyled {...props}>{props.children}</MainButtonStyled>;
};

MainButton.propTypes = {
  children: PropTypes.node, // type node= contenu jsx comme texte, composants, ...
};

export default MainButton;
