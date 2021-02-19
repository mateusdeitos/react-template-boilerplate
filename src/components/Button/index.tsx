import React from 'react';
import { ClipLoader } from 'react-spinners';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Button as StyledButton } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  order: 'primary' | 'secondary';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  isLoading = false,
  order,
  children,
  ...rest
}) => {
  const { currentTheme } = useDarkMode();
  return (
    <StyledButton disabled={isLoading} order={order} {...rest}>
      {isLoading ? (
        <ClipLoader
          color={currentTheme.colors.button[order].color}
          size="1.6rem"
        />
      ) : (
        children
      )}
    </StyledButton>
  );
};

export default Button;
