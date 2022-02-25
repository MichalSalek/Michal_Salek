import React, { Component } from 'react';
import ReactTilt from 'react-universal-tilt';

class mainPage_background extends Component {
  render() {
    return (
      <React.Fragment>
          <ReactTilt
            options={{
              reverse: true,
              max: 10,
              perspective: 100,
                speed: 1,
                scale: 5
            }}
            className="home_mainPage__copy"
          />
          {/*<ReactTilt*/}
          {/*  options={{*/}
          {/*      base: 'window',*/}
          {/*    reverse: true,*/}
          {/*    max: 4,*/}
          {/*    perspective: 3000*/}
          {/*  }}*/}
          {/*  className="home_mainPage__copy"*/}
          {/*/>*/}
        {/*<ReactTilt*/}
        {/*  options={{*/}
        {/*      base: 'window',*/}
        {/*    reverse: true,*/}
        {/*    max: 10,*/}
        {/*    perspective: 5000*/}
        {/*  }}*/}
        {/*  className="home_mainPage__copy"*/}
        {/*/>*/}
      </React.Fragment>
    );
  }
}
export default mainPage_background;
