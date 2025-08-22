import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const items = ["Início", "Relatórios", "Usuários", "Configurações"];

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div
        style={{
          width: isOpen ? "200px" : "60px",
          backgroundColor: "#fff",
          height: "100vh",
          borderRight: "1px solid #ddd",
          transition: "width 0.3s",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        {/* Botão de abrir/fechar */}
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

        {/* Itens */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderRadius: "5px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#f0f0f0")}
              onMouseLeave={(e) => (e.target.style.background = "transparent")}
            >
              {isOpen ? item : item.charAt(0)}
            </li>
          ))}
        </ul>
      </div>

      {/* Conteúdo principal */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Painel Principal</h1>
        <p>Aqui vai o conteúdo da página.</p>
      </div>
    </div>
  );
};

export default Sidebar;
