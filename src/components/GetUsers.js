import React from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';

const GetUsers = ({ handleButtonClick }) => (
  <Card interactive={true} elevation={Elevation.TWO}>
    <div className="Center">
      <Button onClick={handleButtonClick}>
        <h3>Get Users!</h3>
      </Button>
    </div>
  </Card>
);

export default GetUsers;
