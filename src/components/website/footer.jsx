import React, { Component } from 'react';
import linkedin from './css/imgs/linkedin.png';
import email from './css/imgs/message.png';
import Modal from './contactFrom';

class footer extends Component {
  constructor() {
    super();
    this.state = {
      modalFrom: false
    };
    this.child = React.createRef();
  }

  toggleModal = () => {
    this.setState({ modalFrom: !this.state.modalFrom });
    this.child.current.getActivityMechanism();
  };

  componentDidMount() {
    this.toggleModal();
  }

  render() {
    return (
      <React.Fragment>
        <section className="home_footer">
          <div className="home_leftCorner">
            {' '}
            <p />
          </div>
          <div className="home_rightCorner">
            <nav className="home_communityButtons">
              <img src={email} alt="Contact form" onClick={this.toggleModal} />
              <a
                href="https://www.linkedin.com/in/micha%C5%82-sa%C5%82ek-2424a316a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="Linked In" />
              </a>
            </nav>
            <span className="home_footerText">- 2018 – Michał Sałek -</span>
          </div>
        </section>
        <Modal
          ref={this.child}
          getModalState={this.state.modalFrom}
          toggleModal={this.toggleModal}
        />
      </React.Fragment>
    );
  }
}

export default footer;
