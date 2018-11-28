import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './components/post/post';
import Boilerplate from './components/website/boilerplate';
import * as serviceWorker from './serviceWorker';

class Index extends Component {
  state = {
    post: true,
    home: false
  };
  renderHome = () => {
    this.setState({ post: false, home: true });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.post && <Post goWebSite={this.renderHome} />}
        {this.state.home && <Boilerplate />}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.register();
