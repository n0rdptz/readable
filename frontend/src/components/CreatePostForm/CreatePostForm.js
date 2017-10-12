import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class CreatePostForm extends Component {
  render() {
    const {categories, history} = this.props;
    console.log(categories);
    return (
      <div className="post-form">
        <form action="">
          <div className="row">
            <label htmlFor="post-title">Title</label>
            <input id="post-title" type="text" placeholder="Title"/>
          </div>

          <div className="row">
            <label htmlFor="post-text">Text</label>
            <textarea id="post-text" type="text" placeholder="Text">
            </textarea>
          </div>

          {categories.items.length > 0 &&
            <div className="row">
              <label htmlFor="post-title">Category</label>
              <select className="post-title" id="post-title">
                {categories.items.map(category => (
                  <option key={category.path} value="category.name">{category.name}</option>
                ))}
              </select>
            </div>
          }

          <div className="row">
            <label htmlFor="post-author">Author</label>
            <input id="post-author" type="text" placeholder="Author"/>
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

function mapStateToProps ({categories}) {
  return {categories};
}

export default withRouter(connect(mapStateToProps)(CreatePostForm))