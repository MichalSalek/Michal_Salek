import React, { Component } from 'react';

class Second extends Component {
  menuControl = e => {
    e.stopPropagation();
    this.props.whichButton('second');
  };
  render() {
    return (
      <li onClick={this.menuControl} className="home_menuItem">
        Technologies stack
      </li>
    );
  }
}

export default Second;
