import styled, { ThemeProps } from 'styled-components';
import { ITheme } from '../themes/dto/ITheme';

export const Container = styled.div<{ theme: ThemeProps<ITheme> }>`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1.2rem;
  box-sizing: border-box;
`;
