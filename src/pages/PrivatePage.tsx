/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';

const PrivatePage = () => {
  return (
    <Card>
      <h1>Private page</h1>
      <Link to="/">Back to Home</Link>
    </Card>
  );
};
export default PrivatePage;
