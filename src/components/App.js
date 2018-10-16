import React, { Component } from 'react';
import GetUsers from 'components/GetUsers';
import UserList from 'components/UserList';
import PostList from 'components/PostList';
import { connect } from 'react-redux';
import { loadUsers } from 'reduxModules/users';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GetUsers handleButtonClick={() => this.props.dispatch(loadUsers())} />
        <div className="Container">
          <UserList />
          <PostList />
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  () => ({}),
  dispatch => ({ dispatch })
)(App);
