import React from "react";
import "./artiste.css";

class Artiste extends React.Component {
  
  render() {
    const { artiste } = this.props;

    return (
      <div className="result">
        <h1>Artistes</h1>
        {artiste.map((oneArtiste) => (
          <ul key={oneArtiste.id}>{oneArtiste.nom} - {oneArtiste.genre}</ul>
        ))}
      </div>
    );
  }
}

export default Artiste;
