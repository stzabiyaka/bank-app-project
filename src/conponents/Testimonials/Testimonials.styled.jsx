import styled from '@emotion/styled';
import { InfoTitle, InfoText } from '../../utilities/styles';

export const TestimonialsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ theme }) => theme.container.max};
  width: calc(100% - (${({ theme }) => theme.padding.paddingSm} * 2));

  &::after {
    content: '';
    position: absolute;
    width: 35%;
    height: 100%;
    right: -35%;
    top: 10%;
    z-index: 0;

    background: ${({ theme }) => theme.bgGradients.lightBlueGradient};
    filter: blur(350px);
    border-radius: 200px;
    transform: rotate(47.46deg);
  }
`;

export const TestimonialsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: row;
    margin-bottom: 80px;
  }
`;

export const TestimonialsInfoTitle = styled(InfoTitle)`
  line-height: 1.7;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-right: 24px;
    margin-bottom: 0;
    max-width: 470px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    margin-right: 130px;
  }
`;

export const TestimonialsInfoText = styled(InfoText)`
  margin-bottom: 0;

  line-height: 1.8;

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    margin-bottom: 0;
    max-width: 470px;
  }
`;

export const TestimonialsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;
