import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {getCommentDetails, editComment} from '../../actions/comments';

class EditCommentForm extends Component {
  state = {
    title: '',
    body: '',
    isValid: true
  };
  componentDidMount () {
    const {id} = this.props.match.params;
    const {comments} = this.props;
    const {dispatch} = this.props;
    const comment = comments.items.filter(comment => comment.id === id);

    if (comment.length === 0) {
      dispatch(getCommentDetails(id));
    } else {
      this.setState({
        body: comment[0].body
      });
    }
  }

  componentDidUpdate () {
    const {state} = this;
    const {id} = this.props.match.params;
    const {comments} = this.props;
    const comment = comments.items.filter(comment => comment.id === id)[0];

    if (comment !== undefined && state.title === '' && state.body === '') {
      this.setState({
        body: comment.body
      });
    }
  }

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

    const {dispatch} = this.props;
    const {id} = this.props.match.params;

    const {body} = this.state;
    if (body === '') {
      this.setState((prevState) => {
        return Object.assign(
          prevState,
          {isValid: false}
        );
      });
    } else {
      dispatch(editComment(id, {
        body
      }));
    }
  }

  render() {
    const {comments, history} = this.props;
    const {id} = this.props.match.params;
    console.log(comments.items.map(item => item));
    const comment = comments.items.filter(comment => {
      console.log(comment);
      return comment.id === id;
    })[0];

    return (
      <div className="comment-form">
        {this.state.isValid === false &&
          <p className="form-alert">All fields is reqired!</p>
        }
        {comment !== undefined &&
          <form onSubmit={(event) => this.handleSubmit(event)}>

            <div className="row">
              <label htmlFor="comment-text">Text</label>
              <textarea id="comment-text"
                        name="comment-text"
                        value={this.state.body}
                        onChange={(event) => this.handleChange('body', event.target.value)}
                        type="text"
                        placeholder="Text">
              </textarea>
            </div>

            <div className="row">
              <button onClick={history.goBack} className="button secondary">Back</button>
              <button type="submit" className="button primary">Save</button>
            </div>
          </form>
        }
      </div>
    )
  }
}

function mapStateToProps ({comments}) {
  return {comments};
}

export default withRouter(connect(mapStateToProps)(EditCommentForm))