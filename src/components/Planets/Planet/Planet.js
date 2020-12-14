import tattoine from "../../../assets/image/tattoine.png";

const Planet = (props) => {
  return (
    <div className="planet-item" key={props.index} onClick={props.click}>
      <img src={tattoine} alt={props.name} />
      <div className="preview">
        <h2>{props.name}</h2>
        <p>{props.climate}</p>
      </div>
    </div>
  );
};


export default Planet