import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import Page from '../Page/Page';
import Posts from '../Posts/Posts';
import EditPostForm from '../../components/EditPostForm/EditPostForm';
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm';
import EditCommentForm from '../../components/EditCommentForm/EditCommentForm';
import PostDetail from '../PostDetail/PostDetail';
import {fetchCategoriesIfNeeded} from '../../actions/categories';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategoriesIfNeeded());
  }

  render() {
    return (
      <div className="App">
        <Route path="/" exact render={() => (
          <Redirect to="/posts/" />
        )} />

        <Route path="/posts/:category?" render={() => (
          <Page>
            <Posts />
          </Page>
        )} />

        <Route path="/post/:id" render={() => (
          <Page>
            <PostDetail />
          </Page>
        )} />

        <Route path="/post-create/" render={() => (
          <Page>
            <CreatePostForm />
          </Page>
        )} />

        <Route path="/post-edit/:id" render={() => (
          <Page>
            <EditPostForm />
          </Page>
        )} />

        <Route path="/comment-edit/:id" render={() => (
          <Page>
            <EditCommentForm />
          </Page>
        )} />
      </div>
    );
  }
}

export default withRouter(connect()(App))
