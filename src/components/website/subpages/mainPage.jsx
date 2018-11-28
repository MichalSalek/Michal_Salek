import React, { Component } from 'react';
import Background from './mainPage_background';

class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Background />
        <section className="home_contentSection">
          <h1 className="home_h1">Michał Sałek</h1>
        </section>
      </React.Fragment>
    );
  }
}

export default MainPage;
