import styled from '@emotion/styled';

export const NavBarContainer = styled.nav`
  position: absolute;
  top: ${({ theme }) => theme.padding.paddingSm};
  right: 0;
  margin-left: auto;

  z-index: 100;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    position: static;
  }
`;

export const NavLink = styled.a`
  padding: ${({ theme }) => theme.padding.padding} 0;

  font-size: 16px;
  line-height: 1.3;
  font-weight: 400;
  text-decoration: none;

  color: ${({ theme }) => theme.palette.triadic};

  transition: color, filter ${({ theme }) => theme.transitions.timeFunction};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.secondary};
    filter: drop-shadow(5px 5px 5px ${({ theme }) => theme.palette.shaded});
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    padding: calc(${({ theme }) => theme.padding.paddingSm} * 2) 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.padding.paddingSm};

  background: ${({ theme }) => theme.bgGradients.blackGradient};
  border-radius: ${({ theme }) => theme.roundRadius};

  visibility: visible;
  opacity: 1;
  pointer-events: auto;

  @media screen and (max-width: calc(${({ theme }) => theme.screens.tablet} - 1px)) {
    transition: visibility, opacity, transform ${({ theme }) => theme.transitions.timeFunction};

    &.hidden {
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
      transform: scaleX(0);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: row;
    padding: 0;

    background: transparent;
  }
`;

export const NavListItem = styled.li`
  display: block;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 0;

    &:not(:last-child) {
      margin-right: 56px;
    }
  }
`;

export const MenuButton = styled.button`
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

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    display: none;
  }
`;

export const MenuIcon = styled.svg`
  width: 28px;
  height: 28px;
  object-fit: contain;
  fill: currentColor;
`;
