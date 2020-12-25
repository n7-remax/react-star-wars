import React, { Component } from "react";
import axios from "axios";

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
    this.onVehicleSelect(1);
  }
  //   if currentPage is changed, update component
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
      console.log("updated");
      this.getPlanets(`vehicles/?page=${this.state.currentPage}`).then(
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
    this.getPlanets(`vehicles/${id}/`).then((res) => {
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
    return <div className="vehicles">Vehicles</div>;
  }
}

export default Vehicles;
