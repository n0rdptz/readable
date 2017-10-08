import React, { Component } from 'react';

class Navigation extends Component {
  state = {
    categories: ['Redux', 'React', 'JavaScript']
  };

  render() {
    const {categories} = this.state;
    return (
      <nav>
        <ul className="vertical menu">
          {categories.map((category, index) => (
            <li key={index}>
              <a>{category}</a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default Navigation;