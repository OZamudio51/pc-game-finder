import React from "react";
import "./GameList.css";

class GameList extends React.Component {
  render() {
    const { games } = this.props;

    return (
      <section>
        <div>
          <img
            className="game-container"
            src={games.game_cover}
            alt="cover-art"
          />
        </div>
        <div>
          <h4>{games.game_name}</h4>
        </div>
        <div>
          <p>{games.game_desc}</p>
        </div>
        <div style={{ marginBottom: "25px" }}>
          <a style={{ fontSize: "15px" }} target="_blank" rel="noreferrer noopener" href={games.game_link} >

            Click here to purchase!
          </a>
        </div>
      </section>
    );
  }
}

export default GameList;
