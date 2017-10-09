import React, { Component } from 'react';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdEdit from 'react-icons/lib/md/edit';
import MdHighlightRemove from 'react-icons/lib/md/highlight-remove';

class Post extends Component {
  render() {
    return (
      <div className="row">
        <div className="card">
          <div className="card-divider">
            <h4>I'm featured</h4>
          </div>
          <div className="card-section">
            <p>This card makes use of the card-divider element.</p>
          </div>
          <div className="card-section card-footer">
            <p>
              <span className="post-author">Author</span>,
              <span className="post-timestamp">12:12</span>
            </p>

            <div className="post-vote">
              <MdThumbDown style={{cursor: 'pointer'}} />
              <span className="vote-score">5</span>
              <MdThumbUp style={{cursor: 'pointer'}} />
            </div>

            <div className="post-controls">
              <MdEdit style={{cursor: 'pointer'}} />
              <MdHighlightRemove style={{cursor: 'pointer'}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post;