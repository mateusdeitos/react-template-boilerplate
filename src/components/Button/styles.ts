import styled, { ThemeProps } from 'styled-components';
import { ITheme } from '../../themes/dto/ITheme';

export type ButtonOrder = 'primary' | 'secondary';

interface IThemeProps {
  theme?: ThemeProps<ITheme>;
  order: ButtonOrder;
}

export const Button = styled.button<IThemeProps>`
  background: ${props => props.theme.colors.button[props.order].background};
  color: ${props => props.theme.colors.button[props.order].color};
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-width: 10rem;
  min-height: 4rem;
  border: 0.15rem solid transparent;
  padding: 1rem 1.2rem;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  cursor: pointer;
  transition: border-color 400ms ease-in-out, transform 150ms ease-in;
  &:hover {
    border-color: ${props =>
      props.theme.colors.button[props.order].hover.border};
  }
  &:active {
    transform: scale(0.95);
  }
  &:disabled {
    filter: brightness(75%);
    cursor: not-allowed;
  }
  &:disabled:hover {
    border-color: transparent;
  }
`;
