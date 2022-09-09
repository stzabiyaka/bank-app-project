import styled from '@emotion/styled';

export const BillingImagesContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 600px;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    margin-right: 6px;
  }
`;

export const BillingPicture = styled.img`
  display: block;
  max-width: 100%;
  object-fit: contain;
  z-index: 5;
`;

export const IconsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0 0 20px 0;
  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    justify-content: flex-start;
  }
`;

export const IconsListItem = styled.li`
  &:not(:last-child) {
    margin-right: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    margin-right: 32px;
  }
`;

export const StoreLink = styled.a`
  color: ${({ theme }) => theme.palette.primary};
  text-decoration: none;
  /* transition: box-shadow ${({ theme }) => theme.transitions.timeFunction}; */

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.buttonShadow};
  }
`;

export const Icon = styled.img`
  display: block;
  max-width: 100%;
`;

export const GradientLayer_1 = styled.div`
  position: absolute;
  top: -20%;
  left: -60%;
  width: 60%;
  height: 70%;
  border-radius: 50%;
  background: ${({ theme }) => theme.bgGradients.whiteGradient};
  z-index: ${({ zIndex }) => zIndex};
  filter: blur(750px);
`;

export const GradientLayer_2 = styled.div`
  position: absolute;
  top: 50%;
  left: -70%;
  width: 60%;
  height: 75%;
  border-radius: 50%;
  background: ${({ theme }) => theme.bgGradients.pinkGradient};
  z-index: ${({ zIndex }) => zIndex};
  transform: rotate(156.61deg);
  filter: blur(900px);
`;
