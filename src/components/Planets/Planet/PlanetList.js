import React from "react";
import Planet from "./Planet";

const PlanetList = (props) =>
  props.planets.slice(0,5).map((planet, index) => {
    return (
      <Planet
        key={index}
        name={planet.name}
        climate={planet.climate}
        clicked={() => props.clicked(planet.url.match(/(\d+)/)[0])}
      />
    );
  });

export default PlanetList;
