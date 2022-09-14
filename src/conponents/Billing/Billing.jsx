import { Section, Container, InfoContainer, InfoTitle, InfoText } from '../../utilities/styles';
import { stores, bill } from '../../assets';
import {
  BillingPictureContainer,
  BillingPicture,
  Icon,
  IconsList,
  IconsListItem,
  StoreLink,
} from './Billing.styled';

const Billing = () => {
  return (
    <Section id="product" pb="60px">
      <Container reverse>
        <BillingPictureContainer>
          <BillingPicture src={bill} alt="Billing" />
        </BillingPictureContainer>
        <InfoContainer>
          <InfoTitle>Easily control your billing & invoicing.</InfoTitle>
          <InfoText>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce
            ipsum orci rhoncus aliporttitor integer platea placerat.
          </InfoText>
          <IconsList>
            <IconsListItem>
              <StoreLink
                href="https://www.apple.com/app-store/"
                title="Go to Apple Store"
                rel="noreferrer noopener nofollow"
                target="_blank"
              >
                <Icon aria-label="Apple Store" width="110" height="28">
                  <use href={`${stores}#logo-apple`} />
                </Icon>
              </StoreLink>
            </IconsListItem>
            <IconsListItem>
              <StoreLink
                href="https://play.google.com/"
                title="Go to Google Play"
                rel="noreferrer noopener nofollow"
                target="_blank"
              >
                <Icon aria-label="Google Play" width="122" height="30">
                  <use href={`${stores}#logo-google`} />
                </Icon>
              </StoreLink>
            </IconsListItem>
          </IconsList>
        </InfoContainer>
      </Container>
    </Section>
  );
};

export default Billing;
