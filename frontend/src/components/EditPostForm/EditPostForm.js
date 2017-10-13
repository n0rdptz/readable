import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {getPostDetails, editPost} from '../../actions/posts';

class EditPostForm extends Component {
  state = {
    title: '',
    body: '',
    isValid: true
  };
  componentDidMount () {
    const {id} = this.props.match.params;
    const {posts} = this.props;
    const {dispatch} = this.props;
    const post = posts.items.filter(post => post.id === id);

    if (post.length === 0) {
      dispatch(getPostDetails(id));
    } else {
      this.setState({
        title: post[0].title,
        body: post[0].body
      });
    }
  }

  componentDidUpdate () {
    const {state} = this;
    const {id} = this.props.match.params;
    const {posts} = this.props;
    const post = posts.items.filter(post => post.id === id)[0];

    if (post !== undefined && state.title === '' && state.body === '') {
      this.setState({
        title: post.title,
        body: post.body
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

    const {title, body} = this.state;
    if (title === '' || body === '') {
      this.setState((prevState) => {
        return Object.assign(
          prevState,
          {isValid: false}
        );
      });
    } else {
      dispatch(editPost(id, {
        title,
        body
      }));
    }
  }

  render() {
    const {posts, history} = this.props;
    const {id} = this.props.match.params;
    const post = posts.items.filter(post => post.id === id)[0];

    return (
      <div className="post-form">
        {this.state.isValid === false &&
          <p className="form-alert">All fields is reqired!</p>
        }
        {post !== undefined &&
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <div className="row">
              <label htmlFor="post-title">Title</label>
              <input id="post-title"
                     name="post-title"
                     value={this.state.title}
                     onChange={(event) => this.handleChange('title', event.target.value)}
                     type="text"
                     placeholder="Title"
              />
            </div>

            <div className="row">
              <label htmlFor="post-text">Text</label>
              <textarea id="post-text"
                        name="post-text"
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

function mapStateToProps ({posts}) {
  return {posts};
}

export default withRouter(connect(mapStateToProps)(EditPostForm))