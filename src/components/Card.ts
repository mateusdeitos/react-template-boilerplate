import styled, { ThemeProps } from 'styled-components';
import { ITheme } from '../themes/dto/ITheme';

export const Card = styled.div<{ theme: ThemeProps<ITheme> }>`
  background: ${props => props.theme.colors.cardBackground};
  padding: 2.4rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  min-height: 300px;
  box-shadow: 0 17px 11px rgb(0, 0, 0, 0.12), 0 2px 33px rgb(0, 0, 0, 0.24);
  font-size: 2.4rem;
  font-family: 'Roboto', sans-serif;
`;
