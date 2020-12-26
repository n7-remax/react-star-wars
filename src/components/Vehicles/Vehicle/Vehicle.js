import tattoine from "../../../assets/image/tattoine.png";

const Vehicle = (props) => {
  return (
    <div className={props.vehicleId === props.selectedVehicle? "component-item active": "component-item"} onClick={props.clicked}>
      <img src={tattoine} alt={props.name} />
      <div className="preview">
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};


export default Vehicle