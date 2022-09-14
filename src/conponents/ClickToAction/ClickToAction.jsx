import { Section, Container, Button } from '../../utilities/styles';
import { ClickToActionContainer, Info, Text, Title } from './ClickToAction.styled';

const ClickToAction = () => {
  return (
    <Section pt="50px" pb="80px">
      <Container>
        <ClickToActionContainer>
          <Info>
            <Title>Let’s try our service now!</Title>
            <Text>
              Everything you need to accept card payments and grow your business anywhere on the
              planet.
            </Text>
          </Info>
          <Button>Get Started</Button>
        </ClickToActionContainer>
      </Container>
    </Section>
  );
};

export default ClickToAction;
