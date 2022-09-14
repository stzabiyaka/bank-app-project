import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  align-items: center;
  width: calc(100% - (${({ theme }) => theme.padding.paddingSm} * 2));

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.container.max};
  }
`;
