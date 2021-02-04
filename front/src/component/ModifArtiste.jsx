import React from "react";
import axios from "axios";
import { HiPlus } from "react-icons/hi";

const API_URL = process.env.REACT_APP_API_URL;

class ModifArtiste extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      genre: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    if (this.state.nom && this.state.genre) {
      this.postArtiste();
    } else {
      alert("Champs manquants");
    }
  }

  postArtiste() {
    axios
      .post(`${API_URL}/api/artiste`, this.state)
      .then((response) => response.data)
      .then((response) => {
          this.props.getArtiste();
        alert('artiste créé avec succès');
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  }

  render() {
    return (
      <div className="ajoutArtiste">
        <form onSubmit={this.submitForm}>
          <div>
            <label>
              Nom - 
              <input type="text" name="nom" value={this.state.nom} onChange={this.onChange}/>
            </label>
          </div>
          <div>
            <label>
              Genre - 
              <input type="text" name="genre" value={this.state.genre} onChange={this.onChange}/>
            </label>
          </div>
          <button type="submit">
          <HiPlus value="Ajouter" />
          </button>
        </form>
      </div>
    );
  }
}

export default ModifArtiste;
