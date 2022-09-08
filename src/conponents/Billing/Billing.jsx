import { Section, Container, InfoContainer, InfoTitle, InfoText } from '../../utilities/styles';
import { apple, google, bill } from '../../assets';
import {
  BillingImagesContainer,
  BillingPicture,
  GradientLayer_1,
  GradientLayer_2,
  Icon,
  IconsList,
  IconsListItem,
  StoreLink,
} from './Billing.styled';

const Billing = () => {
  return (
    <Section id="product">
      <Container reverse>
        <BillingImagesContainer>
          <BillingPicture src={bill} alt="Billing" />
          <GradientLayer_1 zIndex={3} />
          <GradientLayer_2 zIndex={0} />{' '}
        </BillingImagesContainer>
        <InfoContainer>
          <InfoTitle>Easily control your billing & invoicing.</InfoTitle>
          <InfoText>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce
            ipsum orci rhoncus aliporttitor integer platea placerat.
          </InfoText>
          <IconsList>
            <IconsListItem>
              <StoreLink href="#" title="Go to Apple Store">
                <Icon src={apple} alt="Apple Store" />
              </StoreLink>
            </IconsListItem>
            <IconsListItem>
              <StoreLink href="#" title="Go to Google Play">
                <Icon src={google} alt="Google Play" />
              </StoreLink>
            </IconsListItem>
          </IconsList>
        </InfoContainer>
      </Container>
    </Section>
  );
};

export default Billing;
