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
  max-width: 40rem;
  width: 100%;
  min-height: 30rem;
  box-shadow: 0 4px 40px ${props => props.theme.colors.boxShadow.color1},
    0 4px 40px ${props => props.theme.colors.boxShadow.color2};
  font-size: 2.4rem;
  font-family: 'Roboto', sans-serif;
`;
