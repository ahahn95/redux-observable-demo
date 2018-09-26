import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from 'reduxModules/users';

export class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    dispatch(loadUsers());
  }
  handleButtonClick = () => {};
  render() {
    return <button onClick={this.handleButtonClick}>Click me!</button>;
  }
}

export default connect(
  state => ({}),
  dispatch => ({ dispatch })
)(App);
