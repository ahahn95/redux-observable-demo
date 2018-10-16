import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Elevation } from '@blueprintjs/core';
import { loadPosts } from 'reduxModules/posts';

class UserList extends Component {
  handleUserClick = id => this.props.dispatch(loadPosts(id));
  render() {
    const { users } = this.props;
    return (
      <div className="List">
        {users.map(user => (
          <User
            user={user}
            key={user.id}
            handleUserClick={() => this.handleUserClick(user.id)}
          />
        ))}
      </div>
    );
  }
}

export default connect(state => ({ users: state.users }))(UserList);

const User = ({ user: { name }, handleUserClick }) => {
  return (
    <div className="User" onClick={handleUserClick}>
      <Card interactive={true} elevation={Elevation.TWO}>
        {`Name: ${name}`}
      </Card>
    </div>
  );
};
