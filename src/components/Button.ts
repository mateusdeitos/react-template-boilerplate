import styled, { ThemeProps } from 'styled-components';
import { ITheme } from '../themes/dto/ITheme';

export const Button = styled.button<{ theme: ThemeProps<ITheme> }>`
  background: ${props => props.theme.colors.button.primary.background};
  color: ${props => props.theme.colors.button.primary.color};
  display: block;
  max-width: 100%;
  border: 0.15rem solid transparent;
  padding: 1rem 1.2rem;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  cursor: pointer;
  transition: border-color 400ms ease-in-out, transform 150ms ease-in;
  &:hover {
    border-color: ${props => props.theme.colors.button.primary.hover.border};
  }
  &:active {
    transform: scale(0.95);
  }
`;
