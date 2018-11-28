import React, { Component } from 'react';

class Third extends Component {
  menuControl = e => {
    e.stopPropagation();
    this.props.whichButton('third');
  };
  render() {
    return (
      <li onClick={this.menuControl} className="home_menuItem">
        Development purpose
      </li>
    );
  }
}

export default Third;
