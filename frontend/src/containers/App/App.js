import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Page from '../Page/Page';
import Posts from '../Posts/Posts';
import PostForm from '../PostForm/PostForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact render={() => (
          <Page>
            <Posts />
          </Page>
        )} />

        <Route path="/create-post/" render={() => (
          <Page>
            <PostForm />
          </Page>
        )} />

        <Route path="/edit-post/:id" render={() => (
          <Page>
            <PostForm />
          </Page>
        )} />

        <Route path="/edit-comment/:id" render={() => (
          <Page>
            <PostForm />
          </Page>
        )} />


      </div>
    );
  }
}

export default App;
