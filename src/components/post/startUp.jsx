import React, { Component } from 'react';
import biosguy from './css/imgs/bios-guy2.png';
import energystar from './css/imgs/energystar.png';
import './css/post.scss';
import CountUp from 'react-countup';
import Sound from 'react-sound';
import soundfile from '../post/sounds/beep.mp3';
import ImagesPreloader from '../../plugins/imgPreloader/imgPreloader';

class startUp extends Component {
  constructor() {
    super();
    this.state = {
      run: true,
      turninigOn: false,
      beep: false,
      memoryAmount: 131072,
      screenCurtain: '',
      blinkMem: 'post_blink',
      blinkDown: '',
      blinkCpu: 'post_blink',
      blinkPentium: '',
      nr1: false,
      nr2: false,
      nr3: false,
      nr4: false,
      nr5: false,
      nr6: false,
      nr7: false,
      nr8: false,
      nr9: false,
      nr10: false,
      nr11: false,
      skipMemory: ''
    };
  }

  delays = () => {
    setTimeout(
      () =>
        this.setState({ nr1: true, blinkCpu: '', blinkPentium: 'post_blink' }),
      1000
    );
    // CPU and RAM
    setTimeout(() => this.setState({ nr2: true }), 4000);
    setTimeout(() => this.setState({ nr3: true, blinkPentium: '' }), 4100);
    setTimeout(
      () => this.setState({ skipMemory: 'post_hidden', beep: true }),
      6000
    );
    // HDDs
    setTimeout(
      () => this.setState({ beep: false, nr4: true, blinkMem: '' }),
      7000
    );
    setTimeout(() => this.setState({ nr5: true }), 7080);
    setTimeout(() => this.setState({ nr6: true }), 7120);
    setTimeout(() => this.setState({ nr7: true }), 7250);
    setTimeout(() => this.setState({ nr8: true }), 8000);
    setTimeout(() => this.setState({ nr9: true }), 8100);
    setTimeout(() => this.setState({ nr10: true }), 10200);
    setTimeout(
      () => this.setState({ nr11: true, blinkDown: 'post_blink' }),
      11000
    );
    // Screen blinking
    setTimeout(() => this.setState({ screenCurtain: 'post_coverBlink' }), 9300);
    setTimeout(() => this.setState({ screenCurtain: '' }), 9420);
    setTimeout(
      () => this.setState({ screenCurtain: 'post_coverBlink' }),
      11700
    );
    // Black screen
    setTimeout(
      () => this.setState({ screenCurtain: 'post_blackCover' }),
      11900
    );
    // Turning on another screen
    setTimeout(() => this.props.firstScreenEnd(), 12300);
  };

  startMachine = () => {
    this.setState({ run: false });
    this.setState({ turningOn: true });
    this.delays();
  };

  isEnterPressed = () => {
    window.addEventListener('keydown', e => {
      if (e.keyCode !== 13) return;
      this.startMachine();
    });
  };

  isEscPressed = () => {
    window.addEventListener('keydown', e => {
      if (e.keyCode !== 27) return;
      this.props.goWebSite();
    });
  };

  componentDidMount() {
    this.isEnterPressed();
    this.isEscPressed();
  }

  render() {
    return (
      <main className="post_bgblack">
        {this.props.preloadImages && <ImagesPreloader />}
        {this.state.run && (
          <React.Fragment>
            <nav className="post_runComputer " onClick={this.startMachine}>
              <span>Power computer on</span>
            </nav>
            <span
              className="post_goWebsite post_noselect"
              onClick={this.props.goWebSite}
            >
              go website immediately
            </span>
          </React.Fragment>
        )}
        {this.state.turningOn && (
          <article className="post_main post_noselect post_turningOn">
            {this.state.beep && (
              <Sound url={soundfile} playStatus={Sound.status.PLAYING} />
            )}
            <div className={this.state.screenCurtain} />
            <img
              className="post_energystar"
              src={energystar}
              alt="energystar"
              draggable="false"
            />
            <header className="post_headerText">
              <img src={biosguy} alt="bios" draggable="false" />
              <ul className="post_ul">
                <li>Award Modular BIOS v4.50G, An Energy Star Ally</li>
                <li>Copyright (C) 1984-99, Award Software, Inc.</li>
              </ul>
            </header>
            <section>
              <p>486DX-OP-MOa-25/33/40/50/66/80/100-C6-ZG</p>
              <ul className="post_ul">
                <li>Award Plug and Play BIOS Extension v1.0A</li>
                <li>Copyright (C) 1999, Award Software, Inc.</li>
              </ul>
            </section>
            <section className="post_postList">
              <ul className="post_ul">
                <li className={this.state.blinkCpu}>Main Processor :</li>
                {this.state.nr2 && <li>Memory Test :</li>}
              </ul>
              <ul className="post_ul">
                {this.state.nr1 && (
                  <li className={this.state.blinkPentium}>
                    Pentium(C) III 800 MHz
                  </li>
                )}
                {this.state.nr3 && (
                  <li className={this.state.blinkMem}>
                    <CountUp end={this.state.memoryAmount} />
                    {'K OK'}
                  </li>
                )}
              </ul>
            </section>
            <section className="post_postList">
              <ul className="post_ul">
                {this.state.nr4 && <li>Primary Master...</li>}
                {this.state.nr5 && <li>Primary Slave...</li>}
                {this.state.nr6 && <li>Secondary Master...</li>}
                {this.state.nr7 && <li>Secondary Slave...</li>}
              </ul>
              <ul className="post_ul">
                {this.state.nr8 && <li>IBM-DJMA-371350 J760A30K</li>}
                {this.state.nr9 && <li>None</li>}
                {this.state.nr10 && <li>SAMSUNG CD-ROM SC-148F PS02</li>}
                {this.state.nr11 && <li>IOMEGA ZIP 100 ATAPI 14.A</li>}
              </ul>
            </section>
            <span className={this.state.blinkDown} />
            <footer className="post_footer">
              <ul className="post_ul">
                <li>
                  Press <span className="post_glow">DEL</span> to enter SETUP
                  <span className={this.state.skipMemory}>
                    , <span className="post_glow">ESC</span> to skip memory test
                  </span>
                </li>
                <li>09/30/1998-AMD-75X-W977-6A6SZM49C-00</li>
              </ul>
            </footer>
          </article>
        )}
      </main>
    );
  }
}

export default startUp;
