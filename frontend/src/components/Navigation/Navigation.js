import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Navigation extends Component {
  render() {
    const {categories} = this.props;
    return (
      <nav>
        {categories.items.length > 0 &&
          <ul className="vertical menu">
            <li>
              <Link className="nav-link" to={{pathname: `/posts/`}}>All</Link>
            </li>
            {categories.items.map(category => (
              <li key={category.path}>
                <Link className="nav-link" to={{pathname: `/posts/${category.path}`}}>{category.name}</Link>
              </li>
            ))}
          </ul>
        }
      </nav>
    )
  }
}

function mapStateToProps ({ categories }) {
  return {
    categories
  };
}

export default withRouter(connect(mapStateToProps)(Navigation))