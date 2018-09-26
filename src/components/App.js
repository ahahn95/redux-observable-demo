import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from 'reduxModules/users';

export class App extends Component {
  render() {
    const { dispatch } = this.props;
    return <button>Click me!</button>;
  }
}

//nClick={dispatch(getUsers())}

export default connect()(App);
