import React, { useEffect, useState } from "react";
import "./musique.css";
import Artiste from "./Artiste";
import ModifArtiste from "./ModifArtiste";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Musique() {
  const [artiste, setArtiste] = useState([]);

  const getArtiste = () => {
    axios
      .get(`${API_URL}/api/artiste`)
      .then((response) => response.data)
      .then((data) => {
        setArtiste(data);
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  };
  useEffect(() => {
    getArtiste();
  }, []);

  return (
    <div className="container">
      <section className="titre" >
        <p>En avant la musique</p>
      </section>
      <section className="leftSection">
        <Artiste artiste={artiste} />
      </section>
      <section className="rightSection">
        <div className="concert">
          <p>Concerts</p>
        </div>
        <div className="modif">
          <ModifArtiste getArtiste={getArtiste} />
        </div>
      </section>
    </div>
  );
}

export default Musique;
