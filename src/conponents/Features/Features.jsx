import { Section, Container, InfoContainer, InfoTitle, InfoText } from '../../utilities/styles';
import { FEATURES } from '../../constatnts';
import FeaturesCard from '../FeaturesCard/FeaturesCard';
import { FeaturesList } from './Features.styled';
import Button from '../Button';

const Features = () => {
  return (
    <Section id="features" pb="60px">
      <Container>
        <InfoContainer left>
          <InfoTitle>
            You do the Business,
            <br /> we’ll handle the money.
          </InfoTitle>
          <InfoText>
            With the right credit card, you can improve your financial life by building credit,
            earning rewards and saving money. But with hundreds of credit cards on the market.
          </InfoText>
          <Button>Get Started</Button>
        </InfoContainer>
        <FeaturesList>
          {FEATURES.map(feature => (
            <FeaturesCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              content={feature.content}
            ></FeaturesCard>
          ))}
        </FeaturesList>
      </Container>
    </Section>
  );
};

export default Features;
