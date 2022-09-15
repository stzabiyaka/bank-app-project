import styled from '@emotion/styled';

export const ClientsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const ClientsListItem = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 0;
  }
`;

export const ClientsLink = styled.a`
  color: #424147;

  transition: color, filter ${({ theme }) => theme.transitions.timeFunction};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.secondary};
    filter: drop-shadow(5px 5px 5px ${({ theme }) => theme.palette.shaded});
  }
`;

export const ClientIcon = styled.svg`
  display: block;
  max-width: 192px;
  max-height: 60px;

  fill: currentColor;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) and (max-width: calc(${({
      theme,
    }) => theme.screens.desktop} - 1px)) {
    max-width: 160px;
  }
`;
