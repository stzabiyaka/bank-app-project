import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  align-items: center;
  max-width: 1280px;
  width: calc(100% - (${({ theme }) => theme.padding.paddingSm} * 2));

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: row;
    justify-content: space-between;
    width: calc(100% - (${({ theme }) => theme.padding.paddingSm} * 2));
  }
`;
