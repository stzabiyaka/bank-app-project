import {
  HeroContainer,
  Discount,
  DiscountIcon,
  DiscountSpan,
  DiscountText,
  HeroPicture,
  HeroPictureContainer,
  HeroSection,
  HeroText,
  HeroTitle,
  HeroTitleSpan,
  HeroInfo,
} from './Hero.styled';
import { icons, robot } from '../../assets';
import GetStarted from '../GetStarted';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroInfo>
          <Discount>
            <DiscountIcon aria-label="Discount">
              <use href={`${icons}#icon-discount`} />
            </DiscountIcon>
            <DiscountText>
              20%<DiscountSpan> Discount for </DiscountSpan>1 month{' '}
              <DiscountSpan>account</DiscountSpan>
            </DiscountText>
          </Discount>
          <HeroTitle>
            The Next <HeroTitleSpan>Generation </HeroTitleSpan>Payment Method.
          </HeroTitle>
          <HeroText>
            Our team of experts uses a methodology to identify the credit cards most likely to fit
            your needs. We examine annual percentage rates, annual fees.
          </HeroText>
          <GetStarted />
        </HeroInfo>
        <HeroPictureContainer>
          <HeroPicture src={robot} alt="Robot arm" />
        </HeroPictureContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
