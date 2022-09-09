import styled from '@emotion/styled';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 35px;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: row;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 ${({ theme }) => theme.padding.paddingSm};
  max-width: 670px;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    margin: 0 ${({ theme }) => theme.padding.padding};
  }
  @media screen and (min-width: 1292px) {
    margin: 0 calc((100vw - 1280px) / 2);
  }
`;

export const Discount = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  margin-bottom: 12px;
  padding: 6px 10px;
  background: ${({ theme }) => theme.bgGradients.discountGradient};
  border-radius: 10px;
`;

export const DiscountIcon = styled.svg`
  width: 32px;
  height: 32px;
  margin-right: 13px;
  fill: ${({ theme }) => theme.palette.secondary};
`;

export const DiscountText = styled.p`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.palette.triadic};
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  text-transform: uppercase;
`;

export const DiscountSpan = styled.span`
  color: ${({ theme }) => theme.palette.dimWhite};
`;

export const HeroTitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    margin-bottom: 40px;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  padding: 0;

  color: ${({ theme }) => theme.palette.triadic};
  font-size: 50px;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 1;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 72px;
    line-height: 1.4;
  }
`;

export const HeroTitleSpan = styled.span`
  background: ${({ theme }) => theme.bgGradients.textGradient};
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeroText = styled.p`
  margin: 0;
  margin-bottom: 10px;
  max-width: 483px;

  color: ${({ theme }) => theme.palette.dimWhite};

  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 18px;
    line-height: 1.7;
  }
`;

export const HeroPictureContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* max-width: 669px; */
`;

export const HeroPicture = styled.img`
  display: block;
  max-width: 100%;
  object-fit: contain;
  z-index: 5;
`;

export const GradientSkew = styled.div`
  position: absolute;
  bottom: 30%;
  right: -40%;
  width: 80%;
  height: 70%;
  border-radius: 50%;
  z-index: ${({ zIndex }) => zIndex};
  transform: rotate(25deg);
  background: ${({ theme }) => theme.bgGradients.lightBlueGradient};
  filter: blur(650px);
`;

export const GradientEllipse = styled.div`
  position: absolute;
  right: 3%;
  bottom: 35%;
  width: 65%;
  height: 70%;
  border-radius: 50%;
  z-index: ${({ zIndex }) => zIndex};
  background: ${({ theme }) => theme.bgGradients.whiteGradient};
  filter: blur(750px);
`;

export const GradientTrapezoid = styled.div`
  position: absolute;
  width: 40%;
  height: 100%;
  left: 25%;
  bottom: 18%;
  z-index: ${({ zIndex }) => zIndex};
  transform-origin: bottom center;
  transform: perspective(669px) rotateX(-60deg);
  background: ${({ theme }) => theme.bgGradients.navyGradient};
  filter: blur(123px);
`;

export const GradientLayerBottom = styled.div`
  position: absolute;
  width: 85%;
  height: 100%;
  bottom: 0;
  border-radius: 50%;
  z-index: 1;
  transform-origin: bottom center;
  transform: perspective(70vh) rotateX(-65deg);
  background-image: ${({ theme }) => theme.bgGradients.navyGradient};
  background-size: 40% 100%;
  background-position: bottom 24vh left 50%;
  background-repeat: no-repeat;
  filter: blur(123px);
`;
