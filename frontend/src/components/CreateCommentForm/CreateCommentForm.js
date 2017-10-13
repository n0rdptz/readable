import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {addComment} from '../../actions/comments';

class CreateCommentForm extends Component {
  state = {
    body: '',
    author: '',
    isValid: true
  };

  handleChange(field, value) {
    this.setState((prevState) => {
      return {
        ...prevState,
        [field]: value,
        isValid: true
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    const {dispatch, parentId} = this.props;

    const {body, author} = this.state;
    if (body === '' || author === '') {
      this.setState((prevState) => {
        return {
          ...prevState,
          isValid: false
        }
      });
    } else {
      dispatch(addComment({
        body,
        author,
        parentId
      }));
    }
  }
  render() {
    const {history} = this.props;

    return (
      <div className="comment-form">
        <h5>Add commentary</h5>
        <form onSubmit={(event) => this.handleSubmit(event)}>

          <div className="row">
            <label htmlFor="comment-text">Text</label>
            <textarea id="comment-text"
                      name="comment-text"
                      type="text"
                      placeholder="Text"
                      onChange={event => this.handleChange('body', event.target.value)}
            >
            </textarea>
          </div>

          <div className="row">
            <label htmlFor="comment-author">Author</label>
            <input id="comment-author"
                   name="comment-author"
                   type="text"
                   placeholder="Author"
                   onChange={event => this.handleChange('author', event.target.value)}
            />
          </div>

          <div className="row">
            <button onClick={history.goBack} className="button secondary">Back</button>
            <button type="submit" className="button primary">Save</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(connect()(CreateCommentForm))