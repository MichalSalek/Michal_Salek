import React, { Component } from 'react';

class Subpage2 extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="home_contentSection">
          <h2 className="home_h2 home_h2_develop">To develop.</h2>
          <div className="home_developContainer">
            <article>
              Best practices of coding: DRY method, performance tricks, the most
              readable format.
            </article>
            <article>
              Creating fast cross-platform apps using modern programming.
            </article>
            <article>
              Backend languages: to perform operations on vulnerable data.
            </article>
            <article>
              Implementation of UX solutions confirmed by research.
            </article>
            <article>
              I am eager for internal company courses, including English
              lessons.
            </article>
          </div>
          <h3 className="home_h3 home_h3_develop">What else?</h3>
          <div className="home_developContainer">
            <article>
              Cleaner work gives cleaner effect, finally: greater availability.
            </article>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Subpage2;
