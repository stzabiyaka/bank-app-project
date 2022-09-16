import styled from '@emotion/styled';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: ${({ theme }) => theme.padding.section};
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-left: ${({ theme }) => theme.padding.paddingSm};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-left: ${({ theme }) => theme.padding.paddingSm};
  }
  @media screen and (min-width: calc(${({ theme }) => theme.container.max} + (${({ theme }) =>
      theme.padding.paddingSm} * 2))) {
    margin-left: calc((100% - (${({ theme }) => theme.container.max})) / 2);
  }
`;

export const HeroInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${({ theme }) => theme.padding.paddingSm};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    align-items: flex-start;
    max-width: 670px;
    margin-right: ${({ theme }) => theme.padding.padding};
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
  color: ${({ theme }) => theme.palette.triadic};
  font-size: ${({ theme }) => theme.typography.paragraph};
  line-height: 1.5;
  font-weight: 400;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: ${({ theme }) => theme.typography.paragraphTablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    font-size: ${({ theme }) => theme.typography.paragraphDesktop};
  }
`;

export const DiscountSpan = styled.span`
  color: ${({ theme }) => theme.palette.dimWhite};
`;

export const HeroTitle = styled.h1`
  margin-bottom: 20px;

  font-size: 40px;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 1;
  text-align: center;

  color: ${({ theme }) => theme.palette.triadic};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 30px;

    font-size: 52px;
    line-height: 1.4;
    text-align: left;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    font-size: 72px;
    margin-bottom: 40px;
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

  font-size: ${({ theme }) => theme.typography.paragraph};
  line-height: 1.5;
  font-weight: 400;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: ${({ theme }) => theme.typography.paragraphTablet};
    line-height: 1.7;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    font-size: ${({ theme }) => theme.typography.paragraphDesktop};
  }
`;

export const HeroPictureContainer = styled.div`
  position: relative;
  align-self: flex-start;
  position: relative;
  display: flex;

  &::before {
    content: '';
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
  }

  &::after {
    content: '';
    position: absolute;
    right: 3%;
    bottom: 35%;
    width: 65%;
    height: 70%;
    border-radius: 50%;
    z-index: ${({ zIndex }) => zIndex};
    background: -webkit-radial-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.5));
    background: -moz-radial-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    filter: blur(750px);
  }
`;

export const HeroPicture = styled.img`
  max-width: 100%;
  object-fit: contain;
  z-index: 5;
`;
