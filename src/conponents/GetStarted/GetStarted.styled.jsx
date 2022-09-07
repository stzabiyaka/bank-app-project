import styled from '@emotion/styled';

export const GetStartedButton = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  width: 140px;
  height: 140px;
  padding: 2px;
  cursor: pointer;

  border-radius: 50%;
  background: ${({ theme }) => theme.bgGradients.blueGradient};

  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    position: absolute;
    top: 12px;
    right: 60px;

    z-index: 2;
  }
`;

export const GetStartedButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.primary};
`;

export const GetStartedGradientSpan = styled.span`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.bgGradients.textGradient};
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 500;
`;

export const GetStartedIcon = styled.img`
  display: inline-block;
  width: 23px;
  height: 23px;
  margin-left: 4px;
  object-fit: contain;
`;
