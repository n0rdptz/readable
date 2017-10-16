import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import CreateCommentForm from '../../components/CreateCommentForm/CreateCommentForm';
import Comments from '../Comments/Comments';
import NotFound from '../NotFound/NotFound';
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
    const showingComments = comments.items
      .filter(comment => comment.parentId === id && !comment.deleted)
      .sort((a, b) => a.voteScore < b.voteScore);

    return (
      <div className="post-detail">
        {posts.isFetching === true &&
          <Loading delay={200} type='spin' color='#222' className='loading' />
        }
        {post !== undefined && !post.deleted &&
          <Post post={post} />
        }
        {post !== undefined && !post.deleted &&
          <CreateCommentForm parentId={post.id} />
        }
        {(post === undefined || post.deleted) &&
          <NotFound />
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