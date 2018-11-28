import React, { Component } from 'react';
import pic1 from '../../components/website/css/imgs/mountainRailway.jpg';
import pic2 from '../../components/website/css/imgs/sunsetCity.jpg';
import pic3 from '../../components/website/css/imgs/pier.jpg';
import pic4 from '../../components/website/css/imgs/stage.jpg';
import pic5 from '../../components/website/css/imgs/modernComp.jpg';
import pic6 from '../../components/website/css/imgs/oldComp.jpg';
import pic7 from '../../components/website/css/imgs/psLogo.png';
import pic8 from '../../components/website/css/imgs/jsLogo.png';
import pic9 from '../../components/website/css/imgs/bsLogo.png';
import pic10 from '../../components/website/css/imgs/rjsLogo.png';
import pic11 from '../../components/website/css/imgs/gitLogo.png';
import pic12 from '../../components/website/css/imgs/jqLogo.png';
import pic13 from '../../components/website/css/imgs/canvasLogo.png';
import pic14 from '../../components/website/css/imgs/nodeLogo.png';
import pic15 from '../../components/website/css/imgs/svgLogo.png';
import pic16 from '../../components/website/css/imgs/phpLogo.png';
import pic17 from '../../components/website/css/imgs/yarnLogo.png';
import pic18 from '../../components/website/css/imgs/cssLogo.png';
import pic19 from '../../components/website/css/imgs/sassLogo.png';
import pic20 from '../../components/website/css/imgs/eslintLogo.png';
import pic21 from '../../components/website/css/imgs/htmlLogo.png';
import pic22 from '../../components/website/css/imgs/fbLogo.png';
import pic23 from '../../components/website/css/imgs/wpLogo.png';
import pic24 from '../../components/website/css/imgs/esLogo.png';

// Self idea - preloading images
// On "old computer loading", the pictures are loaded into memory
// After some time (because async and for wait main styles and fonts load)
// Control (on/off/time) from components/post/post.jsx

class imgPreloader extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={pic1} alt="" className="preloader_opacity" />
        <img src={pic2} alt="" className="preloader_opacity" />
        <img src={pic3} alt="" className="preloader_opacity" />
        <img src={pic4} alt="" className="preloader_opacity" />
        <img src={pic5} alt="" className="preloader_opacity" />
        <img src={pic6} alt="" className="preloader_opacity" />
        <img src={pic7} alt="" className="preloader_opacity" />
        <img src={pic8} alt="" className="preloader_opacity" />
        <img src={pic9} alt="" className="preloader_opacity" />
        <img src={pic10} alt="" className="preloader_opacity" />
        <img src={pic11} alt="" className="preloader_opacity" />
        <img src={pic12} alt="" className="preloader_opacity" />
        <img src={pic13} alt="" className="preloader_opacity" />
        <img src={pic14} alt="" className="preloader_opacity" />
        <img src={pic15} alt="" className="preloader_opacity" />
        <img src={pic16} alt="" className="preloader_opacity" />
        <img src={pic17} alt="" className="preloader_opacity" />
        <img src={pic18} alt="" className="preloader_opacity" />
        <img src={pic19} alt="" className="preloader_opacity" />
        <img src={pic20} alt="" className="preloader_opacity" />
        <img src={pic21} alt="" className="preloader_opacity" />
        <img src={pic22} alt="" className="preloader_opacity" />
        <img src={pic23} alt="" className="preloader_opacity" />
        <img src={pic24} alt="" className="preloader_opacity" />
      </React.Fragment>
    );
  }
}

export default imgPreloader;
