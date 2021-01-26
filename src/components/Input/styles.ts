import styled, { ThemeProps } from 'styled-components';
import { ITheme } from '../../themes/dto/ITheme';

export const Input = styled.input<{ theme: ThemeProps<ITheme> }>`
  background: ${props => props.theme.colors.input.background.base};
  color: ${props => props.theme.colors.textColor};
  display: block;
  max-width: 100%;
  border: 0.2rem solid ${props => props.theme.colors.input.borders.base};
  padding: 1rem 1.2rem;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  min-width: 10rem;
  transition: all 400ms ease-in-out;

  &:focus {
    background: ${props => props.theme.colors.input.background.focus};
    border-color: ${props => props.theme.colors.input.borders.focus};
  }
`;
