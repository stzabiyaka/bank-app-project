import styled from '@emotion/styled';

export const FeedbsckCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  flex-basis: 80%;
  z-index: 1;

  color: rgba(0, 217, 245, 0.6);
  border: none;
  border-radius: ${({ theme }) => theme.roundRadius};
  cursor: default;
  transition: background ${({ theme }) => theme.transitions.timeFunction};

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    flex-basis: calc(100% - 20px);
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 10px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    flex-basis: calc(100% - 60px);
    padding: 60px 40px;
    &:not(:last-child) {
      margin-right: 30px;
    }
  }

  &:hover {
    background: ${({ theme }) => theme.bgGradients.blackGradient};
  }
`;

export const Icon = styled.svg`
  width: 43px;
  height: 28px;
  margin-bottom: 40px;
  fill: currentColor;
`;

export const FeedbackContent = styled.p`
  margin-bottom: 30px;

  font-size: 16px;
  line-height: 1.8;
  font-weight: 400;
  letter-spacing: 0.02em;

  color: ${({ theme }) => theme.palette.triadic};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 18px;
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

export const AuthorAvatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-right: 16px;
`;

export const AuthorDetails = styled.div``;

export const AuthorName = styled.h4`
  display: block;

  color: ${({ theme }) => theme.palette.triadic};

  font-size: 20px;
  line-height: 1.6;
  font-weight: 400;
`;

export const AuthorTitle = styled.p`
  display: block;

  color: ${({ theme }) => theme.palette.triadic};
  opacity: 0.5;

  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
`;
