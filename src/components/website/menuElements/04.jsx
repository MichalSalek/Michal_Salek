import React, { Component } from 'react';

class Fourth extends Component {
  menuControl = e => {
    e.stopPropagation();
    this.props.whichButton('fourth');
  };
  render() {
    return (
      <li onClick={this.menuControl} className="home_menuItem">
        Hobby – my work with sound
      </li>
    );
  }
}

export default Fourth;
