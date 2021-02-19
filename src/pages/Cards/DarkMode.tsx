/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Card } from '../../components/Card';
import { useDarkMode } from '../../hooks/useDarkMode';
import Switch from '../../components/Switch';

const CardDarkMode: React.FC = () => {
  const { isDarkMode, toggleColorMode, currentTheme } = useDarkMode();
  // const [code, setCode] = useState('');
  const code = useMemo(() => {
    const html: string[] = [];
    const iterate = (_obj: any, _level: number) => {
      Object.keys(_obj).forEach((key: any) => {
        const value =
          typeof _obj[key] === 'object'
            ? ''
            : `<label style="background-color: ${_obj[key]}"><span style="color: ${_obj[key]}; filter: invert(100%);">${_obj[key]}</span></label>`;
        const str = `${'&nbsp&nbsp&nbsp'.repeat(_level)}${key}: ${value}<br/>`;
        html.push(str);
        if (typeof _obj[key] === 'object') {
          _level++;
          if (key in _obj) {
            iterate(_obj[key] as Record<string, unknown>, _level);
          }
        } else {
          _level = Math.max(0, _level);
        }
      });
    };
    iterate(currentTheme, 0);
    return html.join('<br/>');
  }, [currentTheme]);
  // useEffect(() => {
  //   const str = JSON.stringify(currentTheme, null, 2);
  //   const matches = str.match(/#[A-Z0-9]+/gm);
  //   if (Array.isArray(matches)) {
  //     matches.map(matched => str.replace(matched, `<span>${matched}</span>`));
  //   }
  //   setCode(str);
  // }, [currentTheme]);
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
        <p>{code}</p>
        <CodeBlock />
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
