/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useDarkMode } from '../hooks/useDarkMode';

const Home = () => {
  const { isDarkMode, toggleColorMode } = useDarkMode();
  return (
    <Card>
      {isDarkMode ? (
        <h4>Dark Mode is Enabled</h4>
      ) : (
        <h4>Dark Mode is Disabled</h4>
      )}
      <Button onClick={toggleColorMode}>Toggle Dark Mode</Button>
      <Link to="/other-page">Go to other page</Link>
    </Card>
  );
};
export default Home;
