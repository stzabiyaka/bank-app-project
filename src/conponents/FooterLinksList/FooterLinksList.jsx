import {
  FooterLinksContainer,
  Link,
  LinksList,
  LinksListItem,
  LinksListTitle,
} from './FooterLinksList.styled';

const FooterLinksList = ({ title, links }) => {
  return (
    <FooterLinksContainer>
      <LinksListTitle>{title}</LinksListTitle>
      <LinksList>
        {links.map(({ name, link }) => (
          <LinksListItem key={name}>
            <Link href="#" title={`Go to ${name}`}>
              {name}
            </Link>
          </LinksListItem>
        ))}
      </LinksList>
    </FooterLinksContainer>
  );
};

export default FooterLinksList;
