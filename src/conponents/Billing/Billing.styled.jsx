import styled from '@emotion/styled';

export const BillingPictureContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-right: 6px;

    max-width: 600px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -20%;
    left: -70%;
    width: 63%;
    height: 81%;
    border-radius: 50%;
    background: -webkit-radial-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.5));
    background: -moz-radial-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    filter: blur(750px);

    transform: rotate(176.62deg);
  }

  &::after {
    content: '';
    position: absolute;
    top: 45%;
    left: -50%;
    width: 27%;
    height: 88%;
    border-radius: 50%;
    background: -webkit-${({ theme }) => theme.bgGradients.pinkGradient};
    background: -moz-linear-gradient(
      90deg,
      rgba(244, 196, 243, 0.2) 0%,
      rgba(252, 103, 249, 0.2) 100%
    );
    transform: rotate(156.61deg);
    filter: blur(900px);
  }
`;

export const BillingPicture = styled.img`
  z-index: 5;
`;

export const IconsList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    justify-content: flex-start;
    margin-bottom: 0;
    margin-left: 12px;
  }
`;

export const IconsListItem = styled.li`
  min-width: 122px;
  &:not(:last-child) {
    margin-right: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    &:not(:last-child) {
      margin-right: 42px;
    }
  }
`;

export const StoreLink = styled.a`
  color: ${({ theme }) => theme.palette.triadic};
  text-decoration: none;
  transition: color, filter ${({ theme }) => theme.transitions.timeFunction};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.secondary};
    filter: drop-shadow(5px 5px 5px ${({ theme }) => theme.palette.shaded});
  }
`;

export const Icon = styled.svg`
  fill: currentColor;
`;
