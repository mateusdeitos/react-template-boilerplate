/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import CardComponents from '../Cards/Components';
import CardConfirmation from '../Cards/Confirmation';
import CardDarkMode from '../Cards/DarkMode';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <CardDarkMode />
      <CardConfirmation />
      <CardComponents />
    </Container>
  );
};
export default Home;
