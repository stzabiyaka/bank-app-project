import styled from '@emotion/styled';

export const AppBarContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const LogoImg = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  margin-right: 4px;
`;
export const LogoSpan = styled.span`
  color: ${({ theme }) => theme.palette.secondary};
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  padding: 30px 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  color: ${({ theme }) => theme.palette.triadic};
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.secondary};
  }
`;
