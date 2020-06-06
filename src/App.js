import React from "react";
import "./App.css";
import GenreSelector from "./GenreSelector";
import GameList from "./GameList";
import "antd/dist/antd.css";
// import ApiContext from './ApiContext';

const gamesList = [
  {
    id: 0,
    game_cover:
      "https://britgamer.s3.eu-west-1.amazonaws.com/2020-03/call-of-duty-modern-warfare-cover.jpg",
    game_genre: "first-person-shooter",
    name: "Call of Duty: Modern Warfare",
    game_desc:
      "Call of Duty: Modern Warfare is a 2019 first-person shooter video game developed by Infinity Ward and published by Activision. Serving as the sixteenth overall installment in the Call of Duty series, as well as a reboot of the Modern Warfare sub-series, it was released on October 25, 2019.",
    game_link: "Link to buy the game goes here",
  },
  {
    id: 1,
    game_cover:
      "https://howlongtobeat.com/games/59836_Insurgency_Sandstorm.jpg",
    game_genre: "first-person-shooter",
    name: "Insurgency: Sandstorm",
    game_desc: "description goes here",
    game_link: "Link to buy the game goes here",
  },
  {
    id: 2,
    game_cover: "img of cover goes here",
    game_genre: "first-person-shooter",
    name: "Rainbow Six: Siege",
    game_desc: "description goes here",
    game_link: "Link to buy the game goes here",
  },
  {
    id: 3,
    game_cover: "img of cover goes here",
    game_genre: "Survival Horror",
    name: "Resident Evil 3 remake",
    game_desc: "description goes here",
    game_link: "Link to buy the game goes here",
  },
  {
    id: 4,
    game_cover: "img of cover goes here",
    game_genre: "Survival Horror",
    name: "horror game",
    game_desc: "description goes here",
    game_link: "Link to buy the game goes here",
  },
  {
    id: 5,
    game_cover: "img of cover goes here",
    game_genre: "Survival Horror",
    name: "other horror name",
    game_desc: "description goes here",
    game_link: "Link to buy the game goes here",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: gamesList,
    };
  }

  // static contextType = ApiContext;

  updateGenre = (game) => {
    let genres = [];

    this.state.gamesList.forEach((genre) => {
      if (genre.game === game) {
        genres.push(genre);
      }
    });

    this.setState({
      genres: genres,
      toGenre: true,
      game: game,
    });
    console.log(game);
  };

  game = this.game;

  

  render() {

    return (
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

        {this.state.game ? (
          gamesList.map((gameDetail, index) => {
            return <GameList games={gameDetail} key={index} />;
          })
        ) : (
          <></>
        )}

        <footer>
          <a href="#">LinkedIn</a> <a href="#">GitHub</a> <a href="#">Email</a>
        </footer>
      </div>
    );
  }
}

export default App;
