import React from "react";
import "./App.css";
import GenreSelector from "./GenreSelector";
import GameList from "./GameList";
import "antd/dist/antd.css";
import { withRouter } from "react-router-dom";
import ApiContext from "./ApiContext";
import config from "./config";

// App Component

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: [],
      game: "",
    };
  }

  static contextType = ApiContext;

  // invokes async function for API

  componentDidMount() {
    this.fetchGames();
    this.props.history.push("/");
  }

  // fetches from API

  fetchGames = async () => {
    let gamesRes = await fetch(`${config.API_ENDPOINT}api/genres`);
    let result = await gamesRes.json();
    this.setState({
      gamesList: result,
    });
  };

  // updates the state

  updateGenre = (genre) => {
    this.setState({
      genre,
    });
  };

  game = this.game;

  // renders landing page

  render() {
    const { gamesList, genre } = this.state;

    return (
      <ApiContext.Provider value={{ gamesList: this.state.gamesList }}>
        <div className="App">
          <header className="app-header">
            <h1 style={{ color: "white" }}>PC Game Finder</h1>
            <h3 style={{ color: "white" }}>
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
            <div className="link">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://ozamudio51.github.io/portfolio-website/"
                style={{ color: "white" }}
              >
                Contact me!
              </a>{" "}
            </div>
          </footer>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default withRouter(App);
