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
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        items: unionBy(action.posts, state.items, 'id')
      };
    case ADD_POST:
      return {
        ...state,
        items: unionBy([action.post], state.items, 'id')
      };
    case REQUEST_POST_DETAILS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POST_DETAILS:
      return {
        isFetching: false,
        items: unionBy([action.post], state.items, 'id')
      };
    case VOTE_POST:
      return {
        ...state,
        items: state.items.map(post => {
          return post.id === action.post.id ?
            action.post :
            post;
        })
      };
    case EDIT_POST:
      return {
        ...state,
        items: state.items.map(post => {
          return post.id === action.post.id ?
            action.post :
            post;
        })
      };
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