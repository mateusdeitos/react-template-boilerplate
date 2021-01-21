/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import themes from './themes';

import { Container } from './components/Container';
import { useDarkMode } from './hooks/useDarkMode';
import Routes from './routes';

const App = () => {
  const { isDarkMode } = useDarkMode();
  const { dark, light } = themes;
  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  );
};
export default App;
