import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavLink from '../NavLink/NavLink';

class Navigation extends Component {
  render() {
    const {categories} = this.props;
    const allPostsLink = {
      path: '',
      name: 'all'
    };
    return (
      <nav>
        {categories.items.length > 0 &&
          <ul className="vertical menu">
            <NavLink category={allPostsLink} />

            {categories.items.map(category => (
              <NavLink key={category.path} category={category} />
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