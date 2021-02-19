import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../../components/Card';
import { useDarkMode } from '../../hooks/useDarkMode';
import Switch from '../../components/Switch';

const CardDarkMode: React.FC = () => {
  const { isDarkMode, toggleColorMode, currentTheme } = useDarkMode();
  const [code, setCode] = useState('');
  useEffect(() => {
    const str = JSON.stringify(currentTheme, null, 2);
    const matches = str.match(/#[A-Z0-9]+/gm);
    if (Array.isArray(matches)) {
      matches.map(matched => str.replace(matched, `<span>${matched}</span>`));
    }
    setCode(str);
  }, [currentTheme]);
  return (
    <Card>
      <Container>
        <h5>useDarkMode</h5>
        <Switch
          checked={isDarkMode}
          onChange={toggleColorMode}
          label={`Dark Mode is ${isDarkMode ? 'Enabled' : 'Disabled'}`}
        />
        <hr />
        <p>Current Theme</p>
        <CodeBlock>
          <pre>{code}</pre>
        </CodeBlock>
      </Container>
    </Card>
  );
};

const CodeBlock = styled.div`
  max-height: 15rem;
  overflow-y: scroll;
  border: 0.1rem solid;
  width: 100%;
  pre {
    align-self: center;
    font-size: 1.5rem;
  }
`;
const Container = styled.div`
  width: 100%;
  hr {
    margin-top: 0.8rem;
  }
`;

export default CardDarkMode;
