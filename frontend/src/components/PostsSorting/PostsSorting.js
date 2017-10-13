import React, { Component } from 'react';

class PostsSorting extends Component {
  handleCheck(sort) {
    this.props.onChange(sort);
  }
  render() {
    const {props} = this;

    return (
      <form className="posts-sorting">
        <input id="vote-sort" onClick={() => this.handleCheck('vote')} checked={this.props.sort === 'vote'} type="checkbox"/> <label htmlFor="vote-sort">Sort by voteScore</label>
        <input id="time-sort" onClick={() => this.handleCheck('time')} checked={this.props.sort === 'time'} type="checkbox"/> <label htmlFor="time-sort">Sort by timestamp</label>
      </form>
    )
  }
}

export default PostsSorting;