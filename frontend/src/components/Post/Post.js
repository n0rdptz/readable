import React, { Component } from 'react';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdEdit from 'react-icons/lib/md/edit';
import MdHighlightRemove from 'react-icons/lib/md/highlight-remove';
import MdComment from 'react-icons/lib/md/comment';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as moment from 'moment';
import {votePost, deletePost} from '../../actions/posts';
import {getComments} from '../../actions/comments';

class Post extends Component {
  votePost(id, option) {
    const { dispatch } = this.props;
    dispatch(votePost(id, option));
  }
  deletePost(id) {
    const { dispatch, history } = this.props;
    dispatch(deletePost(id));
    history.push('/posts');
  }
  componentDidMount() {
    const {dispatch, post} = this.props;
    dispatch(getComments(post.id));
  }

  render() {
    const {post, comments} = this.props;
    const commentCounter = comments.items.filter(comment => comment.parentId === post.id).length;

    return (
      <div className="row">
        <div className="card">
          <div className="card-divider">
            <Link to={{pathname: `/post/${post.id}`}}><h4>{post.title}</h4></Link>
          </div>
          <div className="card-section">
            <p>{post.body}</p>
          </div>
          <div className="card-section card-footer">
            <p>
              <span className="post-author">{post.author}</span>, <span className="post-timestamp">{moment(post.timestamp).format("MM-DD-YYYY")}</span>
            </p>

            <p>
              <Link to={{pathname: `/post/${post.id}`}}>
                <MdComment style={{cursor: 'pointer'}} /> {commentCounter}
              </Link>
            </p>

            <div className="post-vote">
              <MdThumbDown onClick={() => this.votePost(post.id, 'downVote')} style={{cursor: 'pointer'}} />
              <span className="vote-score">{post.voteScore}</span>
              <MdThumbUp onClick={() => this.votePost(post.id, 'upVote')} style={{cursor: 'pointer'}} />
            </div>

            <div className="post-controls">
              <Link to={{pathname: `/post-edit/${post.id}`}}>
                <MdEdit style={{cursor: 'pointer'}} />
              </Link>
              <MdHighlightRemove onClick={() => this.deletePost(post.id)} style={{cursor: 'pointer'}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({comments}) {
  return {comments};
}

export default withRouter(connect(mapStateToProps)(Post));