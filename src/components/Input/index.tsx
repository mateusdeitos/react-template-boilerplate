import React from 'react';
import { Input as StyledInput } from './styles';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  ...rest
}) => {
  return <StyledInput {...rest}>{children}</StyledInput>;
};

export default Input;
