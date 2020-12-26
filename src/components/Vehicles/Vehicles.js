import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

import tattoine from "../../assets/image/tattoine.png";
import VehicleList from "./Vehicle/VehicleList";

class Vehicles extends Component {
  state = {
    initialPage: this.props.match.params.page,
    count: null,
    nextPage: 1,
    prevPage: null,
    currentPage: 1,
    vehicles: [],
    selectedVehicle: [],
    vehiclesIsLoaded: false,
    selectedVehicleIsLoaded: false,
  };

  getVehicles = async (page) => {
    const response = await axios(page);
    return response;
  };

  componentDidMount() {
    console.log("mounted");
    this.getVehicles(`vehicles/?page=${this.state.initialPage}`).then((res) => {
      console.log(res);
      this.setState({
        count: res.data.count,
        nextPage: res.data.next,
        prevPage: res.data.previous,
        vehicles: res.data.results,
        selectedVehicle: res.data.results[0],
        vehiclesIsLoaded: true,
      });
    });
    this.onVehicleSelect(4);
  }
  //   if currentPage is changed, update component
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
      console.log("updated");
      this.getVehicles(`vehicles/?page=${this.state.currentPage}`).then(
        (res) => {
          this.setState({
            count: res.data.count,
            nextPage: res.data.next,
            prevPage: res.data.previous,
            vehicles: res.data.results,
          });
        }
      );
    }
  }
  //   // get selected vehicle from api
  onVehicleSelect = (id) => {
    this.getVehicles(`vehicles/${id}/`).then((res) => {
      console.log(res);
      this.setState({
        selectedVehicle: res.data,
        selectedVehicleIsLoaded: true,
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
        {this.state.selectedVehicleIsLoaded ? (
          <div className="planets-preview">
            <img src={tattoine} alt={this.state.selectedVehicle.name} />
            <div className="planets-preview-desc">
              <h2>{this.state.selectedVehicle.name}</h2>
              <ul>
                <li>Model: {this.state.selectedVehicle.model}</li>
                <li>Manufacturer: {this.state.selectedVehicle.manufacturer}</li>
                <li>Length: {this.state.selectedVehicle.length}</li>
                <li>
                  Max Atmosphering Speed:{" "}
                  {this.state.selectedVehicle.max_atmosphering_speed}
                </li>
                <li>Crew: {this.state.selectedVehicle.crew}</li>
                <li>Passengers: {this.state.selectedVehicle.passengers}</li>
                <li>
                  Cargo capacity: {this.state.selectedVehicle.cargo_capacity}
                </li>

                <li>
                  Vehicle Class: {this.state.selectedVehicle.vehicle_class}
                </li>

                <li>
                  Cost in credits: {this.state.selectedVehicle.cost_in_credits}
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="loader-container">
            <Loader type="Circles" color="#00BFFF" height={80} width={80} />
          </div>
        )}
        {this.state.vehiclesIsLoaded && this.state.selectedVehicleIsLoaded ? (
          <div className="planets-list-wrapper">
            <Link
              to={`/react-star-wars/vehicles/${
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
              <VehicleList
                selectedVehicle={
                  this.state.selectedVehicle.url.match(/(\d+)/)[0]
                }
                vehicles={this.state.vehicles}
                clicked={this.onVehicleSelect}
              />
            </div>

            <Link
              to={`/react-star-wars/vehicles/${
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
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={80}
              width={80}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Vehicles;
