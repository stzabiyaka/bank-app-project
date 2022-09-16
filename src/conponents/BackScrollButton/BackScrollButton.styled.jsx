import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 0;
  border: none;
  border-radius: 50%;

  z-index: 10;

  color: rgba(255, 255, 255, 0.4);
  background-color: transparent;
  cursor: pointer;

  transition: color ${({ theme }) => theme.transitions.timeFunction};

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    bottom: 50px;
    right: 50px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.secondary};
    box-shadow: ${({ theme }) => theme.shadows.buttonShadow};
  }

  &.hidden {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }
`;

export const Icon = styled.svg`
  width: 50px;
  height: 50px;
  fill: currentColor;
`;
