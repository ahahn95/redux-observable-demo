import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Elevation } from '@blueprintjs/core';
import { loadPosts } from 'reduxModules/posts';
import { Center } from 'components/Utility';

class UserList extends Component {
  state = {
    activeUser: null
  };

  handleUserClick = id => {
    this.props.dispatch(loadPosts(id));
    this.setState({ activeUser: id });
  };
  render() {
    const { users } = this.props;
    const { activeUser } = this.state;

    return users.length ? (
      <div className="List">
        <Center>
          <h2>Users</h2>
        </Center>
        {users.map(user => (
          <User
            user={user}
            key={user.id}
            handleUserClick={() => this.handleUserClick(user.id)}
            isActive={user.id === activeUser}
          />
        ))}
      </div>
    ) : null;
  }
}

export default connect(state => ({ users: state.users }))(UserList);

const User = ({ user: { name }, handleUserClick, isActive }) => (
  <div
    className={`Item ${isActive ? 'Active' : null}`}
    onClick={handleUserClick}
  >
    <Card interactive={true} elevation={Elevation.TWO}>
      {`Name: ${name}`}
    </Card>
  </div>
);
