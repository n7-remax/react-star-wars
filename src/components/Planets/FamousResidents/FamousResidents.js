import { Component } from "react";
import axios from "axios";

import ResidentsList from "./ResidentsList";
import noDataImg from "../../../assets/image/no-data.jpeg"

class FamousResidents extends Component {
  state = {
    planetId: this.props.match.params.url,
    name: "",
    residents: null,
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
          console.log(res)
          this.setState({
            residents: res.map((e) => e.data.name),
          });
        });
      }
    });
  }

  render() {
    const planet = this.state;
    console.log(planet.residents);
    return (
      <div className="famous-residents">
        <h2>{planet.name}</h2>
        <div className="famous-residents-list">
          {planet.residents === null ? <img src={noDataImg}/> : (
            <ResidentsList residents={planet.residents} />
          )}
        </div>
      </div>
    );
  }
}

export default FamousResidents;
