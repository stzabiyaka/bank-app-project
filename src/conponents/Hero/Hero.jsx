import {
  HeroContainer,
  Discount,
  DiscountIcon,
  DiscountSpan,
  DiscountText,
  GradientSkew,
  GradientEllipse,
  GradientTrapezoid,
  HeroPicture,
  HeroPictureContainer,
  HeroSection,
  HeroText,
  HeroTitle,
  HeroTitleContainer,
  HeroTitleSpan,
  GradientLayerBottom,
} from './Hero.styled';
import { icons, robot } from '../../assets';
import GetStarted from '../GetStarted';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <Discount>
          <DiscountIcon aria-label="Discount">
            <use href={`${icons}#icon-discount`} />
          </DiscountIcon>
          <DiscountText>
            20%<DiscountSpan> Discount for </DiscountSpan>1 month{' '}
            <DiscountSpan>account</DiscountSpan>
          </DiscountText>
        </Discount>
        <HeroTitleContainer>
          <HeroTitle>
            The Next <HeroTitleSpan>Generation</HeroTitleSpan> Payment Method.
          </HeroTitle>
          <GetStarted />
        </HeroTitleContainer>
        <HeroText>
          Our team of experts uses a methodology to identify the credit cards most likely to fit
          your needs. We examine annual percentage rates, annual fees.
        </HeroText>
      </HeroContainer>
      <HeroPictureContainer>
        <HeroPicture src={robot} alt="Robot arm" />
        <GradientTrapezoid zIndex={0} />
        <GradientEllipse zIndex={1} />
        <GradientSkew zIndex={2} />
        {/* <GradientLayerBottom /> */}
      </HeroPictureContainer>
    </HeroSection>
  );
};

export default Hero;
