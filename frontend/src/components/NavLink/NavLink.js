import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Navigation extends Component {
  render() {
    const {category, posts} = this.props;
    let postsCounter = null;
    if (category.path !== '') {
      postsCounter = posts.items.filter(post => post.category === category.name).length;
    } else {
      postsCounter = posts.items.length;
    }
    return (
      <li key={category.path}>
        <Link className="nav-link" to={{pathname: `/posts/${category.path}`}}>
          <span className="nav-link-title">{category.name}</span> {postsCounter > 0 && (
            <span className="nav-link-counter">({postsCounter})</span>
          )}
        </Link>
      </li>
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    posts
  };
}

export default connect(mapStateToProps)(Navigation);