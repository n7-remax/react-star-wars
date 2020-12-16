import { Component } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";

import ResidentsList from "./ResidentsList";
class FamousResidents extends Component {
  state = {
    planetId: this.props.match.params.url,
    name: "",
    residents: null,
    isResidentsLoaded: false,
  };

  getPlanetDescription = async (id) => {
    const response = await axios(id);
    return response;
  };

  getResidents = async (url) => {
    const response = await axios(url);
    return response;
  };

  componentDidMount() {
    this.getPlanetDescription(`planets/${this.state.planetId}/`).then((res) => {
      this.setState({
        name: res.data.name,
      });
      if (Array.isArray(res.data.residents) && res.data.residents.length) {
        const peopleId = res.data.residents.map(
          (item) => item.match(/(\d+)/)[0]
        );
        Promise.all(
          peopleId.map((element) => this.getResidents(`people/${element}/`))
        ).then((res) => {
          console.log(res);
          this.setState({
            residents: res.map((e) => e.data.name),
            isResidentsLoaded: true,
          });
        });
      }
    });
  }

  render() {
    const planet = this.state;
    return (
      <div className="famous-residents">
        <h2 className="famous-residents-heading">{planet.name}</h2>
        {planet.isResidentsLoaded ? (
          <div className="famous-residents-list">
            <ResidentsList residents={planet.residents} />
          </div>
        ) : (
          <div className="loader-container">
            <Loader type="Circles" color="#00BFFF" height={80} width={80} />
          </div>
        )}
      </div>
    );
  }
}

export default FamousResidents;
