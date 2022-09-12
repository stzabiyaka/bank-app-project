import styled from '@emotion/styled';

export const ClickToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 72px 100px;

  background: ${({ theme }) => theme.bgGradients.blackGradient};
  border: none;
  border-radius: ${({ theme }) => theme.roundRadius};

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Info = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    margin-bottom: 0;
    margin-right: 6px;
  }
`;

export const InfoTitle = styled.h2`
  padding: 0;
  margin: 0 0 24px 0;

  font-size: 48px;
  line-height: 1.4;
  font-weight: 600;
`;

export const InfoText = styled.p`
  padding: 0;
  margin: 0;
  max-width: 470px;

  font-size: 18px;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: 0.01em;

  color: ${({ theme }) => theme.palette.dimWhite};
`;
