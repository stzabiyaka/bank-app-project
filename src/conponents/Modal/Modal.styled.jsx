import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;

  background-color: rgba(0, 7, 10, 0.7);

  z-index: 999;
`;

export const ModalContainer = styled.div`
  width: 90%;
  padding: ${({ theme }) => theme.padding.paddingSm};
  background: ${({ theme }) => theme.bgGradients.discountGradient};

  border-radius: ${({ theme }) => theme.roundRadius};
  box-shadow: 0 0 40px ${({ theme }) => theme.palette.shaded};

  @media screen and (min-width: ${({ theme }) => theme.screens.mobile}) {
    width: fit-content;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  margin: 0 0 8px auto;
  padding: 0;
  width: 28px;
  height: 28px;

  color: ${({ theme }) => theme.palette.triadic};

  background-color: transparent;
  border: none;

  cursor: pointer;

  transition: color, transform ${({ theme }) => theme.transitions.timeFunction};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.secondary};

    transform: scale(1.1);
  }
`;

export const Icon = styled.svg`
  width: 28px;
  height: 28px;
  object-fit: contain;
  fill: currentColor;
`;
