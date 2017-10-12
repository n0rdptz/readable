import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import Comments from '../Comments/Comments';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {getPostDetails} from '../../actions/posts';
import Loading from 'react-loading';

class PostDetail extends Component {
  componentDidMount () {
    const {id} = this.props.match.params;
    const {posts} = this.props;
    const {dispatch} = this.props;
    const post = posts.items.filter(post => post.id === id);

    if (post.length === 0) {
      dispatch(getPostDetails(id));
    }
  }
  render() {
    const {id} = this.props.match.params;
    const {posts} = this.props;
    const post = posts.items.filter(post => post.id === id)[0];

    return (
      <div className="post-detail">
        {posts.isFetching === true &&
          <Loading delay={200} type='spin' color='#222' className='loading' />
        }
        {post !== undefined &&
          <Post post={post} />
        }
      </div>
    )
  }
}

function mapStateToProps ({posts}) {
  return {posts};
}

export default withRouter(connect(mapStateToProps)(PostDetail))