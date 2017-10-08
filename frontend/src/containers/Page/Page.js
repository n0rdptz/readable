import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

class Page extends Component {


  render() {
    const {props} = this;

    return (
      <div className="page">
        <Header />

        <div className="center">
          <nav className="navigation">
            <Navigation />
          </nav>

          <main className="content">{props.children}</main>
        </div>
      </div>
    )
  }
}

export default Page;