import React, { Component } from 'react';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdEdit from 'react-icons/lib/md/edit';
import MdHighlightRemove from 'react-icons/lib/md/highlight-remove';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as moment from 'moment';

class Comment extends Component {
  render() {
    const {comment} = this.props;

    return (
      <div className="row">
        <div className="card">
          <div className="card-section">
            <p>{comment.body}</p>
          </div>
          <div className="card-section card-footer">
            <p>
              <span className="post-author">{comment.author}</span>, <span className="post-timestamp">{moment(comment.timestamp).format("MM-DD-YYYY")}</span>
            </p>

            <div className="post-vote">
              <MdThumbDown style={{cursor: 'pointer'}} />
              <span className="vote-score">{comment.voteScore}</span>
              <MdThumbUp style={{cursor: 'pointer'}} />
            </div>

            <div className="post-controls">
              <Link to={{pathname: `/comment-edit/${comment.id}`}}>
                <MdEdit style={{cursor: 'pointer'}} />
              </Link>
              <MdHighlightRemove style={{cursor: 'pointer'}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect()(Comment));