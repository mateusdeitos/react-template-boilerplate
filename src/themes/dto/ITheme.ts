export interface ITheme {
  colors: {
    background: string;
    cardBackground: string;
    textColor: string;
    linkColor: string;
    input: {
      background: {
        base: string;
        focus: string;
      };
      borders: {
        base: string;
        focus: string;
      };
      placeholder: string;
    };
    button: {
      primary: {
        background: string;
        color: string;
      };
    };
  };
}
