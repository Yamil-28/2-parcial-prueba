import "./CardHeader.css";

function CardHeader({ title, code, color }) {
  return (
    <div className="card-header" style={{ background: color }}>
      <span>{title}</span>
      <span>{code}</span>
    </div>
  );
}

export default CardHeader;