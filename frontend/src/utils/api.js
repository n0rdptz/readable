import uuid from 'uuid/v1';

const api = "http://localhost:3001";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

export const getCategories = () => {
  return fetch(`${api}/categories`, {headers})
    .then(res => res.json())
    .then(data => data.categories);
};

export const getCategoryPosts = (category) => {
  return fetch(`${api}/${category}/posts`, {headers})
    .then(res => res.json());
};

export const getPosts = () => {
  return fetch(`${api}/posts`, {headers})
    .then(res => res.json());
};

export const addPost = (post) => {
  post.id = uuid();
  post.timestamp = Date.now();

  return fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())
};

export const getPostDetails = (id) => {
  return fetch(`${api}/posts/${id}`, {headers})
    .then(res => res.json());
};

export const votePost = (id, option) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option})
  }).then(res => res.json());
};

export const editPost = (id, post) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json());
};

export const deletePost = (id) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers
  }).then(res => res.json());
};

export const getComments = (id) => {
  return fetch(`${api}/posts/${id}/comments`, {headers})
    .then(res => res.json());
};

export const addComment = (comment) => {
  comment.id = uuid();
  comment.timestamp = Date.now();

  return fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json());
};

export const getCommentDetails = (id) => {
  return fetch(`${api}/comments/${id}`, {headers})
    .then(res => res.json());
};

export const voteComment = (id, option) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option})
  }).then(res => res.json());
};

export const editComment = (id, comment) => {
  comment.timestamp = Date.now();

  return fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json());
};

export const deleteComment = (id) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers
  }).then(res => res.json());
};
