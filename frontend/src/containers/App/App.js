import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Page from '../Page/Page';
import Posts from '../Posts/Posts';
import PostForm from '../PostForm/PostForm';
import {fetchCategoriesIfNeeded} from '../../actions/categories';
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategoriesIfNeeded());
  }

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

function mapStateToProps ({  }) {
  return {};
}

export default connect(mapStateToProps)(App)
