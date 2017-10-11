import * as API from '../utils/api';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const ADD_POST = 'ADD_POST';
export const REQUEST_POST_DETAILS = 'REQUEST_POST_DETAILS';
export const RECEIVE_POST_DETAILS = 'RECEIVE_POST_DETAILS';
export const VOTE_POST = 'VOTE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const REQUEST_POST_COMMENT = 'REQUEST_POST_COMMENT';
export const RECEIVE_POST_COMMENT = 'RECEIVE_POST_COMMENT';

function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

const getPostsByCategory = function(category) {
  return dispatch => {
    dispatch(requestPosts());
    API.getCategoryPosts(category)
      .then(posts => dispatch(receivePosts(posts)));
  }
};

const getAllPosts = function() {
  return dispatch => {
    dispatch(requestPosts());
    API.getPosts()
      .then(posts => dispatch(receivePosts(posts)));
  }
};

export const getPosts = function(category) {
  return dispatch => {
    if (category) {
      dispatch(getPostsByCategory(category));
    } else {
      dispatch(getAllPosts());
    }
  }
};

function vote(post) {
  return {
    type: VOTE_POST,
    post
  }
}

export const votePost = function(id, option) {
  return dispatch => {
    API.votePost(id, option)
      .then(post => dispatch(vote(post)));
  };
};