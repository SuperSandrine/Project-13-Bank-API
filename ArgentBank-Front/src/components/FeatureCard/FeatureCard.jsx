import PropTypes from 'prop-types';

import {
  StyledFeatureDiv,
  StyledFeatureH3,
  StyledFeatureImg,
} from './FeatureCard.Styled';

const FeatureCard = (props) => {
  const { pictureSrc, pictureAlt, title, text } = props.content;
  return (
    <StyledFeatureDiv>
      <StyledFeatureImg src={pictureSrc} alt={pictureAlt} />
      <StyledFeatureH3>{title}</StyledFeatureH3>
      <p>{text}</p>
    </StyledFeatureDiv>
  );
};

FeatureCard.propTypes = {
  content: PropTypes.shape({
    pictureSrc: PropTypes.string,
    pictureAlt: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  }),
};

export default FeatureCard;
