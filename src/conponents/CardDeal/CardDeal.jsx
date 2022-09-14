import {
  Section,
  Container,
  InfoContainer,
  InfoTitle,
  InfoText,
  Button,
} from '../../utilities/styles';
import { card } from '../../assets';
import { CardDealPicture, CardDealPictureContainer } from './CardDeal.styled';

const CardDeal = () => {
  return (
    <Section pb="70px">
      <Container>
        <InfoContainer left>
          <InfoTitle>Find a better card deal in few easy steps.</InfoTitle>
          <InfoText>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris
            tortor.ç Aliquet ultrices ac, ametau.
          </InfoText>
          <Button>Get Started</Button>
        </InfoContainer>
        <CardDealPictureContainer>
          <CardDealPicture src={card} alt="Card Deal" tittle="Card Deal" />
        </CardDealPictureContainer>
      </Container>
    </Section>
  );
};

export default CardDeal;
