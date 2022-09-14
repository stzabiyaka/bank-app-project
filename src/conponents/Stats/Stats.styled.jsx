import styled from '@emotion/styled';

export const StatsList = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }
`;

export const StatsListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 0;

    &:not(:last-child) {
      margin-right: ${({ theme }) => theme.padding.padding};
    }
  }
`;

export const StatValue = styled.h4`
  margin-right: 26px;
  font-size: 30px;
  line-height: 1.3;
  font-weight: 600;

  @media screen and (min-width: ${({ theme }) => theme.screens.mobile}) {
    font-size: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) and (max-width: calc(${({
      theme,
    }) => theme.screens.desktop} - 1px)) {
    margin-right: 10px;
    font-size: 20px;
  }
`;

export const StatTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
  line-height: 1.3;
  font-weight: 400;
  text-transform: uppercase;

  background: ${({ theme }) => theme.bgGradients.textGradient};
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) and (max-width: calc(${({
      theme,
    }) => theme.screens.desktop} - 1px)) {
    font-size: ${({ theme }) => theme.typography.paragraphDesktop};
  }
`;
