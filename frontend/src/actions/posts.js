import * as API from '../utils/api';
import {getAndDeleteComments} from './comments';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const ADD_POST = 'ADD_POST';
export const REQUEST_POST_DETAILS = 'REQUEST_POST_DETAILS';
export const RECEIVE_POST_DETAILS = 'RECEIVE_POST_DETAILS';
export const VOTE_POST = 'VOTE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';

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

function requestPostDetails() {
  return {
    type: REQUEST_POST_DETAILS
  }
}

function receivePostDetails(post) {
  return {
    type: RECEIVE_POST_DETAILS,
    post
  }
}

export const getPostDetails = function(id) {
  return dispatch => {
    dispatch(requestPostDetails());
    API.getPostDetails(id)
      .then(post => dispatch(receivePostDetails(post)));
  }
};

function edit(post) {
  return {
    type: EDIT_POST,
    post
  }
}

export const editPost = function(id, post) {
  return dispatch => {
    API.editPost(id, post)
      .then(post => dispatch(edit(post)));
  }
};

function add(post) {
  return {
    type: ADD_POST,
    post
  }
}

export const addPost = function(post) {
  return dispatch => {
    API.addPost(post)
      .then(post => dispatch(add(post)));
  }
};

function delPost(post) {
  return {
    type: DELETE_POST,
    post
  };
}

export const deletePost = function(id) {
  return dispatch => {
    API.deletePost(id)
      .then(post => {
        dispatch(delPost(post));
        dispatch(getAndDeleteComments(id));
      });
  }
};