/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { InputHTMLAttributes } from 'react';
import { v4 } from 'uuid';
import { Wrapper, SwitchBox, SwitchRadio, RadioTitle } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked?: boolean;
}

interface IRadios {
  radios: IProps[];
  name: string;
  title?: string;
  orientation: 'horizontal' | 'vertical';
}

const Radio: React.FC<IRadios> = ({ title, name, orientation, radios }) => {
  const id = v4();
  return (
    <Wrapper orientation={orientation}>
      {title && <RadioTitle>{title}</RadioTitle>}
      {radios.map(({ label, checked, ...rest }) => (
        <SwitchBox key={`${name}:${label}`}>
          <label>
            <SwitchRadio
              name={name}
              checked={checked}
              id={id}
              type="radio"
              {...rest}
            />
            <span>{label}</span>
          </label>
        </SwitchBox>
      ))}
    </Wrapper>
  );
};

export default Radio;
