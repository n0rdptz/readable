import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import Comments from '../Comments/Comments';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';


class PostDetail extends Component {
  render() {
    return (
      <div className="post-detail">
        <Post />
        <Comments />
      </div>
    )
  }
}

function mapStateToProps () {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail))