import styled, { ThemeProps } from 'styled-components';
import { ITheme } from '../../themes/dto/ITheme';

export type ButtonColor = 'primary' | 'secondary';
export type ButtonVariant = 'contained' | 'text';
interface IThemeProps {
  theme?: ThemeProps<ITheme>;
  color: ButtonColor;
  variant: ButtonVariant;
}

const scale = 1;

export const ContainedButton = styled.button<IThemeProps>`
  transform: scale(${scale});
  background: ${props =>
    props.theme.colors.button[props.variant][props.color].background};
  color: ${props =>
    props.theme.colors.button[props.variant][props.color].color};
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
  &:not(:disabled):hover {
    border-color: ${props =>
      props.theme.colors.button[props.variant][props.color].hover.border};
  }
  &:active {
    transform: scale(calc(0.95 * ${scale}));
  }
  &:disabled {
    filter: brightness(75%);
    cursor: not-allowed;
  }
  &:disabled:hover {
    border-color: transparent;
  }
`;

export const TextButton = styled.button<IThemeProps>`
  transform: scale(${scale});
  background: transparent;
  color: ${props =>
    props.theme.colors.button[props.variant][props.color].color};
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-width: 10rem;
  min-height: 4rem;
  border: none;
  padding: 1rem 1.2rem;
  border-radius: 0.4rem;
  font-size: 1.26rem;
  font-weight: 600;
  letter-spacing: 0.048rem;
  cursor: pointer;
  transition: background-color 200ms ease-in-out, transform 150ms ease-in;
  &:not(:disabled):hover {
    background: ${props =>
      props.theme.colors.button[props.variant][props.color].background};
  }
  &:active {
    transform: scale(calc(0.95 * ${scale}));
  }
  &:disabled {
    cursor: not-allowed;
  }
  &:disabled:hover {
    border-color: transparent;
  }
`;
