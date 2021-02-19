import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../../components/Card';
import Button from '../../components/Button/index';
import Switch from '../../components/Switch';
import Radio from '../../components/Radio/index';
import { ButtonOrder } from '../../components/Button/styles';

const CardComponents: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [buttonType, setButtonType] = useState<ButtonOrder>('primary');
  return (
    <Card>
      <Container>
        <h5>Components</h5>
        <p>Buttons</p>
        <Button isLoading={isLoading} order={buttonType}>
          {buttonType}
        </Button>
        <hr />
        <p>Switch</p>
        <Switch
          checked={isLoading}
          onChange={() => setIsLoading(!isLoading)}
          label={`${isLoading ? 'Stop' : 'Start loading'}`}
        />

        <hr />
        <p>RadioButtons</p>
        <Radio
          orientation="vertical"
          name="button-orders"
          radios={[
            {
              label: 'Primary',
              onChange: () => setButtonType('primary'),
              checked: buttonType === 'primary',
            },
            {
              label: 'Secondary',
              onChange: () => setButtonType('secondary'),
              checked: buttonType === 'secondary',
            },
          ]}
        />
      </Container>
    </Card>
  );
};

const Container = styled.div`
  width: 100%;

  button {
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
