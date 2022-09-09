import styled from '@emotion/styled';

export const StatsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 40px;
    margin-right: 26px;
  }
`;

export const StatsListItem = styled.li`
  padding: 0;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    margin-bottom: 0;
  }
`;

export const StatValue = styled.h4`
  margin: 0;
  margin-right: 20px;
  padding: 0;
  font-size: 30px;
  line-height: 1.3;
  font-weight: 600;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 40px;
    margin-right: 26px;
  }
`;

export const StatTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 400;
  text-transform: uppercase;

  background: ${({ theme }) => theme.bgGradients.textGradient};
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 20px;
  }
`;
