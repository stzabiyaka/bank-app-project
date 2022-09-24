import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InputLabel = styled.label`
  width: 100%;
  font-size: 12px;
  margin-bottom: 24px;

  text-transform: capitalize;
`;
export const InputLabelText = styled.p`
  font-size: 12px;
  margin-bottom: 4px;

  text-transform: capitalize;
`;

export const InputField = styled.input`
  width: 100%;
  min-height: 60px;
  padding: 10px;
  margin-bottom: 4px;

  font-family: ${({ theme }) => theme.fontFamily.poppins};
  font-size: ${({ theme }) => theme.typography.paragraphTablet};
  font-weight: 400;

  color: ${({ theme }) => theme.palette.primary};

  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme.palette.primary};

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.palette.shaded};
  }

  &::placeholder {
    color: #4b8496;
  }
`;

export const Warn = styled.span`
  color: #ff4040;
`;

export const FormInfo = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph};
  font-weight: 500;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: ${({ theme }) => theme.typography.paragraphTablet};
    margin-bottom: 36px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    font-size: ${({ theme }) => theme.typography.paragraphDesktop};
  }
`;
