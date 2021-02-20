import { transparentize } from 'polished';
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
    switch: {
      active: {
        background: baseColors[mainThemeColor][600],
        color: baseColors[mainThemeColor][200],
      },
      base: {
        background: baseColors[mainThemeColor][200],
        color: baseColors[mainThemeColor][600],
      },
    },
    button: {
      contained: {
        primary: {
          background: baseColors[mainThemeColor][600],
          color: baseColors[mainThemeColor][200],
          hover: {
            border: baseColors[mainThemeColor][100],
          },
        },
        secondary: {
          background: baseColors[mainThemeColor][400],
          color: baseColors[mainThemeColor][100],
          hover: {
            border: baseColors[mainThemeColor][50],
          },
        },
      },
      text: {
        primary: {
          background: transparentize(0.8, baseColors[mainThemeColor][500]),
          color: baseColors[mainThemeColor][400],
          hover: {
            border: 'transparent',
          },
        },
        secondary: {
          background: transparentize(0.8, baseColors[mainThemeColor][200]),
          color: baseColors[mainThemeColor][300],
          hover: {
            border: 'transparent',
          },
        },
      },
    },
    boxShadow: {
      color1: 'rgb(255, 255, 255, 0.12)',
      color2: 'rgb(255, 255, 255, 0.24)',
    },
  },
};
