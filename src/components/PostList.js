import React from 'react';
import { connect } from 'react-redux';
import { Card, Elevation } from '@blueprintjs/core';

class PostList extends React.Component {
  render() {
    return <div className="List">{}</div>;
  }
}

export default connect()(PostList);

const Post = () => {
  return <Card />;
};
