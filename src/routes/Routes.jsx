import Home from "../pages/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Cursos from "../pages/Cursos/Cursos";
import VisualizarCurso from "../pages/VisualizarCurso/VisualizarCurso";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/cursos/:id" element={<VisualizarCurso />} />
      </Switch>
    </Router>
  );
}
