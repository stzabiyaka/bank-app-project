import styled from '@emotion/styled';

export const InfoContainer = styled.div`
  max-width: ${({ left }) => (left ? '600px' : '470px')};

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    margin-right: ${({ left }) => (left ? '6px' : '')};
  }
`;

export const InfoTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: 38px;
  line-height: 1.6;
  font-weight: 600;
  letter-spacing: 0.01em;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    margin: 0 0 24px 0;
    font-size: 48px;
  }
`;

export const InfoText = styled.p`
  margin: 0 0 24px 0;
  max-width: 570px;

  font-size: 16px;
  line-height: 1.7;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.palette.dimWhite};

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    margin: 0 0 48px 0;
    font-size: 18px;
  }
`;
