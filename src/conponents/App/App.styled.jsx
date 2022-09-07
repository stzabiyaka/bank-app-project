import styled from '@emotion/styled';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.primary};
  font-family: ${({ theme }) => theme.fontFamily.poppins};
`;
