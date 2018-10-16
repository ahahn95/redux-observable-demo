import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Elevation } from '@blueprintjs/core';

class UserList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="List">
        {users.map((user, i) => (
          <User user={user} key={i} />
        ))}
      </div>
    );
  }
}

export default connect(state => ({ users: state.users }))(UserList);

const User = ({ user: { name } }) => {
  return (
    <div className="User">
      <Card interactive={true} elevation={Elevation.TWO}>
        {`Name: ${name}`}
      </Card>
    </div>
  );
};
