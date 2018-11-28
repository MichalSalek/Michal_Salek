import React, { Component } from 'react';
import ReactTilt from 'react-universal-tilt';

class mainPage_background extends Component {
  render() {
    return (
      <React.Fragment>
        <ReactTilt
          options={{
            'position-base': 'window',
            reverse: true,
            max: 1,
            perspective: 1000
          }}
          className="home_mainPage__copy"
        />
        <ReactTilt
          options={{
            'position-base': 'window',
            reverse: true,
            max: 4,
            perspective: 3000
          }}
          className="home_mainPage__copy"
        />
        <ReactTilt
          options={{
            'position-base': 'window',
            reverse: true,
            max: 10,
            perspective: 5000
          }}
          className="home_mainPage__copy"
        />
      </React.Fragment>
    );
  }
}
export default mainPage_background;
