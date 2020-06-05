import React from "react";

class GenreSelector extends React.Component {
  render() {
    return (
      <div>
        <section>
          <form htmlFor="genre-selector">
            <label htmlFor="genre">Select a genre to get started: </label>
            <select
              title="genre"
              className="genre-selection"
              selected="select-a-genre"
            >
              <option value="select-a-genre" selected disabled>
                Select a genre
              </option>
              <option value="first-person-shooter">First Person Shooter</option>
              <option value="survival-horror">Survival Horror</option>
              <option value="action-rpg">Action-RPG</option>
              <option value="third-person-shooter">Third Person Shooter</option>
              <option value="indie">Indie</option>
              <option value="puzzle">Puzzle</option>
              <option value="Stealth-based">Stealth based</option>
            </select>
          </form>
        </section>
      </div>
    );
  }
}

export default GenreSelector;
