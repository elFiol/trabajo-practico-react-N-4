import { Container } from "react-bootstrap"
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <Container className="my-4 mainPage">
      <h1 className="text-center">Lista de tareas</h1>
      <FormularioTarea></FormularioTarea>
    </Container>)
}

export default App
