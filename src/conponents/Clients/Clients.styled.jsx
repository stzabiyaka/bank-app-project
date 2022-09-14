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

  color: #424147;

  transition: filter, color ${({ theme }) => theme.transitions.timeFunction};

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.secondary};
    filter: drop-shadow(5px 5px 5px ${({ theme }) => theme.palette.dimWhite});
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
