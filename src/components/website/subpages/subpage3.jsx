import React, { Component } from 'react';
import Player from '../../../plugins/player/player';

class Subpage3 extends Component {
  constructor() {
    super();
    this.state = {
      toggleScroll: false,
      home_h2_opacity: ''
    };
  }

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
          <h2 className={`home_h2 home_h2_hobby ${this.state.home_h2_opacity}`}>
            Self-educated sound engineering.
          </h2>
          <h3 className="home_h3 home_h3_hobby_first">
            Music production {'&'} sound editing
          </h3>
          <div className="home_hobbyContainer">
            <article>
              On my learn-path I have learnt many methods, such as distortion
              and saturation, parametric equalization, various kinds of
              compression, throughout the gating, expansion as well as sound
              modulation.
            </article>
            <article>
              Have you ever wondered how the songs you listen to every day are
              made?
            </article>
          </div>
          <Player />
          <h3 className="home_h3 home_h3_hobby_second">And what about IT?</h3>
          <div className="home_hobbyContainer home_hobbyContainer_second">
            <article>
              Working with sound is also the selection and implementation of
              digital solutions.This is configuring dozens of parameters
              assigned to each of them.
            </article>
            <article>
              Additionally - skilfully arranging them on the timeline.
            </article>
            <article>
              Making a nice sounding mix with mastering of a 3-minute single can
              cost sound engineer up to 30h of his work.
            </article>
          </div>
          <div className="home_hobbyContainer home_hobbyContainer_third">
            <article>
              I also made music for Tomasz Bagiński's film titled Cathedral
              from 2002.
            </article>
            <iframe
              className="home_youtubeFrame"
              src="https://www.youtube.com/embed/PeVpQ_lOPmg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="player"
            />
            <article>
              The Cathedral (Katedra) 2002 - music by Michał Sałek (2017)
            </article>
          </div>
          <h3 className="home_h3 home_h3_hobby_second">
            A far-reaching lesson
          </h3>
          <div className="home_hobbyContainer home_hobbyContainer_fourth">
            <article>
              After hundreds of rejected projects, wasted hours and ideas, I
              know how important it is to plan the work algorithm...
            </article>
            <article>
              ...So many things can be predicted from the beginning.
            </article>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Subpage3;
