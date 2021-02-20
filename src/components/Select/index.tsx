import React from 'react';
import { Select as StyledSelect, Label, Wrapper } from './styles';

interface Options {
  label: string;
  value: string | number;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  options: Options[];
}

const Select: React.FC<SelectProps> = ({
  title,
  options,
  children,
  ...rest
}) => {
  return (
    <Wrapper>
      <Label>{title}</Label>
      <StyledSelect {...rest}>
        {options &&
          options.map(({ label, value }) => (
            <option key={`${label}:${value}`} value={value}>
              {label}
            </option>
          ))}
      </StyledSelect>
      {children}
    </Wrapper>
  );
};

export default Select;
