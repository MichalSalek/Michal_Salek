import React, { Component } from 'react';
import ReactTilt from 'react-universal-tilt';

class subpage1_background extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <div className="home_subpage1" /> */}
        <ReactTilt
          options={{
            'position-base': 'window',
            reverse: true,
            max: 1,
            perspective: 1000
          }}
          className="home_subpage1__copy"
        />
        {/* <ReactTilt
          options={{
            'position-base': 'window',
            reverse: true,
            max: 4,
            perspective: 2000
          }}
          className="home_subpage1__copy"
        />
        <ReactTilt
          options={{
            'position-base': 'window',
            reverse: true,
            max: 15,
            perspective: 10000
          }}
          className="home_subpage1__copy"
        /> */}
      </React.Fragment>
    );
  }
}
export default subpage1_background;
