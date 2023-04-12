import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

import { features } from '../../components/FeatureCard/FeaturesContent';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import {
  StyledFeaturesSection,
  StyledHeroContentSection,
  StyledHeroDiv,
  StyledSubtitleP,
  StyledTextP,
} from './Home.styled';

const Home = () => {
  return (
    <>
      <NavBar />
      <main>
        <StyledHeroDiv>
          <StyledHeroContentSection aria-label="Promoted Content">
            <StyledSubtitleP>No fees.</StyledSubtitleP>
            <StyledSubtitleP>No minimum deposit.</StyledSubtitleP>
            <StyledSubtitleP>High interest rates.</StyledSubtitleP>
            <StyledTextP>
              Open a savings account with Argent Bank today!
            </StyledTextP>
          </StyledHeroContentSection>
        </StyledHeroDiv>
        <StyledFeaturesSection>
          {features.map((element) => (
            <FeatureCard content={element} key={element.id} />
          ))}
        </StyledFeaturesSection>
      </main>
      <Footer />
    </>
  );
};

export default Home;
