import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  min-width: fit-content;

  padding: 18px 33px;

  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;

  color: ${({ theme }) => theme.palette.primary};
  border: none;

  border-radius: 10px;
  background: ${({ theme }) => theme.bgGradients.blueGradient};

  transition: box-shadow, transform ${({ theme }) => theme.transitions.timeFunction};

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.buttonShadow};
    transform: translateY(-2px);
  }
`;
