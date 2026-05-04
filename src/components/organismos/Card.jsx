import "./Card.css";
import CardHeader from "../moleculas/CardHeader";
import CardBody from "../moleculas/CardBody";

function Card({ color }) {
  return (
    <div className="card">
      <CardHeader 
        title="Agenda/Topic" 
        code="SAAS-0000" 
        color={color} 
      />
      <CardBody
        description="Descripción del contenido"
        date="3/8/2020"
      />
    </div>
  );
}

export default Card;