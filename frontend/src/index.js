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
import configureStore from './store/configureStore';

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
