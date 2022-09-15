import styled from '@emotion/styled';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    align-items: flex-start;
    max-width: 50%;
    margin-right: ${({ left }) => (left ? '6px' : '0')};
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    max-width: ${({ left }) => (left ? '600px' : '470px')};
  }
`;

export const InfoTitle = styled.h2`
  margin-bottom: 12px;

  font-size: ${({ theme }) => theme.typography.title};
  line-height: 1.6;
  font-weight: 600;
  letter-spacing: 0.01em;
  text-align: center;

  color: ${({ theme }) => theme.palette.triadic};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 20px;

    font-size: ${({ theme }) => theme.typography.titleTablet};
    text-align: left;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    margin-bottom: 24px;
    font-size: ${({ theme }) => theme.typography.titleDesktop};
  }
`;

export const InfoText = styled.p`
  margin-bottom: 36px;
  max-width: 483px;

  font-size: ${({ theme }) => theme.typography.paragraph};
  line-height: 1.7;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.palette.dimWhite};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: ${({ theme }) => theme.typography.paragraphTablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    margin-bottom: 48px;
    max-width: 570px;

    font-size: ${({ theme }) => theme.typography.paragraphDesktop};
  }
`;
