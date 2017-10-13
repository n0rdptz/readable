import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import Comments from '../Comments/Comments';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {getPostDetails} from '../../actions/posts';
import {getComments} from '../../actions/comments';
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

    dispatch(getComments(id));
  }
  render() {
    const {id} = this.props.match.params;
    const {posts, comments} = this.props;
    const post = posts.items.filter(post => post.id === id)[0];
    const showingComments = comments.items.filter(comment => comment.parentId === id && !comment.deleted);

    return (
      <div className="post-detail">
        {posts.isFetching === true &&
          <Loading delay={200} type='spin' color='#222' className='loading' />
        }
        {post !== undefined &&
          <Post post={post} />
        }
        {showingComments.length > 0 &&
          <Comments comments={showingComments} />
        }
      </div>
    )
  }
}

function mapStateToProps ({posts, comments}) {
  return {posts, comments};
}

export default withRouter(connect(mapStateToProps)(PostDetail))