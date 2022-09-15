import styled from '@emotion/styled';

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-right: 6px;

  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 0;
  }
`;

export const LinksListTitle = styled.h3`
  padding: 0;
  margin: 0 0 24px 0;

  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;

  color: ${({ theme }) => theme.palette.triadic};
`;

export const LinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const LinksListItem = styled.li`
  margin: 0 0 12px 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Link = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  text-decoration: none;

  transition: color, filter ${({ theme }) => theme.transitions.timeFunction};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.secondary};
    filter: drop-shadow(5px 5px 5px ${({ theme }) => theme.palette.shaded});
  }
`;
