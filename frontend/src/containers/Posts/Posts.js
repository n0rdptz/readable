import React, { Component } from 'react';
import Post from '../../components/Post/Post'

class Posts extends Component {
  render() {
    return (
      <div className="posts">
        <Post />
        <Post />
        <Post />
      </div>
    )
  }
}

export default Posts;