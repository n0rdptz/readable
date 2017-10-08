import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Page from '../Page/Page';
import Posts from '../Posts/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page>
          <Posts />
        </Page>
      </div>
    );
  }
}

export default App;
