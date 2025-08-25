// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar"; // Ajuste o caminho se necessário
import Home from "./pages/home";
import Historico from "./pages/historico";
import Chamados from "./pages/chamados";
import User from "./pages/user";
import Config from "./pages/config";
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flexGrow: 1, padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historico" element={<Historico />} />
            <Route path="/chamados" element={<Chamados />} />
            <Route path="/usuarios" element={<User />} />
            <Route path="/configuracao" element={<Config />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;