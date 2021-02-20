import React from 'react';
import { ClipLoader } from 'react-spinners';
import { useDarkMode } from '../../hooks/useDarkMode';
import {
  ContainedButton,
  TextButton,
  ButtonColor,
  ButtonVariant,
} from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: ButtonColor;
  variant: ButtonVariant;
  isLoading?: boolean;
}

const LoadingIndicator: React.FC<ButtonProps> = ({ color, variant }) => {
  const { currentTheme } = useDarkMode();
  return (
    <ClipLoader
      color={currentTheme.colors.button[variant][color].color}
      size="1.6rem"
    />
  );
};

const Button: React.FC<ButtonProps> = ({
  isLoading = false,
  color,
  variant,
  children,
  ...rest
}) => {
  if (variant === 'text') {
    return (
      <TextButton
        disabled={isLoading}
        variant={variant}
        color={color}
        {...rest}
      >
        {isLoading ? (
          <LoadingIndicator color={color} variant={variant} />
        ) : (
          children
        )}
      </TextButton>
    );
  }
  return (
    <ContainedButton
      disabled={isLoading}
      variant={variant}
      color={color}
      {...rest}
    >
      {isLoading ? (
        <LoadingIndicator color={color} variant={variant} />
      ) : (
        children
      )}
    </ContainedButton>
  );
};

export default Button;
