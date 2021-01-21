/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';

const OtherPage = () => {
  return (
    <Card>
      <Link to="/">Back to Home</Link>
    </Card>
  );
};
export default OtherPage;
