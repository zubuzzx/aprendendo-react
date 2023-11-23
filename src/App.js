import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Contato from "./Components/pages/Contato";
import QuemSomos from './Components/pages/QuemSomos';
import { FaHome } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculadora from './Components/Calculadora';

function App() {


  return (
    <div>
      <BrowserRouter>
        <div className="Fundinho">
          <h1>Menu</h1>
          <ul>
            <li><Link to="/"><FaHome />Home</Link></li>
            <li><Link to="/contato">Contatos</Link></li>
            <li><Link to="/quemsomos">Quem somos</Link></li>
            <li><Link to="/calculadora">calculadora</Link></li>
          </ul>
        </div>

      {/* aqui aparecerá o componente da rota */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/quemsomos" element={<QuemSomos />} />
          <Route path="/calculadora" element={<Calculadora />} />
        </Routes>
      </BrowserRouter>

      <p>fim rodapé</p>
    </div>


  );
}

export default App;
