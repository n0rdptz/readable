import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class CommentForm extends Component {
  render() {
    const {history} = this.props;
    return (
      <div className="comment-form">
        <form action="">
          <div className="row">
            <label htmlFor="post-text">Text</label>
            <textarea id="post-text" type="text" placeholder="Text">
            </textarea>
          </div>

          <div className="row">
            <a onClick={history.goBack} className="button secondary">Back</a>
            <a className="button primary">Save</a>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(connect()(CommentForm));