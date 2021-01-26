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
        base: baseColors[mainThemeColor][50],
        focus: baseColors[mainThemeColor][100],
      },
      borders: {
        base: baseColors[mainThemeColor][200],
        focus: baseColors[mainThemeColor][300],
      },
      placeholder: baseColors.gray[50],
    },
    button: {
      primary: {
        background: baseColors[mainThemeColor][600],
        color: baseColors[mainThemeColor][200],
      },
    },
  },
};
