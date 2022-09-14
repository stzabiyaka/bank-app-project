import styled from '@emotion/styled';

export const FeaturesCardContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 16px;

  border-radius: 20px;
  cursor: default;

  transition: background, box-shadow ${({ theme }) => theme.transitions.timeFunction};

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 20px;
  }

  &:hover {
    background: ${({ theme }) => theme.bgGradients.blackGradient};
    box-shadow: ${({ theme }) => theme.shadows.cardShadow};
  }
`;

export const FeatureCardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 64px;
  height: 64px;
  margin-right: 20px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.dimBlue};
`;

export const FeatureCardIconImage = styled.svg`
  width: 32px;
  height: 32px;
  object-fit: contain;
  fill: ${({ theme }) => theme.palette.secondary};
`;

export const FeatureCardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FeatureCardInfoTitle = styled.h4`
  margin: 0;
  margin-bottom: 8px;

  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: 0.01em;
  text-transform: capitalize;
`;

export const FeatureCardInfoText = styled.p`
  margin: 0;
  max-width: 366px;

  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;

  color: ${({ theme }) => theme.palette.dimWhite};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 16px;
  }
`;
