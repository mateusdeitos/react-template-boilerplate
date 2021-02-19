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
        base: baseColors.gray[200],
        focus: baseColors.gray[300],
      },
      borders: {
        base: baseColors.gray[400],
        focus: baseColors[mainThemeColor][500],
      },
      placeholder: baseColors.gray[900],
    },
    switch: {
      base: {
        background: baseColors[mainThemeColor][200],
        color: baseColors[mainThemeColor][600],
      },
      active: {
        background: baseColors[mainThemeColor][600],
        color: baseColors[mainThemeColor][200],
      },
    },
    button: {
      primary: {
        background: baseColors[mainThemeColor][200],
        color: baseColors[mainThemeColor][600],
        hover: {
          border: baseColors[mainThemeColor][800],
        },
      },
      secondary: {
        background: baseColors[mainThemeColor][100],
        color: baseColors[mainThemeColor][600],
        hover: {
          border: baseColors[mainThemeColor][500],
        },
      },
    },
    boxShadow: {
      color1: 'rgb(0, 0, 0, 0.12)',
      color2: 'rgb(0, 0, 0, 0.24)',
    },
  },
};
