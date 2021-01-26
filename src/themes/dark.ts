import { baseColors, mainThemeColor } from './colors';
import { ITheme } from './dto/ITheme';

export const dark: ITheme = {
  colors: {
    background: baseColors.gray[800],
    cardBackground: baseColors.gray[700],
    textColor: baseColors.gray[50],
    linkColor: baseColors.blue[400],
    input: {
      background: {
        base: baseColors.gray[900],
        focus: baseColors.gray[800],
      },
      borders: {
        base: baseColors.gray[500],
        focus: baseColors[mainThemeColor][600],
      },
      placeholder: baseColors.gray[50],
    },
    button: {
      primary: {
        background: baseColors[mainThemeColor][600],
        color: baseColors[mainThemeColor][200],
        hover: {
          border: baseColors[mainThemeColor][100],
        },
      },
    },
    boxShadow: {
      color1: 'rgb(255, 255, 255, 0.12)',
      color2: 'rgb(255, 255, 255, 0.24)',
    },
  },
};
