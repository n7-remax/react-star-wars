import React from "react";

import residentsAvatars from "./residentsAvatars";

const ResidentsList = (props) =>
  props.residents.map((resident, index) => {
    const result = residentsAvatars.find((avatar) => avatar.name === resident);
    return (
      <div className="resident-card" key={index}>
        {result ? (
          <div
            className="resident-card-img"
            style={{ backgroundImage: `url(${result.url})` }}
          ></div>
        ) : null}
        <h2> {resident}</h2>
      </div>
    );
  });

export default ResidentsList;
