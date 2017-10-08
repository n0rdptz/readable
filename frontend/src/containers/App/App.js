import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Page from '../Page/Page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page>Test</Page>
      </div>
    );
  }
}

export default App;
