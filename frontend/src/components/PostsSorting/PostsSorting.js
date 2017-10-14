import React, { Component } from 'react';

class PostsSorting extends Component {
  handleCheck(sort) {
    this.props.onChange(sort);
  }
  render() {
    const {sort} = this.props;

    return (
      <form className="posts-sorting">
        <input id="vote-sort" checked={sort === 'vote'} onChange={() => this.handleCheck('vote')} type="checkbox"/> <label htmlFor="vote-sort">Sort by voteScore</label>
        <input id="time-sort" checked={sort === 'time'} onChange={() => this.handleCheck('time')} type="checkbox"/> <label htmlFor="time-sort">Sort by timestamp</label>
      </form>
    )
  }
}

export default PostsSorting;