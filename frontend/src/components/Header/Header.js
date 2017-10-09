import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="center">
          <Link to="/"><h1>Readable</h1></Link>

          <Link to="/create-post" className="button primary crate-post-btn">Create new post</Link>
        </div>
      </header>
    )
  }
}

export default Header;