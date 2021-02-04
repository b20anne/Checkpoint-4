import React from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

class Artiste extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artiste: [],
    };
  }
  componentDidMount() {
    this.getArtiste();
  }
  getArtiste() {
    axios
      .get(`${API_URL}/api/artiste`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          artiste: data,
        });
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  }
  render() {
    const { artiste } = this.state;
    return (
    <div>
        <ul key={artiste.id}>
            <li>{artiste.nom}</li>
            <li>{artiste.genre}</li>
        </ul>

    </div>
    );
  }
}

export default Artiste;
