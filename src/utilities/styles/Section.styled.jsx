import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.padding.section} 0;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    padding: ${({ theme }) => theme.padding.sectionTablet} 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    padding-top: ${({ pt }) => (pt ? pt : ({ theme }) => theme.padding.sectionDesktop)};
    padding-bottom: ${({ pb }) => (pb ? pb : ({ theme }) => theme.padding.sectionDesktop)};
  }
`;
