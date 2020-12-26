import React from "react";
import Vehicle from "./Vehicle";

const VehicleList = (props) =>
  props.vehicles.map((vehicle) => {
    return (
      <Vehicle
        key={vehicle.url.match(/(\d+)/)[0]}
        vehicleId={vehicle.url.match(/(\d+)/)[0]}
        name={vehicle.name}
        selectedVehicle={props.selectedVehicle}
        clicked={() => props.clicked(vehicle.url.match(/(\d+)/)[0])}
      />
    );
  });

export default VehicleList;
