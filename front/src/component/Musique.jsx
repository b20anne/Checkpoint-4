import React from "react";
import "./musique.css"

function Musique() {
  return (
    <div className="container">
      <section className="titre">
        <p>En avant la musique</p>
      </section>
      <section className="leftSection">
          <p>Artistes</p>
      </section>
      <section className="rightSection">
          <p>Concerts</p>
      </section>
    </div>
  );
}

export default Musique;
