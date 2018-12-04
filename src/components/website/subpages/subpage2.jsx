import React, { Component } from 'react';

class Subpage2 extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="home_contentSection">
          <h2 className="home_h2 home_h2_develop">My purposes.</h2>
          <div className="home_developContainer">
            <article>
              Achieve the best coding practices: DRY method, performance tricks,
              the most readable coding format.
            </article>
            <article>
              I would like to learn how to create fast cross-platform
              applications using modern programming, like PWA (Progressive Web
              App). <br /> Furthermore: Back-end language like node.js: to
              perform operations on vulnerable data.
            </article>
            <article>
              I would to implement UX solutions confirmed by research.
            </article>
            <article>
              I am eager for internal company courses, including English
              lessons.
            </article>
          </div>
          <h3 className="home_h3 home_h3_develop">What else?</h3>
          <div className="home_developContainer">
            <article>
              Cleaner work gives cleaner effect. Finally: Greater availability.
            </article>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Subpage2;
