import React, { InputHTMLAttributes } from 'react';
import { v4 } from 'uuid';
import { Wrapper, SwitchBox, SwitchCheckbox } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked?: boolean;
}

const Switch: React.FC<IProps> = ({ label, ...rest }) => {
  const id = v4();
  return (
    <Wrapper>
      <SwitchBox>
        <SwitchCheckbox id={id} type="checkbox" {...rest} />
        <label htmlFor={id}>{label}</label>
      </SwitchBox>
    </Wrapper>
  );
};

export default Switch;
