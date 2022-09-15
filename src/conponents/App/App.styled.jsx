import styled from '@emotion/styled';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  font-family: ${({ theme }) => theme.fontFamily.poppins};
  background-color: ${({ theme }) => theme.palette.primary};
`;

export const Main = styled.main`
  width: 100%;
`;
