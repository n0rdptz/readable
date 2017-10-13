import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import PostsSorting from '../../components/PostsSorting/PostsSorting';
import {getPosts} from '../../actions/posts';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

class Posts extends Component {
  state = {
    sort: 'vote'
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPosts());
  }

  handleSort(sort) {
    this.setState({sort});
  }

  render() {
    const { category } = this.props.match.params;
    let posts = null;
    if (category) {
      posts = this.props.posts.items.filter(post => post.category === category && !post.deleted);
    } else {
      posts = this.props.posts.items.filter(post => !post.deleted);
    }

    if (posts.length > 0) {
      this.state.sort === 'vote'
        ? posts.sort((a, b) => a.voteScore < b.voteScore)
        : posts.sort((a, b) => a.timestamp < b.timestamp)
    }

    return (
      <div className="posts">
        <PostsSorting sort={this.state.sort} onChange={this.handleSort.bind(this)} />
        {posts.length > 0 && posts.map(post => (
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