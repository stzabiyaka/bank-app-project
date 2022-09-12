import { Section, Container, Button } from '../../utilities/styles';
import { ClickToActionContainer, Info, InfoText, InfoTitle } from './ClickToAction.styled';

const ClickToAction = () => {
  return (
    <Section>
      <Container>
        <ClickToActionContainer>
          <Info>
            <InfoTitle>Let’s try our service now!</InfoTitle>
            <InfoText>
              Everything you need to accept card payments and grow your business anywhere on the
              planet.
            </InfoText>
          </Info>
          <Button>Get Started</Button>
        </ClickToActionContainer>
      </Container>
    </Section>
  );
};

export default ClickToAction;
