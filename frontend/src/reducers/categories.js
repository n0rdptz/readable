import {REQUEST_CATEGORIES, RECEIVE_CATEGORIES} from '../actions/categories';

const initialStore = {
  isFetching: false,
  items: []
};

function categories(state = initialStore, action) {
  console.log(action);
  switch(action.type) {
    case REQUEST_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.categories,
      });
    default:
      return state;
  }
}

export default categories;