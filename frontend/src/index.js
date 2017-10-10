import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/foundation-sites/dist/css/foundation.min.css';
import '../node_modules/foundation-sites/dist/css/foundation-float.min.css';
import '../node_modules/foundation-sites/dist/css/foundation-prototype.min.css';
import '../node_modules/foundation-sites/dist/css/foundation-rtl.min.css';
import './styles/index.css';
import App from './containers/App/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import * as API from './utils/api';
import configureStore from './store/configureStore';

// API.getCategories()
//   .then(categories => console.log('categories', categories));
// API.addPost({
//   title: 'test',
//   body: 'test',
//   author: 'test',
//   category: 'react'
// })
//   .then((data) => {console.log('add post', data)});
//
// API.getPostDetails('8xf0y6ziyjabvozdd253nd')
//   .then(data => console.log('post', data));
//
// API.getComments('8xf0y6ziyjabvozdd253nd')
//   .then(data => console.log('comments', data));
//
// API.getCategoryPosts('react')
//   .then(data => console.log('category posts', data));

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
