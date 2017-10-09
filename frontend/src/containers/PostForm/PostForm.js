import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class PostForm extends Component {
  render() {
    console.log(this);
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

          <div className="row">
            <label htmlFor="post-title">Category</label>
            <select id="post-title">
              <option value="">React</option>
              <option value="">Redux</option>
              <option value="">JavaScript</option>
            </select>
          </div>

          <div className="row">
            <label htmlFor="post-author">Author</label>
            <input id="post-author" type="text" placeholder="Author"/>
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

function mapStateToProps ({ food, calendar }) {

}

function mapDispatchToProps (dispatch) {

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm))