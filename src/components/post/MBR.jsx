import React, { Component } from 'react';
import './css/post.scss';
import Typing from 'react-typing-animation';

class MBR extends Component {
  constructor() {
    super();
    this.state = {
      screenCurtain: '',
      nr0: false,
      nr1: false,
      nr1blink: '',
      nr2: false,
      nr2blink: '',
      nr3: false,
      nr3blink: '',
      nr4: false,
      nr4blink: '',
      nr5: false,
      nr5blink: '',
      nr6: false,
      nr7: false,
      nr7blink: '',
      turningOff: ''
    };
  }

  delays = () => {
    setTimeout(() => this.setState({ nr0: true }), 2000);
    setTimeout(
      () => this.setState({ nr1: true, nr1blink: 'post_blink' }),
      3000
    );
    setTimeout(
      () => this.setState({ nr2: true, nr1blink: '', nr2blink: 'post_blink' }),
      6000
    );
    setTimeout(
      () => this.setState({ nr3: true, nr2blink: '', nr3blink: 'post_blink' }),
      7000
    );
    setTimeout(
      () => this.setState({ nr4: true, nr3blink: '', nr4blink: 'post_blink' }),
      11000
    );
    setTimeout(
      () => this.setState({ nr5: true, nr4blink: '', nr5blink: 'post_blink' }),
      14000
    );
    setTimeout(() => this.setState({ nr6: true, nr5blink: '' }), 15000);
    setTimeout(
      () => this.setState({ nr7: true, nr5blink: '', nr7blink: 'post_blink' }),
      16000
    );
  };

  endThisScreen = () => {
    this.setState({ turningOff: 'post_turningOff' });
    setTimeout(() => this.props.thirdScreenEnd(), 550);
  };

  isEnterPressed = () => {
    window.addEventListener('keydown', e => {
      if (!this.state.nr7) return;
      if (e.keyCode === 13) this.endThisScreen();
    });
  };

  componentDidMount() {
    this.delays();
    this.isEnterPressed();
  }

  render() {
    return (
      <main className="post_bgblack">
        <article className={`post_main post_noselect ${this.state.turningOff}`}>
          <div className={this.state.screenCurtain} />
          <section>
            <span>BOOTMBR is missing</span>
            <ul className="post_ul">
              <li>
                {this.state.nr0 && <span>C:\></span>}
                {this.state.nr1 && (
                  <Typing className="post_dosLine" speed={100}>
                    One can get <span className="post_red">angry</span>.
                  </Typing>
                )}
                <span className={this.state.nr1blink} />
              </li>

              {this.state.nr2 && (
                <li>
                  C:\>
                  <Typing className="post_dosLine" speed={30}>
                    It was a time...
                  </Typing>
                  <span className={this.state.nr2blink} />
                </li>
              )}
              {this.state.nr3 && (
                <li>
                  C:\>
                  <Typing className="post_dosLine" speed={20}>
                    When the computer was not as{' '}
                    <span className="post_glow">
                      intelligent and easy to use as today
                    </span>
                    .
                  </Typing>
                  <span className={this.state.nr3blink} />
                </li>
              )}
              {this.state.nr4 && (
                <li>
                  C:\>
                  <Typing className="post_dosLine" speed={50}>
                    Let's fix it.
                  </Typing>
                  <span className={this.state.nr4blink} />
                </li>
              )}
              {this.state.nr5 && (
                <li>
                  C:\>
                  <Typing className="post_dosLine" speed={20}>
                    BOOTREC.EXE /FIXMBR
                  </Typing>
                  <span className={this.state.nr5blink} />
                </li>
              )}
              {this.state.nr6 && <li>The operation completed successfully.</li>}
            </ul>
            {this.state.nr7 && (
              <React.Fragment>
                <span className="post_glow">Continue to load (y/n) </span>
                <span className={this.state.nr7blink}>y </span>
                <span
                  className="post_goRightPage"
                  onClick={this.endThisScreen}
                />
              </React.Fragment>
            )}
          </section>
        </article>
      </main>
    );
  }
}

export default MBR;
