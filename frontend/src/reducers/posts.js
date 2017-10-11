import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  ADD_POST,
  REQUEST_POST_DETAILS,
  RECEIVE_POST_DETAILS,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST,
  REQUEST_POST_COMMENT,
  RECEIVE_POST_COMMENT,
} from '../actions/posts';
import unionBy from 'lodash/unionBy';

const initialStore = {
  isFetching: false,
  items: []
};

function posts(state = initialStore, action) {
  switch(action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: unionBy(state.items, action.posts, 'id')
      });
    case ADD_POST:
      return state;
    case REQUEST_POST_DETAILS:
      return state;
    case RECEIVE_POST_DETAILS:
      return state;
    case VOTE_POST:
      return state;
    case EDIT_POST:
      return state;
    case DELETE_POST:
      return state;
    case REQUEST_POST_COMMENT:
      return state;
    case RECEIVE_POST_COMMENT:
      return state;
    default:
      return state;
  }
}

export default posts;