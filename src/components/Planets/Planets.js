import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

import tattoine from "../../assets/image/tattoine.png";
import PlanetList from "./Planet/PlanetList";

class Planets extends Component {
  state = {
    initialPage: this.props.match.params.page,
    count: null,
    nextPage: 1,
    prevPage: null,
    currentPage: 1,
    planets: [],
    selectedPlanet: [],
    planetsIsLoaded: false,
    selectedPlanetIsLoaded: false,
  };

  getPlanets = async (page) => {
    const response = await axios(page);
    return response;
  };

  componentDidMount() {
    this.getPlanets(`planets/?page=${this.state.initialPage}`).then((res) => {
      console.log(res);
      this.setState({
        count: res.data.count,
        nextPage: res.data.next,
        prevPage: res.data.previous,
        planets: res.data.results,
        planetsIsLoaded: true,
      });
    });
    this.onPlanetSelect(1);
  }
  // if currentPage is changed, update component
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
      console.log("updated");
      this.getPlanets(`planets/?page=${this.state.currentPage}`).then((res) => {
        this.setState({
          count: res.data.count,
          nextPage: res.data.next,
          prevPage: res.data.previous,
          planets: res.data.results,
        });
      });
    }
  }
  // get selected planet from api
  onPlanetSelect = (id) => {
    this.getPlanets(`planets/${id}/`).then((res) => {
      console.log(res);
      this.setState({
        selectedPlanet: res.data,
        selectedPlanetIsLoaded: true,
      });
    });
  };
  // merge url param props to trigger component update
  static getDerivedStateFromProps(props, state) {
    return {
      currentPage: props.match.params.page,
    };
  }

  render() {
    const maxPages = Math.ceil(this.state.count / 10);
    return (
      <div className="planets">
        {this.state.selectedPlanetIsLoaded ? (
          <div className="planets-preview">
            <img src={tattoine} alt={this.state.selectedPlanet.name} />
            <div className="planets-preview-desc">
              <h2>{this.state.selectedPlanet.name}</h2>
              <ul>
                <li>Terrain: {this.state.selectedPlanet.terrain}</li>
                <li>Diameter: {this.state.selectedPlanet.diameter}</li>
                <li>Gravity: {this.state.selectedPlanet.gravity}</li>
                <li>
                  Orbital Period: {this.state.selectedPlanet.orbital_period}
                </li>
                <li>
                  Rotation Period: {this.state.selectedPlanet.rotation_period}
                </li>
                <li>
                  Surface Water: {this.state.selectedPlanet.surface_water}
                </li>
                <li>Population: {this.state.selectedPlanet.orbital_period}</li>
              </ul>
              <div className="planets-preview-btn">
                {typeof this.state.selectedPlanet.residents !== "undefined" &&
                this.state.selectedPlanet.residents.length > 0 ? (
                  <Link
                    to={
                      this.state.selectedPlanet.url
                        ? `/react-star-wars/planet/${
                            this.state.selectedPlanet.url.match(/(\d+)/)[0]
                          }`
                        : `/react-star-wars/planet/1`
                    }
                    className="trans-rt-lt"
                  >
                    Famous Residents
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <div className="loader-container">
            <Loader type="Circles" color="#00BFFF" height={80} width={80} />
          </div>
        )}
        {this.state.planetsIsLoaded && this.state.selectedPlanetIsLoaded ? (
          <div className="planets-list-wrapper">
            
            <Link
              to={`/react-star-wars/planets/${
                this.state.currentPage > 1
                  ? +this.state.currentPage - 1
                  : this.state.currentPage
              }`}
            >
              <div
                className={
                  this.state.prevPage
                    ? "planet-btn btn-prev"
                    : "planet-btn btn-prev btn-disabled"
                }
                disabled={this.state.prevPage ? false : true}
              ></div>
            </Link>
            <div className="planets-list">
            <PlanetList
              selectedPlanet={this.state.selectedPlanet.url.match(/(\d+)/)[0]}
              planets={this.state.planets}
              clicked={this.onPlanetSelect}
            />
            </div>

            <Link
              to={`/react-star-wars/planets/${
                this.state.currentPage < maxPages
                  ? +this.state.currentPage + 1
                  : this.state.currentPage
              }`}
            >
              <div
                className={
                  this.state.nextPage
                    ? "planet-btn btn-next"
                    : "planet-btn btn-next btn-disabled"
                }
                disabled={this.state.nextPage ? false : true}
              ></div>
            </Link>
          </div>
        ) : (
          <div className="loader-container">
            <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
          </div>
        )}
      </div>
    );
  }
}

export default Planets;
