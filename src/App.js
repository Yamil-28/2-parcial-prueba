import CardHeader from "./components/moleculas/CardHeader";
import CardBody from "./components/moleculas/CardBody";

function App() {
  return (
    <>
      <CardHeader title="Agenda" code="SAAS-0000" color="red" />
      <CardBody description="Descripción ejemplo" date="3/8/2020" />
    </>
  );
}

export default App;
