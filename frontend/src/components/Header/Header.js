import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="center">
          <h1>Readable</h1>

          <button type="button" className="button primary crate-post-btn">Create new post</button>
        </div>
      </header>
    )
  }
}

export default Header;