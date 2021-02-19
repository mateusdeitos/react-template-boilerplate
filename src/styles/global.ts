import { createGlobalStyle, css } from 'styled-components';
import { windowLargerThan500px } from './breakpoints';
import { ITheme } from '../themes/dto/ITheme';

export default createGlobalStyle<{ theme: ITheme }>`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }
    html {
      font-size: 75%;
      ${windowLargerThan500px(css`
        font-size: 100%;
      `)}
    }
    body {
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.textColor};
      --webkit-font-smoothing: antialiased;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      letter-spacing: 0.4px;
      max-width: 768px;
      margin: 0 auto;
      padding: 8px;
    }
    h1, h2, h3, h4, h5 {
      font-family: 'Roboto', sans-serif;
      font-weight: 600;
      color: ${props => props.theme.colors.textColor};
    }
    h1 {
      font-size: 3rem;
      letter-spacing: 0.84px;
    }
    h2 {
      font-size: 2.6rem;
      letter-spacing: 0.72px;
    }
    h3 {
      font-size: 2.4rem;
      letter-spacing: 0.6px;
    }
    h4 {
      font-size: 2rem;
      letter-spacing: 0.52px;
    }
    h5 {
      font-size: 1.8rem;
      letter-spacing: 0.48px;
    }
    strong {
      font-weight: 700;
      color: ${props => props.theme.colors.textColor};
    }
    p {
      letter-spacing: 0.4px;
      font-family: 'Roboto', sans-serif;
      color: ${props => props.theme.colors.textColor};
      opacity: 1;
      font-size: 1.6rem;
    }
    a {
      letter-spacing: 0.4px;
      font-family: 'Roboto', sans-serif;
      opacity: 1;
      font-size: 1.6rem;
      color: ${props => props.theme.colors.linkColor};
    }
    label {
      font-family: 'Roboto', sans-serif;
      color: ${props => props.theme.colors.textColor};
      font-weight: normal;
      font-size: 1.2rem;
      letter-spacing: 0px;
    }
    button {
      cursor: pointer;
    }
    input {
      font-weight: normal;
      font-size: 1.6rem;
      letter-spacing: 0px;
      color: ${props => props.theme.colors.textColor};
    }
    textarea {
      font-weight: normal;
      font-size: 1.6rem;
      letter-spacing: 0px;
      color: ${props => props.theme.colors.textColor};
    }
`;
