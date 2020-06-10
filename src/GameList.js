import React from "react";
import "./GameList.css";

// GamesList Component

class GameList extends React.Component {
  // Renders the list of games

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
          <h4 style={{ color: "white" }}>{games.game_name}</h4>
        </div>
        <div>
          <p>{games.game_desc}</p>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <a
            style={{
              fontSize: "15px",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              width: "100%",
              color: "white",
            }}
            target="_blank"
            rel="noreferrer noopener"
            href={games.game_link}
          >
            Click here to purchase!
          </a>
        </div>
      </section>
    );
  }
}

export default GameList;
