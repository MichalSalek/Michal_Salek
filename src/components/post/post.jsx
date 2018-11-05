import React, { Component } from 'react';
import biosguy from './imgs/bios-guy2.png';
import energystar from './imgs/energystar.png';
import './css/post.scss';

class Post extends Component {
  state = {
    delays: {
      displayMemory: 'hidden',
      displaySkipMemory: '',
      displayMemoryAmount: 'hidden',
      display1: 'hidden',
      display2: 'hidden',
      display3: 'hidden',
      display4: 'hidden',
      memoryAmount: 0
    }
  };

  delays = () => {
    setTimeout(() => this.setState({ displayMemory: '' }), 2000);
    setTimeout(() => this.setState({ displayMemoryAmount: '' }), 3000);
    setTimeout(() => this.setState({ displaySkipMemory: 'hidden' }), 4000);
    setTimeout(() => this.setState({ display1: '' }), 6000);
    setTimeout(() => this.setState({ display2: '' }), 6200);
    setTimeout(() => this.setState({ display3: '' }), 6400);
    setTimeout(() => this.setState({ display4: '' }), 6600);
  };

  memoryTest = amount => {
    this.setState({ memoryAmount: amount });
    return this.state.memoryAmount;
  };

  render() {
    return (
      <main className="main">
        {this.delays()}
        <img className="energystar" src={energystar} alt="energystar" />
        <header className="headerText">
          <img src={biosguy} alt="bios" />
          <ul>
            <li>Award Modular BIOS v4.50G, An Energy Star Ally</li>
            <li>Copyright (C) 1984-99, Award Software, Inc.</li>
          </ul>
        </header>
        <section className="serial">
          <p>486DX-OP-MOa-25/33/40/50/66/80/100-C6-ZG</p>
          <ul>
            <li>Award Plug and Play BIOS Extension v1.0A</li>
            <li>Copyright (C) 1999, Award Software, Inc.</li>
          </ul>
        </section>
        <section className="computerComponents">
          <ul>
            <li>Main Processor</li>
            <li className={this.state.displayMemory}>Memory Test</li>
          </ul>
          <ul>
            <li>Pentium(C) III 800 MHz</li>
            <li className={this.state.displayMemoryAmount}>131072K OK</li>
          </ul>
        </section>
        <section className="computerComponents">
          <ul>
            <li className={this.state.display1}>Primary Master</li>
            <li className={this.state.display1}>Primary Slave</li>
            <li className={this.state.display1}>Secondary Master</li>
            <li className={this.state.display1}>Secondary Slave</li>
          </ul>
          <ul>
            <li className={this.state.display1}>IBM-DJMA-371350 J760A30K</li>
            <li className={this.state.display2}>None</li>
            <li className={this.state.display3}>SAMSUNG CD-ROM SC-148F PS02</li>
            <li className={this.state.display4}>IOMEGA ZIP 100 ATAPI 14.A</li>
          </ul>
        </section>
        <footer className="footer">
          <ul>
            <li>
              Press <span className="glow">DEL</span> to enter SETUP
              <span className={this.state.displaySkipMemory}>
                , <span className="glow">ESC</span> to skip memory test
              </span>
            </li>
            <li>09/30/1998-AMD-75X-W977-6A6SZM49C-00</li>
          </ul>
        </footer>
      </main>
    );
  }
}

export default Post;
