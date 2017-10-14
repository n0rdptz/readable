import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {addPost} from '../../actions/posts';

class CreatePostForm extends Component {
  state = {
    title: '',
    body: '',
    category: '',
    author: '',
    isValid: true
  };
  initCategorySelector() {
    const {categories} = this.props;

    if (this.state.category === '' && categories.items.length > 0) {
      this.setState(prevState => {
        return {
          ...prevState,
          category: categories.items[0].name
        }
      })
    }
  }
  componentDidMount () {
    this.initCategorySelector();
  }
  componentDidUpdate () {
    this.initCategorySelector();
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

    const {title, body, author, category} = this.state;
    if (title === '' || body === '' || author === '') {
      this.setState((prevState) => {
        return {
          ...prevState,
          isValid: false
        }
      });
    } else {
      dispatch(addPost({
        title,
        body,
        category,
        author
      }));
    }
  }
  render() {
    const {categories, history} = this.props;

    return (
      <div className="post-form">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="row">
            <label htmlFor="post-title">Title</label>
            <input id="post-title"
                   name="post-title"
                   type="text"
                   placeholder="Title"
                   onChange={event => this.handleChange('title', event.target.value)}
            />
          </div>

          <div className="row">
            <label htmlFor="post-text">Text</label>
            <textarea id="post-text"
                      name="post-text"
                      type="text"
                      placeholder="Text"
                      onChange={event => this.handleChange('body', event.target.value)}
            >
            </textarea>
          </div>

          {categories.items.length > 0 &&
            <div className="row">
              <label htmlFor="category-select">Category</label>
              <select id="category-select"
                      name="category-select"
                      defaultValue={this.state.category}
                      className="post-title"
                      onChange={event => this.handleChange('category', event.target.value)}
              >
                {categories.items.map(category => (
                  <option key={category.path} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
          }

          <div className="row">
            <label htmlFor="post-author">Author</label>
            <input id="post-author"
                   name="post-author"
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

function mapStateToProps ({categories}) {
  return {categories};
}

export default withRouter(connect(mapStateToProps)(CreatePostForm))