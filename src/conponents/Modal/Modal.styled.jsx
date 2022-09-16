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
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  width: fit-content;
  padding: ${({ theme }) => theme.padding.paddingSm};
  padding-bottom: calc(${({ theme }) => theme.padding.paddingSm} * 2);

  background: ${({ theme }) => theme.bgGradients.discountGradient};

  border-radius: ${({ theme }) => theme.roundRadius};
  box-shadow: 0 0 50px ${({ theme }) => theme.palette.shaded};
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  margin: 0 0 24px auto;
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

export const Welcome = styled.p`
  margin-bottom: 24px;
  font-size: ${({ theme }) => theme.typography.paragraphDesktop};
  text-align: center;
  font-weight: 500;

  color: ${({ theme }) => theme.palette.triadic};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Name = styled(Welcome)`
  font-size: ${({ theme }) => theme.typography.title};
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary};
`;
