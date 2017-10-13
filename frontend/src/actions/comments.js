import * as API from '../utils/api';

export const REQUEST_POST_COMMENTS = 'REQUEST_POST_COMMENTS';
export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REQUEST_COMMENT_DETAILS = 'REQUEST_COMMENT_DETAILS';
export const RECEIVE_COMMENT_DETAILS = 'RECEIVE_COMMENT_DETAILS';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

function requestPostComments() {
  return {
    type: REQUEST_POST_COMMENTS
  };
}
function receivePostComments(comments) {
  return {
    type: RECEIVE_POST_COMMENTS,
    comments
  };
}

export const getComments = function(id) {
  return dispatch => {
    dispatch(requestPostComments());
    API.getComments(id)
      .then(comments => dispatch(receivePostComments(comments)));
  }
};

function vote(comment) {
  return {
    type: VOTE_COMMENT,
    comment
  }
}

export const voteComment = function(id, option) {
  return dispatch => {
    API.voteComment(id, option)
      .then(comment => dispatch(vote(comment)));
  };
};

function requestCommentDetails() {
  return {
    type: REQUEST_COMMENT_DETAILS
  }
}

function receiveCommentDetails(comment) {
  return {
    type: RECEIVE_COMMENT_DETAILS,
    comment
  }
}

export const getCommentDetails = function(id) {
  return dispatch => {
    dispatch(requestCommentDetails());
    API.getCommentDetails(id)
      .then(comment => dispatch(receiveCommentDetails(comment)));
  }
};

function edit(comment) {
  return {
    type: EDIT_COMMENT,
    comment
  }
}

export const editComment = function(id, comment) {
  return dispatch => {
    API.editComment(id, comment)
      .then(comment => dispatch(edit(comment)));
  }
};

function add(comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export const addComment = function(comment) {
  return dispatch => {
    API.addComment(comment)
      .then(comment => dispatch(add(comment)));
  }
};