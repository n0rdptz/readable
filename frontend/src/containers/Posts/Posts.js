import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import {getPosts} from '../../actions/posts';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

class Posts extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPosts());
  }

  render() {
    const { category } = this.props.match.params;
    let posts = null;
    if (category) {
      posts = this.props.posts.items.filter(post => post.category === category && !post.deleted);
    } else {
      posts = this.props.posts.items.filter(post => !post.deleted);
    }

    return (
      <div className="posts">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    )
  }
}

function mapStateToProps ({posts}) {
  return {posts};
}

export default withRouter(connect(mapStateToProps)(Posts))