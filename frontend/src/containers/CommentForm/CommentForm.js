import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    return (
      <div className="post-form">
        <form action="">
          <div className="row">
            <label htmlFor="post-text">Text</label>
            <textarea id="post-text" type="text" placeholder="Text">
            </textarea>
          </div>

          <div className="row">
            <a className="button secondary">Back</a>
            <a className="button primary">Save</a>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentForm;