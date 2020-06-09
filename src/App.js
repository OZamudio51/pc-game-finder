import React from "react";
import "./App.css";
import GenreSelector from "./GenreSelector";
import GameList from "./GameList";
import "antd/dist/antd.css";
import { withRouter } from "react-router-dom";
import ApiContext from './ApiContext';
import config from './config';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: [],
      game: "",
    };
  }

  static contextType = ApiContext;

  componentDidMount() {
    this.fetchGames();
    this.props.history.push("/");
  }

  fetchGames = async () => {
    let gamesRes = await fetch(`${config.API_ENDPOINT}api/genres`)
    let result = await gamesRes.json()
    this.setState({
      gamesList: result
    });
  }

  updateGenre = (genre) => {
    this.setState({
      genre,
    });
  };

  game = this.game;

  render() {
    const { gamesList, genre } = this.state;

    return (
      <ApiContext.Provider value={{gamesList: this.state.gamesList}}>
      <div className="App">
        <header>
          <h1>PC Game Finder</h1>
          <h3>
            There are many games to choose from. This page will help you find
            the best choices!
          </h3>
        </header>
        <br />
        <GenreSelector updateGenre={this.updateGenre} />
        <br />
        <br />
        {genre &&
          gamesList
            .filter((game) => game.game_genre === genre)
            .map((filteredGame, index) => (
              <GameList games={filteredGame} key={index} />
            ))}
        <footer>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href='https://www.linkedin.com/in/oscar-zamudio/'
          >
            LinkedIn
          </a>{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href='https://github.com/OZamudio51'
          >
            GitHub
          </a>{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href='mailto:zamudio_1526@hotmail.com'
          >
            Email
          </a>
        </footer>
      </div>
      </ApiContext.Provider>
    );
  }
}

export default withRouter(App);
