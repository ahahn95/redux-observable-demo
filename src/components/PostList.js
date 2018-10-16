import React from 'react';
import { connect } from 'react-redux';
import { Card } from '@blueprintjs/core';

class PostList extends React.Component {
  render() {
    const { posts } = this.props;
    return posts.length ? (
      <div className="List">
        <h2>Posts</h2>
        {posts.map(post => (
          <Post title={post.title} key={post.id} />
        ))}
      </div>
    ) : null;
  }
}

export default connect(({ posts }) => ({ posts }))(PostList);

const Post = ({ title }) => (
  <div className="Item">
    <Card>{title}</Card>
  </div>
);
