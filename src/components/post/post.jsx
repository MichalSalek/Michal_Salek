import React, { Component } from 'react';
import './css/post.scss';
import '../../plugins/imgPreloader/imgPreloader.scss';
import StartUp from './startUp';
import BootAgent from './bootAgent';
import MBR from './MBR';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      preloadImages: false,
      screen1: true,
      screen2: false,
      screen3: false
    };
  }

  // Preload big pictures after time below (after main styles and fonts)
  preloadImages = () => {
    setTimeout(() => this.setState({ preloadImages: true }), 300);
  };

  firstScreenEnd = () => {
    this.setState({ screen1: false, screen2: true });
  };

  secondScreenEnd = () => {
    this.setState({ screen2: false, screen3: true });
  };

  thirdScreenEnd = () => {
    this.props.goWebSite();
  };

  componentDidMount() {
    this.preloadImages();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.screen1 && (
          <StartUp
            firstScreenEnd={this.firstScreenEnd}
            startMachine={this.startMachine}
            goWebSite={this.thirdScreenEnd}
            preloadImages={this.state.preloadImages}
          />
        )}
        {this.state.screen2 && (
          <BootAgent secondScreenEnd={this.secondScreenEnd} />
        )}
        {this.state.screen3 && <MBR thirdScreenEnd={this.thirdScreenEnd} />}
      </React.Fragment>
    );
  }
}

export default Post;
