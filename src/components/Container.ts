import styled, { ThemeProps } from 'styled-components';
import { ITheme } from '../themes/dto/ITheme';

export const Container = styled.div<{ theme: ThemeProps<ITheme> }>`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  box-sizing: border-box;
`;
