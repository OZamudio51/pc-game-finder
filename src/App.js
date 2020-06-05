import React from "react";
import "./App.css";
import GenreSelector from "./GenreSelector";
import GameList from "./GameList";
import "antd/dist/antd.css";


const games = {'First Person Shooter': [
  {
    id: 0,
    cover: "img of cover goes here",
    name: "Call of Duty: Modern Warfare",
    desc: "description goes here",
    link: "Link to buy the game goes here"
  },
  {
    id: 1,
    cover: "img of cover goes here",
    name: "Insurgency: Sandstorm",
    desc: "description goes here",
    link: "Link to buy the game goes here"
  },
  {
    id: 2,
    cover: "img of cover goes here",
    name: "Rainbow Six: Seige",
    desc: "description goes here",
    link: "Link to buy the game goes here"
  }
], 'RPG': [
  {
    id: 0,
    cover: "img of cover goes here",
    name: "The Witcher",
    desc: "description goes here",
    link: "Link to buy the game goes here"
  },
  {
    id: 1,
    cover: "img of cover goes here",
    name: "Skyrim",
    desc: "description goes here",
    link: "Link to buy the game goes here"
  },
  {
    id: 2,
    cover: "img of cover goes here",
    name: "RPG game",
    desc: "description goes here",
    link: "Link to buy the game goes here"
  }
], }

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>PC Game Finder</h1>
        <h3>
          There are many games to choose from. This page will help you find the
          best choices!
        </h3>
      </header>
      <br/>
      <GenreSelector />
      <br/>
      <br/>

    {Object.keys(games).map((key) => {
      return <div>
          <h3>{key}</h3>
          {games[key].map((game, index) => {
          return <GameList games ={game}
            key={index} />
          })}

          </div>
    })}


<footer>
      <a href="#">LinkedIn</a>{' '}
      {' '}<a href="#">GitHub</a>{' '}
      {' '}<a href="#">Email</a>
    </footer>
    </div>
  );
}