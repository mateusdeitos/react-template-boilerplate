import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../../components/Card';
import { useConfirmation } from '../../hooks/useConfirmation';
import Button from '../../components/Button';
import Select from '../../components/Select';

const CardConfirmation: React.FC = () => {
  const [buttonText, setButtonText] = useState('Ask for confirmation');
  const [delay, setDelay] = useState(0);
  const confirm = useConfirmation();

  const askConfirmation = useCallback(() => {
    confirm({
      confirmationButtonMessage: 'Confirm',
      title: 'Confirm this?',
      description: 'Do you confirm some stuff?',
      delaySubmit: delay,
    })
      .then(() => setButtonText('confirmed!'))
      .catch(() => setButtonText('not confirmed!'));
  }, [confirm, delay]);
  return (
    <Card>
      <Container>
        <h5>useConfirmation</h5>
        <Select
          title="Delay submit (ms)"
          defaultValue="0"
          onChange={e => setDelay(Number(e.target.value))}
          options={[
            {
              label: '0s',
              value: 0,
            },
            {
              label: '1s',
              value: 1000,
            },
            {
              label: '2s',
              value: 2000,
            },
            {
              label: '3s',
              value: 3000,
            },
          ]}
        />
        <Button color="primary" variant="contained" onClick={askConfirmation}>
          {buttonText}
        </Button>
      </Container>
    </Card>
  );
};

const Container = styled.div`
  width: 100%;
  hr {
    margin-top: 0.8rem;
  }
`;

export default CardConfirmation;
