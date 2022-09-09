import styled from '@emotion/styled';

export const NavBarContainer = styled.nav`
  position: absolute;
  top: calc(${({ theme }) => theme.padding.paddingSm} * 2);
  right: ${({ theme }) => theme.padding.paddingSm};
  margin-left: auto;
  z-index: 100;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    position: static;
  }
`;

export const NavLink = styled.a`
  padding: 6px 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.triadic};
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.secondary};
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    padding: 32px 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: ${({ theme }) => theme.padding.paddingSm};
  background: ${({ theme }) => theme.bgGradients.blackGradient};
  border-radius: ${({ theme }) => theme.roundRadius};

  @media screen and (max-width: 767px) {
    animation: ${({ theme }) => theme.sideBar.animation};

    ${({ theme }) => theme.sideBar.keyFrames};

    &.hidden {
      display: none;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
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

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    margin-bottom: 0;

    &:not(:last-child) {
      margin-right: 56px;
    }
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-bottom: 8px;
  width: 28px;
  height: 28px;
  color: ${({ theme }) => theme.palette.triadic};
  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.secondary};
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    display: none;
  }
`;

export const MenuIcon = styled.svg`
  min-width: 28px;
  min-height: 28px;
  object-fit: contain;
  fill: currentColor;
`;
