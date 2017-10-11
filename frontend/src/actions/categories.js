import * as API from '../utils/api';

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  }
}

function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

function fetchCategories() {
  return (dispatch) => {
    dispatch(requestCategories());
    return API.getCategories()
      .then(categories => dispatch(receiveCategories(categories)));
  };
}

function shouldFetchCategories(state) {
  const {categories} = state;
  if (!categories.items.length) {
    return true;
  } else if (categories.isFetching) {
    return false;
  }
}

export function fetchCategoriesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchCategories(getState())) {
      return dispatch(fetchCategories())
    }
  }
}