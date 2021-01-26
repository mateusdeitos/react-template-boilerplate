import { baseColors, mainThemeColor } from './colors';
import { ITheme } from './dto/ITheme';

export const light: ITheme = {
  colors: {
    background: baseColors.gray[50],
    cardBackground: baseColors.gray[400],
    textColor: baseColors.gray[900],
    linkColor: baseColors.blue[700],
    input: {
      background: {
        base: baseColors[mainThemeColor][600],
        focus: baseColors[mainThemeColor][700],
      },
      borders: {
        base: baseColors[mainThemeColor][800],
        focus: baseColors[mainThemeColor][900],
      },
      placeholder: baseColors.gray[900],
    },
    button: {
      primary: {
        background: baseColors[mainThemeColor][200],
        color: baseColors[mainThemeColor][600],
        hover: {
          border: baseColors[mainThemeColor][800],
        },
      },
    },
    boxShadow: {
      color1: 'rgb(0, 0, 0, 0.12)',
      color2: 'rgb(0, 0, 0, 0.24)',
    },
  },
};
