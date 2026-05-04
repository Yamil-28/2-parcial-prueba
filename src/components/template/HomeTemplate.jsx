import "./HomeTemplate.css";
import Card from "../organismos/Card";

function HomeTemplate() {
  return (
    <div className="container">
      <Card color="red" />
      <Card color="purple" />
      <Card color="blue" />
    </div>
  );
}

export default HomeTemplate;