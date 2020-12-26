import tattoine from "../../../assets/image/tattoine.png";

const Vehicle = (props) => {
  return (
    <div className={props.vehicleId === props.selectedVehicle? "planet-item active": "planet-item"} onClick={props.clicked}>
      <img src={tattoine} alt={props.name} />
      <div className="preview">
        <h2>{props.name}</h2>
        <p>{props.climate}</p>
      </div>
    </div>
  );
};


export default Vehicle