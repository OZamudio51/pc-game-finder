import React from "react";

class GameList extends React.Component {
  render() {
    const { games } = this.props;

    return (
      <section>
        <div style={{ marginBottom: "50px" }}>{games.genre}</div>
        <div className="game-container">{games.cover}</div>
        <div>
          <h4>{games.name}</h4>
        </div>
        <div>
          <p>{games.desc}</p>
        </div>
        <div style={{ marginBottom: "25px" }}>
          <a style={{ fontSize: "15px" }} href="#">
            {games.link}
          </a>
        </div>
      </section>
    );
  }
}

export default GameList;