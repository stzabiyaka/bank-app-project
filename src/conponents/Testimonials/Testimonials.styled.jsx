import styled from '@emotion/styled';

export const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: row;
    align-items: center;
    margin: 0;
    font-size: 48px;
  }
`;

export const TestimonialsTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: 38px;
  line-height: 1.6;
  font-weight: 600;
  letter-spacing: 0.01em;
  max-width: 470px;
  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    margin: 0 130px 0 0;
    font-size: 48px;
  }
`;

export const TestimonialsText = styled.p`
  margin: 0;
  max-width: 470px;

  font-size: 16px;
  line-height: 1.7;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.palette.dimWhite};

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 18px;
  }
`;
