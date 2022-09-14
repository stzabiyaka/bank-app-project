import styled from '@emotion/styled';
import { InfoTitle, InfoText } from '../../utilities/styles';

export const ClickToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 24px 24px;

  background: ${({ theme }) => theme.bgGradients.blackGradient};
  border: none;
  border-radius: ${({ theme }) => theme.roundRadius};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 48px 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    padding: 72px 100px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    align-items: flex-start;
    margin-bottom: 0;
    margin-right: 6px;
  }
`;

export const Title = styled(InfoTitle)`
  line-height: 1.4;
`;

export const Text = styled(InfoText)`
  max-width: 470px;
  margin-bottom: 12px;

  line-height: 1.6;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 0;
  }
`;
