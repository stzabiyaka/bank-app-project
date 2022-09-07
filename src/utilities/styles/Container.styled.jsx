import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - (${({ theme }) => theme.padding.paddingSm} * 2));

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    width: calc(100% - (${({ theme }) => theme.padding.paddingSm} * 2));
    max-width: 1280px;
  }
`;
