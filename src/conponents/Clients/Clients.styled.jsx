import styled from '@emotion/styled';

export const ClientsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const ClientsListItem = styled.li`
  margin-bottom: 10px;
  padding: 0;

  color: #424147;
  background-color: transparent;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    margin-bottom: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.dimWhite};
  }
`;

export const ClientIcon = styled.svg`
  display: block;
  max-width: 192px;
  max-height: 60px;
  fill: currentColor;
`;
