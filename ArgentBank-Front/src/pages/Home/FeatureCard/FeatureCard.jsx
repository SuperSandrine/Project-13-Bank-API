import PropTypes from 'prop-types';

import { StyledFeatureDiv } from './FeatureCard.Styled';

const FeatureCard = (props) => {
  //console.log('props dans feature', props.content.id);
  const { id, pictureSrc, pictureAlt, title, text } = props.content;
  return (
    <StyledFeatureDiv className="feature-item">
      <img src={pictureSrc} alt={pictureAlt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </StyledFeatureDiv>
  );
};

FeatureCard.propTypes = {};

export default FeatureCard;
