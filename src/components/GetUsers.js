import React from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';

const GetUsers = ({ handleButtonClick }) => (
  <Card interactive={true} elevation={Elevation.TWO}>
    <Button onClick={handleButtonClick}>Click me!</Button>
  </Card>
);

export default GetUsers;
