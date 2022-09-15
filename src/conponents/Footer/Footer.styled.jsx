import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: ${({ theme }) => theme.padding.section};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    padding-top: ${({ theme }) => theme.padding.sectionTablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    padding-top: 72px;
  }
`;

export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - (${({ theme }) => theme.padding.paddingSm} * 2));
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.container.max};
    margin-bottom: 40px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 36px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    align-items: flex-start;
    margin-bottom: 0;
    margin-right: 6px;
  }
`;

export const LogoIcon = styled.svg`
  width: 72px;
  height: 72px;
  margin-right: 9px;
`;
export const LogoSpan = styled.span`
  color: ${({ theme }) => theme.palette.secondary};
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 12px;

  font-size: 40px;
  font-weight: 600;
  line-height: 1.3;
  text-decoration: none;

  color: ${({ theme }) => theme.palette.triadic};

  transition: color, filter, transform ${({ theme }) => theme.transitions.timeFunction};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 30px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.secondary};
    filter: drop-shadow(5px 5px 5px ${({ theme }) => theme.palette.shaded});
    transform: scale(1.05);
  }
`;

export const LogoInfo = styled.p`
  max-width: 260px;

  color: ${({ theme }) => theme.palette.dimWhite};

  font-size: 18px;
  line-height: 1.8;
  font-weight: 400;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-left: 25px;
    max-width: 320px;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: calc(100% / 5 * 3);
  }
`;

export const FooterBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - (${({ theme }) => theme.padding.paddingSm} * 2));
  padding-top: 30px;
  padding-bottom: 30px;

  border-top: 1px solid #3f3e45;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.container.max};
  }
`;

export const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph};
  line-height: 1.5;
  font-weight: 400;

  color: rgba(255, 255, 255, 0.6);

  &:last-of-type {
    margin-bottom: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: ${({ theme }) => theme.typography.paragraphTablet};
    &:last-of-type {
      margin-bottom: 0;
      margin-right: auto;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    font-size: ${({ theme }) => theme.typography.paragraphDesktop};
  }
`;

export const SocialsList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const SocialsListItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.triadic};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.secondary};
  }
`;

export const SocialIcon = styled.svg`
  width: 21px;
  height: 21px;
  fill: currentColor;
`;
