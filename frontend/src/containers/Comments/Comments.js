import React, { Component } from 'react';
import Comment from '../../components/Comment/Comment'

class Comments extends Component {
  render() {
    const {comments} = this.props;
    return (
      <div className="comments">
        <h5>Commentaries {comments.length > 0 && (
          <span>({comments.length})</span>
        )}</h5>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    )
  }
}

export default Comments;