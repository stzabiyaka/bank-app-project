import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const AppBarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.container.max};
  width: calc(100% - (${({ theme }) => theme.padding.paddingSm} * 2));
`;

export const LogoIcon = styled.svg`
  width: 32px;
  height: 32px;
  margin-right: 4px;
`;
export const LogoSpan = styled.span`
  color: ${({ theme }) => theme.palette.secondary};
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.padding.paddingSm} 0;

  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  text-decoration: none;

  color: ${({ theme }) => theme.palette.triadic};

  transition: color, filter, transform ${({ theme }) => theme.transitions.timeFunction};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    padding: calc(${({ theme }) => theme.padding.paddingSm} * 2) 0;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.secondary};
    filter: drop-shadow(5px 5px 5px ${({ theme }) => theme.palette.shaded});
    transform: scale(1.05);
  }
`;
