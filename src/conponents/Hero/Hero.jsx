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
} from './Hero.styled';
import { discount, robot } from '../../assets';
import GetStarted from '../GetStarted';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <Discount>
          <DiscountIcon src={discount} alt="Discount" />
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
        <GradientEllipse zIndex={0} />
        <GradientTrapezoid zIndex={0} />
        <GradientSkew zIndex={0} />
      </HeroPictureContainer>
    </HeroSection>
  );
};

export default Hero;
