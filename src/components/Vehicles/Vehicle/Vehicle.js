import vehicleAvatars from "./vehicleAvatars";

const Vehicle = (props) => {
  const result = vehicleAvatars.find((avatar) => avatar.name === props.name);
  console.log(result);
  return (
    <div
      className={
        props.vehicleId === props.selectedVehicle
          ? "component-item active"
          : "component-item"
      }
      onClick={props.clicked}
    >
      {result ? <img src={result.url} alt={props.name} /> : null}
      <div className="preview">
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};

export default Vehicle;
