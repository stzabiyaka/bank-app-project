import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  width: calc(100% - (${({ theme }) => theme.padding.paddingSm} * 2));

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    width: calc(100% - (${({ theme }) => theme.padding.paddingSm} * 2));
  }
`;

export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: calc(100% - (${({ theme }) => theme.padding.paddingSm} * 2));
  }
`;

export const LogoContainer = styled.div`
  align-self: flex-start;
  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
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
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.3;
  color: ${({ theme }) => theme.palette.triadic};
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.secondary};
  }
`;

export const LogoInfo = styled.p`
  margin: 0;
  padding: 0 0 0 25px;
  max-width: 320px;

  color: rgba(255, 255, 255, 0.7);

  font-size: 18px;
  line-height: 1.78;
  font-weight: 400;
`;

export const FooterBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;

  border-top: 1px solid #3f3e45;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Copyright = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;

  color: rgba(255, 255, 255, 0.6);
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
