import React, { Component } from 'react';

class contactForm extends Component {
  constructor() {
    super();
    this.state = {
      home_formModal_div: '',
      home_formModal: ''
    };
  }

  getActivityMechanism = () => {
    if (this.props.getModalState) {
      let act = '--active';
      this.setState({
        home_formModal_div: act,
        home_formModal: act
      });
    } else {
      this.setState({
        home_formModal_div: '',
        home_formModal: ''
      });
    }
  };

  render() {
    return (
      <section className={`home_formModal  ${this.state.home_formModal}`}>
        <div className={`home_formModal_div ${this.state.home_formModal_div}`}>
          <nav
            onClick={this.props.toggleModal}
            className={'home_formModal_close'}
          >
            <div className="home_formClose_Line" />
            <div className="home_formClose_Line" />
          </nav>
          <span className="home_formModal_div_topText">
            Send me an email contact@michalsalek.pl
          </span>
          <span className="home_formModal_div_topText">
            <a
              className="home_formModal_div_topText_a"
              href="mailto:contact@michalsalek.pl"
            >
              <i className="far fa-envelope-open fa-lg" />
            </a>
          </span>
        </div>
      </section>
    );
  }
}

export default contactForm;
