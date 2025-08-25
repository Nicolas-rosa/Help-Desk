// src/sidebar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importe o Link

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // É uma boa prática criar um array de objetos para os itens do menu
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Historico", path: "/historico" },
    { name: "Chamados", path: "/chamados" },
    { name: "Usuários", path: "/usuarios" },
    { name: "Configuração", path: "/configuracao" },
  ];

  return (
    <div
      style={{
        width: isOpen ? "200px" : "60px",
        backgroundColor: "#fff",
        height: "100vh",
        borderRight: "1px solid #ddd",
        transition: "width 0.3s",
        padding: "10px",
        boxSizing: "border-box",
        borderRadius: "12px",
        flexShrink: 0, // Impede que o sidebar encolha
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          marginBottom: "20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        ☰
      </button>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              cursor: "pointer",
              borderRadius: "5px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f0f0")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {/* Use o Link para envolver cada item */}
            <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              {isOpen ? item.name : item.name.charAt(0)}
            </Link>
          </li>
        ))}
      </ul>

      {/* O conteúdo principal foi REMOVIDO daqui */}
    </div>
  );
};

export default Sidebar;