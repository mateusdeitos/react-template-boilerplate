import React from 'react';
import styled from 'styled-components';
import { Card } from '../../components/Card';
import { useDarkMode } from '../../hooks/useDarkMode';
import Switch from '../../components/Switch';

const CardDarkMode: React.FC = () => {
  const { isDarkMode, toggleColorMode } = useDarkMode();
  return (
    <Card>
      <Container>
        <h5>useDarkMode</h5>
        <Switch
          checked={isDarkMode}
          onChange={toggleColorMode}
          label={`Dark Mode is ${isDarkMode ? 'Enabled' : 'Disabled'}`}
        />
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

export default CardDarkMode;
