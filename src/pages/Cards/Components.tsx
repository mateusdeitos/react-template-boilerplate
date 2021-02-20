import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../../components/Card';
import Button from '../../components/Button/index';
import Switch from '../../components/Switch';
import Radio from '../../components/Radio/index';
import Select from '../../components/Select/index';
import { ButtonColor, ButtonVariant } from '../../components/Button/styles';
import { baseColors } from '../../themes/colors';

const CardComponents: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState<ButtonColor>('primary');
  const [buttonVariant, setButtonVariant] = useState<ButtonVariant>(
    'contained',
  );
  const selectOptions = useMemo(() => {
    return Object.keys(baseColors).map(color => ({
      label: color,
      value: color,
    }));
  }, []);
  return (
    <Card>
      <Container>
        <h5>Components</h5>
        <p>Buttons</p>
        <Button
          id="main"
          isLoading={isLoading}
          variant={buttonVariant}
          color={buttonColor}
          disabled={isDisabled}
        >
          Button
        </Button>
        <hr />
        <p>Switch</p>
        <Switch
          checked={isLoading}
          onChange={() => setIsLoading(!isLoading)}
          label={`${isLoading ? 'Stop' : 'Start loading'}`}
        />
        <Switch
          checked={isDisabled}
          onChange={() => setIsDisabled(!isDisabled)}
          label={`${isDisabled ? 'Enable' : 'Disable'}`}
        />

        <hr />
        <p>RadioButtons</p>
        <Radio
          title="Button colors"
          orientation="vertical"
          name="button-colors"
          radios={[
            {
              label: 'Primary',
              onChange: () => setButtonColor('primary'),
              checked: buttonColor === 'primary',
            },
            {
              label: 'Secondary',
              onChange: () => setButtonColor('secondary'),
              checked: buttonColor === 'secondary',
            },
          ]}
        />
        <Radio
          title="Button variants"
          orientation="vertical"
          name="button-variants"
          radios={[
            {
              label: 'Contained',
              onChange: () => setButtonVariant('contained'),
              checked: buttonVariant === 'contained',
            },
            {
              label: 'Text',
              onChange: () => setButtonVariant('text'),
              checked: buttonVariant === 'text',
            },
          ]}
        />
        <hr />
        <p>Select</p>
        <Select title="Select" options={selectOptions} />
      </Container>
    </Card>
  );
};

const Container = styled.div`
  width: 100%;

  #main {
    margin: 0 auto;
    margin-top: 0.8rem;
  }
  p:not(:first-child) {
    margin-top: 0.8rem;
  }
  hr {
    margin-top: 0.8rem;
  }
`;

export default CardComponents;
