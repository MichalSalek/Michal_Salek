import React, { Component } from 'react';

class First extends Component {
  menuControl = e => {
    e.stopPropagation();
    this.props.whichButton('first');
  };
  render() {
    return (
      <li onClick={this.menuControl} className="home_menuItem">
        Home
      </li>
    );
  }
}

export default First;
