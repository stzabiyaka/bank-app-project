import { icons } from '../../assets';
import { FOOTER_LINKS, SOCIAL_MEDIA, NAV_LINKS } from '../../constatnts';
import FooterLinksList from '../FooterLinksList';
import {
  FooterContainer,
  FooterNav,
  LogoContainer,
  LogoLink,
  LogoIcon,
  LogoSpan,
  LogoInfo,
  FooterBottomContainer,
  Copyright,
  SocialsList,
  SocialsListItem,
  SocialIcon,
  SocialLink,
  FooterLinksContainer,
} from './Footer.styled';

const Footer = () => {
  const ref = NAV_LINKS[0];
  return (
    <FooterContainer>
      <FooterNav>
        <LogoContainer>
          <LogoLink href={`#${ref.id}`} title={ref.title}>
            <LogoIcon aria-label="HooBank logo">
              <use href={`${icons}#icon-logo`} />
            </LogoIcon>
            Hoo<LogoSpan>Bank</LogoSpan>
          </LogoLink>
          <LogoInfo>A new way to make the payments easy, reliable and secure.</LogoInfo>
        </LogoContainer>
        <FooterLinksContainer>
          {FOOTER_LINKS.map(({ title, links }, index) => (
            <FooterLinksList title={title} links={links} key={title} />
          ))}
        </FooterLinksContainer>
      </FooterNav>
      <FooterBottomContainer>
        <Copyright>Copyright &copy; 2022 HooBank.&nbsp;</Copyright>
        <Copyright>All Rights Reserved.</Copyright>
        <SocialsList>
          {SOCIAL_MEDIA.map(({ id, icon, link }) => (
            <SocialsListItem key={id}>
              <SocialLink
                href={link}
                title={`Go to ${icon}`}
                aria-label={icon}
                rel="noreferrer noopener nofollow"
                target="_blank"
              >
                <SocialIcon>
                  <use href={`${icons}#icon-${icon}`} />
                </SocialIcon>
              </SocialLink>
            </SocialsListItem>
          ))}
        </SocialsList>
      </FooterBottomContainer>
    </FooterContainer>
  );
};

export default Footer;
