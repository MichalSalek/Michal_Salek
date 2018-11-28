import React, { Component } from 'react';
import Sound from 'react-sound';

import playlistFile from '../../plugins/player/playlist';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songnrPlayer: 0,
      playStatusPlayer: Sound.status.STOPPED,
      volumePlayer: 90,
      coverPlayer: '',
      iconTogglePlayer: 'fas fa-play-circle fa-3x',
      durationPlayer: 0,
      positionPlayer: 0,
      barWidthPlayer: 0
    };
  }

  playlistPlayer = playlistFile;

  playerTogglePlay = () => {
    if (this.state.playStatusPlayer !== Sound.status.PLAYING) {
      this.setState({
        playStatusPlayer: Sound.status.PLAYING,
        iconTogglePlayer: 'far fa-pause-circle fa-3x'
      });
      return;
    }
    if (this.state.playStatusPlayer !== Sound.status.PAUSED) {
      this.setState({
        playStatusPlayer: Sound.status.PAUSED,
        iconTogglePlayer: 'far fa-play-circle fa-3x'
      });
    }
  };

  playerToggleStop = () => {
    this.setState({
      playStatusPlayer: Sound.status.STOPPED,
      iconTogglePlayer: 'fas fa-play-circle fa-3x',
      positionPlayer: 0
    });
  };

  playerToggleSong = e => {
    if (e === 'previous' && this.state.songnrPlayer !== 0) {
      this.setState({
        songnrPlayer: this.state.songnrPlayer - 1,
        positionPlayer: 0
      });
      return;
    }
    if (
      e === 'next' &&
      this.state.songnrPlayer !== this.playlistPlayer.length - 1
    ) {
      this.setState({
        songnrPlayer: this.state.songnrPlayer + 1,
        positionPlayer: 0
      });
    }
  };

  playerSongEnd = () => {
    if (this.state.songnrPlayer === this.playlistPlayer.length - 1) {
      this.playerToggleStop();
    } else {
      this.playerToggleSong('next');
    }
  };

  playerPlaylist = e => {
    this.setState({ songnrPlayer: parseFloat(e), positionPlayer: 0 });
  };

  playerProgressBar_d = (duration = 0) => {
    this.setState({ durationPlayer: duration });
  };

  playerProgressBar_p = (position = 0) => {
    this.setState({
      positionPlayer: position
    });
  };

  playerSetProgressBarWidth = e => {
    const thisDiv = e.currentTarget;
    this.setState({ barWidthPlayer: thisDiv.offsetWidth });
  };

  playerProgressBar_change = e => {
    if (this.state.playStatusPlayer === Sound.status.STOPPED) return;
    let setPosition = (
      e.nativeEvent.offsetX / this.state.barWidthPlayer
    ).toFixed(2);
    this.setState({ positionPlayer: this.state.durationPlayer * setPosition });
  };

  PrintMySongs = () =>
    this.playlistPlayer.map((el, index) => {
      return (
        <li
          key={index}
          className={`home_player_playlist_song ${index ===
            this.state.songnrPlayer && '--activeSong'}`}
          onClick={e => this.playerPlaylist(e.currentTarget.dataset.songid)}
          data-songid={index}
        >
          {' '}
          <span className="home_player_playlist_title">
            {el.ID} {el.title}
          </span>{' '}
          <span className="home_player_playlist_album">{el.album}</span>{' '}
          <span className="home_player_playlist_genre">{el.genre}</span>{' '}
          <span className="home_player_playlist_year">{el.year}</span>{' '}
          <span className="home_player_playlist_duration">{el.duration}</span>
        </li>
      );
    });

  render() {
    return (
      <React.Fragment>
        <Sound
          url={this.playlistPlayer[this.state.songnrPlayer].url}
          playStatus={this.state.playStatusPlayer}
          onFinishedPlaying={this.playerSongEnd}
          volume={this.state.volumePlayer}
          onPlaying={e => this.playerProgressBar_p(e.position)}
          onLoading={e => this.playerProgressBar_d(e.duration)}
          position={this.state.positionPlayer}
        />
        <div className="home_player_playlist home_hobbyContainer">
          <ul>
            <h3 className="home_h3 home_h3_hobby_third">some of my music</h3>
            <li className="home_player_playlist_bar">
              {' '}
              <span className="home_player_playlist_title --bold">
                Title
              </span>{' '}
              <span className="home_player_playlist_album --bold">Album</span>{' '}
              <span className="home_player_playlist_genre --bold">Genre</span>{' '}
              <span className="home_player_playlist_year --bold">Year</span>{' '}
              <span className="home_player_playlist_duration --bold">
                Duration
              </span>
            </li>
            {this.PrintMySongs()}
          </ul>
        </div>
        <section className="home_hobbyContainer home_player">
          <div
            ref="elem"
            className={`home_player_progressBar --${
              this.state.playStatusPlayer
            }`}
            onMouseUp={this.playerProgressBar_change.bind(this)}
            onMouseEnter={this.playerSetProgressBarWidth.bind(this)}
          >
            <div
              className="home_player_progressBar_filled"
              style={{
                marginLeft: `${(
                  (this.state.positionPlayer * 100) /
                  this.state.durationPlayer
                ).toFixed(2)}%`
              }}
            />
          </div>
          <div className="home_player_songID">
            <img
              src={this.playlistPlayer[this.state.songnrPlayer].cover}
              alt="cover"
            />
            <div className="home_player_artistTitle">
              <span>{this.playlistPlayer[this.state.songnrPlayer].artist}</span>
              <span>{this.playlistPlayer[this.state.songnrPlayer].title}</span>
            </div>
          </div>
          <div className="home_player_buttons">
            <button
              className="home_player_stop"
              onClick={() => {
                this.playerToggleStop();
              }}
            >
              <i className="fas fa-stop fa-sm	" />
            </button>
            <button
              className="home_player_previous"
              onClick={() => this.playerToggleSong('previous')}
            >
              <i className="fas fa-step-backward fa-lg" />
            </button>
            <button
              className="home_player_togglePlay"
              onClick={() => {
                this.playerTogglePlay();
              }}
            >
              <i className={this.state.iconTogglePlayer} />
            </button>
            <button
              className="home_player_next"
              onClick={() => this.playerToggleSong('next')}
            >
              <i className="fas fa-step-forward fa-lg" />
            </button>
            <div
              className={`home_player_bar --${this.state.playStatusPlayer}`}
            />
          </div>

          <div className="home_inputDiv">
            <input
              type="range"
              name="volume"
              className="home_player_volume"
              min="0"
              max="100"
              step="0.05"
              value={this.state.volumePlayer}
              onChange={e =>
                this.setState({
                  volumePlayer: parseFloat(e.target.value, 10)
                })
              }
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Player;
