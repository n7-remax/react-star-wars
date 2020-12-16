import React from "react";
import Planet from "./Planet";

const PlanetList = (props) =>
  props.planets.map((planet) => {
    return (
      <Planet
        key={planet.url.match(/(\d+)/)[0]}
        planetId={planet.url.match(/(\d+)/)[0]}
        name={planet.name}
        climate={planet.climate}
        selectedPlanet={props.selectedPlanet}
        clicked={() => props.clicked(planet.url.match(/(\d+)/)[0])}
      />
    );
  });

export default PlanetList;
