import React, { Component } from 'react';
import './css/home.scss';
import Footer from './footer';
import Menu from './menu';
import Hamburger from './menuHamburger';
import MainPage from './subpages/mainPage';
import Subpage1 from './subpages/subpage1';
import Subpage2 from './subpages/subpage2';
import Subpage3 from './subpages/subpage3';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      menu: false,
      menuIcon: '',
      background: 'home_mainPage',
      dispHome: true,
      dispSp1: false,
      dispSp2: false,
      dispSp3: false
    };
    this.child = React.createRef();
  }

  toggleMenu = () => {
    this.setState({ menu: !this.state.menu });
    this.state.menu
      ? this.setState({ menuIcon: 'home_openMenu' })
      : this.setState({ menuIcon: '' });
    this.child.current.getActivityMechanism();
  };

  menuPagesControl = e => {
    if (e === 'first')
      this.setState({
        dispHome: true,
        dispSp1: false,
        dispSp2: false,
        dispSp3: false,
        background: 'home_mainPage'
      });
    if (e === 'second')
      this.setState({
        dispHome: false,
        dispSp1: true,
        dispSp2: false,
        dispSp3: false,
        background: 'home_subpage1'
      });
    if (e === 'third')
      this.setState({
        dispHome: false,
        dispSp1: false,
        dispSp2: true,
        dispSp3: false,
        background: 'home_subpage2'
      });
    if (e === 'fourth')
      this.setState({
        dispHome: false,
        dispSp1: false,
        dispSp2: false,
        dispSp3: true,
        background: 'home_subpage3'
      });
    this.toggleMenu();
  };

  componentDidMount() {
    this.toggleMenu();
  }

  render() {
    return (
      <main className={this.state.background}>
        <Menu
          ref={this.child}
          getMenuState={this.state.menu}
          whichButton={this.menuPagesControl}
        />
        <Hamburger
          toggleMenu={this.toggleMenu}
          menuIcon={this.state.menuIcon}
        />
        <div className="home_frame">
          {this.state.dispHome && <MainPage />}
          {this.state.dispSp1 && <Subpage1 />}
          {this.state.dispSp2 && <Subpage2 />}
          {this.state.dispSp3 && <Subpage3 />}
          <Footer />
        </div>
      </main>
    );
  }
}

export default Home;
