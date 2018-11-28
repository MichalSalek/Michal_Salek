import React, { Component } from 'react';

class Hamburger extends Component {
  render() {
    return (
      <nav
        onClick={this.props.toggleMenu}
        className={`home_hamburger ${this.props.menuIcon}`}>
        <div className="home_menuLine" />
        <div className="home_menuLine" />
        <div className="home_menuLine" />
      </nav>
    );
  }
}

export default Hamburger;
