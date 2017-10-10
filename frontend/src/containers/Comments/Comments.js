import React, { Component } from 'react';
import Comment from '../../components/Comment/Comment'

class Comments extends Component {
  render() {
    return (
      <div className="comments">
        <h5>Commentaries</h5>
        <Comment />
        <Comment />
        <Comment />
      </div>
    )
  }
}

export default Comments;