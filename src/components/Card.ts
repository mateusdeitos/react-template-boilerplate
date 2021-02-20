import styled, { ThemeProps } from 'styled-components';
import { ITheme } from '../themes/dto/ITheme';

export const Card = styled.div<{ theme: ThemeProps<ITheme> }>`
  background: ${props => props.theme.colors.cardBackground};
  padding: 2.4rem;
  padding-top: 1.2rem;
  border-radius: 5px;
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 50rem;
  width: 100%;
  min-height: 10rem;
  box-shadow: 0 4px 40px ${props => props.theme.colors.boxShadow.color1},
    0 4px 40px ${props => props.theme.colors.boxShadow.color2};
  font-size: 2.4rem;
  font-family: 'Roboto', sans-serif;

  margin-bottom: 2.5rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    width: 100%;
    text-align: left;
    margin-bottom: 1rem;
  }
`;
