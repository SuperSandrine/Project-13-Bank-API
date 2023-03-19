import PropTypes from 'prop-types';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

import { features } from './FeatureCard/FeaturesContent';
import FeatureCard from './FeatureCard/FeatureCard';
import { StyledMain } from './Home.styled';

const Home = () => {
  return (
    <div>
      <NavBar />
      <StyledMain>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          {features.map((element) => (
            <FeatureCard content={element} key={element.id} />
          ))}
        </section>
      </StyledMain>
      <Footer />
    </div>
  );
};

Home.propTypes = {};

export default Home;

// [] changer dynamiquement le title dans le head en "<title>Argent Bank - Home Page</title>"
