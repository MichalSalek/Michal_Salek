import React, { Component } from 'react';
import './css/post.scss';

class bootAgent extends Component {
  constructor() {
    super();
    this.state = {
      screenCurtain: ''
    };
  }
  delays = () => {
    setTimeout(() => this.setState({ screenCurtain: 'post_win98' }), 1500);
    setTimeout(() => this.setState({ screenCurtain: '' }), 3500);
    setTimeout(() => this.setState({ screenCurtain: 'post_win98' }), 4000);
    setTimeout(() => this.setState({ screenCurtain: '' }), 4080);
    setTimeout(() => this.setState({ screenCurtain: 'post_blackCover' }), 4500);
    // Turning on another screen
    setTimeout(() => this.props.secondScreenEnd(), 5500);
  };

  componentDidMount() {
    this.delays();
  }
  render() {
    return (
      <main className="post_bgblack">
        <article className="post_main post_noselect">
          <div className={this.state.screenCurtain} />
          <section>
            <ul className="post_ul">
              <li>Intel(R) Boot Agent GE v1.5.53</li>
              <li>Copyright (C) 1997-2014, Intel Corporation</li>
            </ul>
            <ul className="post_ul">
              <li>PXE-E61: Media test failure, check cable</li>
              <li>PXE-M0F: Exiting Intel Boot Agent.</li>
            </ul>
            <ul className="post_ul">
              <li>Reboot and Select proper Boot device</li>
            </ul>
            <span className="post_blink" />
          </section>
        </article>
      </main>
    );
  }
}

export default bootAgent;
