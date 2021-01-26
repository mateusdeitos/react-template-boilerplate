import styled, { ThemeProps } from 'styled-components';
import { ITheme } from '../themes/dto/ITheme';

export const Button = styled.button<{ theme: ThemeProps<ITheme> }>`
  background: ${props => props.theme.colors.button.primary.background};
  color: ${props => props.theme.colors.button.primary.color};
  display: block;
  max-width: 100%;
  border: none;
  padding: 1rem 1.2rem;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  cursor: pointer;
`;
