import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/foundation-sites/dist/css/foundation.min.css';
import '../node_modules/foundation-sites/dist/css/foundation-float.min.css';
import '../node_modules/foundation-sites/dist/css/foundation-prototype.min.css';
import '../node_modules/foundation-sites/dist/css/foundation-rtl.min.css';
import './styles/index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
