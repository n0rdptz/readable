import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="center">
          <Link to="/"><h1>Readable</h1></Link>

          <Link to="/post-create" className="button primary crate-post-btn">Create new post</Link>
        </div>
      </header>
    )
  }
}

export default withRouter(connect()(Header));