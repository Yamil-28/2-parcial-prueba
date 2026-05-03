import "./CardBody.css";

function CardBody({ description, date }) {
  return (
    <div className="card-body">
      <p>{description}</p>
      <small>Last Updated: {date}</small>
    </div>
  );
}

export default CardBody;