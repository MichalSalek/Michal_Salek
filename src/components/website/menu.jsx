import React, { Component } from 'react';
import pic1 from './css/imgs/oldComp.jpg';
import pic2 from './css/imgs/modernComp.jpg';
import First from './menuElements/01';
import Second from './menuElements/02';
import Third from './menuElements/03';
import Fourth from './menuElements/04';

class menu extends Component {
  constructor() {
    super();
    this.state = {
      home_menuActivity: '',
      home_menuPictures: '',
      home_menuPicture1: '',
      home_menuPicture2: '',
      home_menuList: ''
    };
  }

  getActivityMechanism = () => {
    if (this.props.getMenuState) {
      let act = '--active';
      this.setState({
        home_menuActivity: act,
        home_menuPictures: act,
        home_menuPicture1: act,
        home_menuPicture2: act,
        home_menuList: act
      });
    } else {
      this.setState({
        home_menuActivity: '',
        home_menuPictures: '',
        home_menuPicture1: '',
        home_menuPicture2: '',
        home_menuList: ''
      });
    }
  };

  render() {
    return (
      <nav className={`home_menu ${this.state.home_menuActivity}`}>
        <div className={`home_menuPictures ${this.state.home_menuPictures}`}>
          <div className={`home_menuPicture1 ${this.state.home_menuPicture1}`}>
            <img src={pic2} alt="Modern LCD Display" />
          </div>
          <div className={`home_menuPicture2 ${this.state.home_menuPicture2}`}>
            <img src={pic1} alt="Old CRT Display" />
          </div>
        </div>

        <div className={`home_menuList ${this.state.home_menuList}`}>
          <a className="home_menuText" href="mailto:contact@michalsalek.pl">
            - contact@michalsalek.pl -
          </a>
          <ul>
            <First whichButton={this.props.whichButton} />
            <Second whichButton={this.props.whichButton} />
            <Third whichButton={this.props.whichButton} />
            <Fourth whichButton={this.props.whichButton} />
          </ul>
        </div>
      </nav>
    );
  }
}

export default menu;
