import styled from '@emotion/styled';

export const TestimonialsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  width: calc(100% - (${({ theme }) => theme.padding.paddingSm} * 2));

  &::after {
    content: '';
    position: absolute;
    width: 436.52px;
    height: 544.07px;
    right: -35%;
    top: 10%;

    background: ${({ theme }) => theme.bgGradients.lightBlueGradient};
    filter: blur(350px);
    border-radius: 200px;
    transform: rotate(47.46deg);
  }
`;

export const TestimonialsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 80px;
    font-size: 48px;
  }
`;

export const TestimonialsInfoTitle = styled.h2`
  margin: 0;
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

export const TestimonialsInfoText = styled.p`
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

export const TestimonialsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
