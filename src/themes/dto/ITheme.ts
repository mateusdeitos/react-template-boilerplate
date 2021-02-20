type IButton = {
  background: string;
  color: string;
  hover: {
    border: string;
  };
};
type IButtonColor = {
  primary: IButton;
  secondary: IButton;
};
type IButtonVariant = {
  contained: IButtonColor;
  text: IButtonColor;
};

type ISwitch = {
  base: {
    background: string;
    color: string;
  };
  active: {
    background: string;
    color: string;
  };
};
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
    button: IButtonVariant;
    switch: ISwitch;
    boxShadow: {
      color1: string;
      color2: string;
    };
  };
}
