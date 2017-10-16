import {
  REQUEST_POST_COMMENTS,
  RECEIVE_POST_COMMENTS,
  ADD_COMMENT,
  REQUEST_COMMENT_DETAILS,
  RECEIVE_COMMENT_DETAILS,
  VOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from '../actions/commentActionTypes';
import unionBy from 'lodash/unionBy';

const initialStore = {
  isFetching: false,
  items: []
};

function comments(state = initialStore, action) {
  switch(action.type) {
    case REQUEST_POST_COMMENTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_POST_COMMENTS:
      return {
        ...state,
        isFetching: false,
        items: unionBy(action.comments, state.items, 'id')
      };
    case ADD_COMMENT:
      return {
        ...state,
        items: unionBy([action.comment], state.items, 'id')
      };
    case REQUEST_COMMENT_DETAILS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_COMMENT_DETAILS:
      return {
        isFetching: false,
        items: unionBy([action.comment], state.items, 'id')
      };
    case VOTE_COMMENT:
      return {
        ...state,
        items: state.items.map(comment => {
          return comment.id === action.comment.id ?
            action.comment :
            comment;
        })
      };
    case EDIT_COMMENT:
      return {
        ...state,
        items: state.items.map(comment => {
          return comment.id === action.comment.id ?
            action.comment :
            comment;
        })
      };
    case DELETE_COMMENT:
      return {
        ...state,
        items: unionBy([action.comment], state.items, 'id')
      };
    default:
      return state;
  }
}

export default comments;
