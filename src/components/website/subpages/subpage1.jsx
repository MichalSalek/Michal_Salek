import React, { Component } from 'react';

class Subpage1 extends Component {
  constructor() {
    super();
    this.state = {
      toggleScroll: true,
      home_h2_opacity: '',
      logoSrc1: null,
      logoSrc2: null,
      techLogoOpacity: 'home_techLogo__out'
    };
  }

  whatTech1 = technology =>
    this.setState({
      logoSrc1: technology,
      techLogoOpacity: 'home_techLogo__in'
    });
  whatTech2 = technology =>
    this.setState({
      logoSrc2: technology,
      techLogoOpacity: 'home_techLogo__in'
    });
  techClear = () => {
    this.setState({
      techLogoOpacity: 'home_techLogo__out',
      logoSrc1: null,
      logoSrc2: null
    });
  };

  _isMounted = false;

  scrollTop = () => window.scrollTo(0, 0);

  hideHeading = () => {
    window.onscroll = () => {
      if (this._isMounted) {
        if (window.pageYOffset >= 1) {
          if (this.state.toggleScroll) {
            this.setState({
              home_h2_opacity: 'home_h2_opacityZero',
              toggleScroll: false
            });
          }
        } else {
          this.setState({ home_h2_opacity: '', toggleScroll: true });
        }
      }
    };
  };

  componentDidMount() {
    this._isMounted = true;
    this.scrollTop();
    this.hideHeading();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <React.Fragment>
        <section className="home_contentSection">
          <h2 className={`home_h2 home_h2_stack ${this.state.home_h2_opacity}`}>
            Work-with-code Technologies.
          </h2>
          <h3 className="home_h3 home_h3_stack">I use</h3>
          <div className="home_stackContainer">
            <span
              onMouseEnter={() => this.whatTech1('home_psLogo')}
              onMouseLeave={this.techClear}
            >
              Adobe Photoshop
            </span>
            <span
              onMouseEnter={() => this.whatTech1('home_jsLogo')}
              onMouseLeave={this.techClear}
            >
              Vanilla JavaScript
            </span>
            <span
              onMouseEnter={() => this.whatTech1('home_esLogo')}
              onMouseLeave={this.techClear}
            >
              ECMAScript 2015
            </span>
            <span
              onMouseEnter={() => this.whatTech1('home_wpLogo')}
              onMouseLeave={this.techClear}
            >
              Webpack
            </span>
            <span
              onMouseEnter={() => this.whatTech1('home_rjsLogo')}
              onMouseLeave={this.techClear}
            >
              ReactJS
            </span>
            <span
              onMouseEnter={() => this.whatTech1('home_fbLogo')}
              onMouseLeave={this.techClear}
            >
              Flexbox
            </span>
            <span
              onMouseEnter={() => this.whatTech1('home_htmlLogo')}
              onMouseLeave={this.techClear}
            >
              HTML5
            </span>
            <span
              onMouseEnter={() => this.whatTech1('home_eslintLogo')}
              onMouseLeave={this.techClear}
            >
              ESLint
            </span>
            <span
              onMouseEnter={() => this.whatTech1('home_sassLogo')}
              onMouseLeave={this.techClear}
            >
              SASS
            </span>
            <span
              onMouseEnter={() => this.whatTech1('home_cssLogo')}
              onMouseLeave={this.techClear}
            >
              CSS3
            </span>
            <span
              onMouseEnter={() => this.whatTech1('home_yarnLogo')}
              onMouseLeave={this.techClear}
            >
              Yarn
            </span>
            <div
              className={`${this.state.techLogoOpacity} home_techLogo ${
                this.state.logoSrc1
              }`}
            />
          </div>
          <h3 className="home_h3">I had experience with</h3>
          <div className="home_stackContainer">
            <span
              onMouseEnter={() => this.whatTech2('home_phpLogo')}
              onMouseLeave={this.techClear}
            >
              {'PHP PDO & MySql'}
            </span>
            <span
              onMouseEnter={() => this.whatTech2('home_svgLogo')}
              onMouseLeave={this.techClear}
            >
              SVG animations
            </span>
            <span
              onMouseEnter={() => this.whatTech2('home_bsLogo')}
              onMouseLeave={this.techClear}
            >
              Bootstrap
            </span>
            <span
              onMouseEnter={() => this.whatTech2('home_nodeLogo')}
              onMouseLeave={this.techClear}
            >
              Node.js
            </span>
            <span
              onMouseEnter={() => this.whatTech2('home_canvasLogo')}
              onMouseLeave={this.techClear}
            >
              Canvas
            </span>
            <span
              onMouseEnter={() => this.whatTech2('home_jqLogo')}
              onMouseLeave={this.techClear}
            >
              jQuery
            </span>
            <span
              onMouseEnter={() => this.whatTech2('home_seoLogo')}
              onMouseLeave={this.techClear}
            >
              SEO
            </span>
            <span
              onMouseEnter={() => this.whatTech2('home_gitLogo')}
              onMouseLeave={this.techClear}
            >
              GIT
            </span>
            <div
              className={` ${this.state.techLogoOpacity} home_techLogo ${
                this.state.logoSrc2
              }`}
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Subpage1;
